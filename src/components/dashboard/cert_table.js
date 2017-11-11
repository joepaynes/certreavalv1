import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../actions';
import history from '../../history';

import VerticalMenu from './vert_menu';
import NewCertForm from "../forms/new_certificate/root_form";

import placeholder from '../../images/imageplaceholder.png';

import {
    auth,
    db
} from '../../firebase/firebase';

import { 
    Item,
    Grid,
    Container,
    Image as ImageComponent,
    Segment
} from 'semantic-ui-react';

class CertTable extends Component {

    state = {
        column: null,
        // No certificates will return this initial data - TODO - push out to own file
        data: null,
        direction: null,
        isLoading: true
    }

    componentWillMount() {
        const uid = this.props.authentication.uid;
        const user = db.ref(`certificates/${uid}/certificates`);
        user.once("value")
            .then(snapshot => {
                const uncompiled = snapshot.val();
                const complier = data => {
                    return {
                        expiryDate: data.expiryDate,
                        name: data.name,
                        issueDate: data.issueDate,
                        type: data.type,
                        institute: data.institute,
                        country: data.country,
                    }
                }
                const compiled = _.map(uncompiled, complier);
                this.setState({
                    data: compiled,
                    isLoading: false
                })
            })
            .catch(err => {
                console.log("Error fetching certificates", err);
            });
    }

    handleSort = clickedColumn => () => {
        const { column, data, direction } = this.state
    
        if (column !== clickedColumn) {
          this.setState({
            column: clickedColumn,
            data: _.sortBy(data, [clickedColumn]),
            direction: 'ascending',
          })
    
          return
        }
    
        this.setState({
          data: data.reverse(),
          direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
      }

    renderCerts = () => {
        const data = this.state.data;
        return _.map(data, ({ type, expiryDate, name, institute, country }) => (
            <Item key={name}>
                <Item.Image size="tiny" src={placeholder} />
                <Item.Content>
                    <Item.Header>{name}</Item.Header>
                    <Item.Meta>Expiry: {expiryDate}</Item.Meta>
                    <Item.Description>Issued by {institute} in {country}</Item.Description>
                    <Item.Extra>{type}</Item.Extra>
                </Item.Content>
            </Item>
        ));
    }

    Loader = () => {
        if (this.state.isLoading === true) {
            return (
                <Segment size="big" style={{ minHeight: 700}} loading />
            )
        } else if (this.state.isLoading === false) {
            return (
                <Item.Group divided link>
                    {this.renderCerts()}
                </Item.Group>
            ) 
        }
    }

    render() {
        const { column, data, direction } = this.state
        console.log(this.props.authentication);

        return(
        <Container className="dashboard">
            <Grid>
                <Grid.Column width={4}>
                    <VerticalMenu activeItem="Certificates" />
                </Grid.Column>
                <Grid.Column width={12}>
                    {this.Loader()}
                    <NewCertForm onSubmit = {this.certificateSubmit} />     
                </Grid.Column>
            </Grid>
        </Container>
        );
    };

    certificateSubmit(values) {
        const uid = auth.currentUser.uid;
        db.ref(`certificates/${uid}/certificates/${values.name}`).set({
                name: values.name,
                issueDate: values.issueDate,
                expiryDate: values.expiryDate,
                type: values.type,
                institute: values.institute,
                country: values.country,
                declaration: values.declaration,
                TC: values.TC
        })
        history.push('/dashboard');
    }
}

function mapStateToProps(state) {
    return {
        certificates: state.certificates,
        authentication: state.auth
    };
}
export default connect(mapStateToProps, actions)(CertTable);

