import React, { Component } from 'react';

//Semantic Components
import {
  Header,
  Container,
  Button,
  Icon,
  Segment
} from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div>
        <Segment
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
          <Container text>
                <Header
                  as='h1'
                  content='Certificate Tracking'
                  style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
                />
                <Header
                  as='h2'
                  content='Never worry about certificates expiring ever again.'
                  style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                />
                <Button primary size='huge'>
                  Get Started
                  <Icon name='right arrow' />
                </Button>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Home;