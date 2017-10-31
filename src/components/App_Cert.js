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
import CertTable from './dashboard/cert_table';


class AppCert extends Component {
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
                <VerticalMenu activeItem="Certificates" />
              </Grid.Column>
              <Grid.Column width={12}>
                <CertTable />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        </Segment>
      </div>
    );
  }
}

export default AppCert;
