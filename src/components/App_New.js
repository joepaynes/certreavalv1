import React, { Component } from 'react';

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


class AppNew extends Component {
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
                <CertForm />
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