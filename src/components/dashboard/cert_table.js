import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../actions';
import history from '../../history';

import VerticalMenu from './vert_menu';
import NewCertForm from "../forms/new_certificate/root_form"

import {
    auth,
    db
} from '../../firebase/firebase';

import { 
    Table,
    Grid,
    Container,
} from 'semantic-ui-react';

class CertTable extends Component {

    state = {
        column: null,
        // No certificates will return this initial data - TODO - push out to own file
        data: null,
        direction: null,
    }

    componentWillMount() {
        const uid = this.props.authentication.uid;
        const user = db.ref(`certificates/${uid}/certificates`);
        user.once("value")
            .then(snapshot => {
                const uncompiled = snapshot.val();
                const complier = data => {
                    return {
                        certificate: data.name,
                        type: data.type,
                        expiry: data.expiryDate
                    }
                }
                const compiled = _.map(uncompiled, complier);
                this.setState({
                    data: compiled
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
                    <Table sortable celled fixed selectable>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell sorted={column === 'certificate' ? direction : null} onClick={this.handleSort('certificate')}>
                            Certificate
                            </Table.HeaderCell>
                            <Table.HeaderCell sorted={column === 'type' ? direction : null} onClick={this.handleSort('type')}>
                            Type
                            </Table.HeaderCell>
                            <Table.HeaderCell sorted={column === 'expiry' ? direction : null} onClick={this.handleSort('expiry')}>
                            Expiry Date
                            </Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>
                        <Table.Body>
                        {_.map(data, ({ type, expiry, certificate }) => (
                            <Table.Row key={certificate}>
                            <Table.Cell>{certificate}</Table.Cell>
                            <Table.Cell>{type}</Table.Cell>
                            <Table.Cell>{expiry}</Table.Cell>
                            </Table.Row>
                        ))}
                        </Table.Body>
                    </Table>
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

