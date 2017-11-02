import React, { Component } from 'react';
import db  from '../firebase/firebase';

//Semantic Components
import {
   Grid, 
   Container,
   Segment
} from 'semantic-ui-react';

//Components
import NavBar from './NavBar';
import VerticalMenu from './dashboard/vert_menu';
import CertForm from './dashboard/cert_form';
import NewCertForm from  './redux-form';


class AppNew extends Component {

  submit = (values) => {
    db.ref("certifictates/").push({
      certificate: values.certName,
      type: values.certType,
      expiry: values.certExpiryDate
    })
  }

  render() {
    return (
      <div>
        <Segment
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
        >
        <NavBar />
        <Container className="dashboard">
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <VerticalMenu activeItem="Add New" />
              </Grid.Column>
              <Grid.Column width={12}>
                <NewCertForm onSubmit={this.submit} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        </Segment>
      </div>
    );
  }
}

export default AppNew;