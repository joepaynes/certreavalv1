import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../../history';

import {
  Segment,
  Dimmer,
  Loader
} from 'semantic-ui-react';

export default function(ComposedComponent) {
  class Authentication extends Component {
    constructor(props) {
      super(props);
      this.state = {
          isLoading: true
      };
    }

    //If user goes directly to dashboard will fire before 'Auth Listener' therefore
    //need to catch with 'isLoading' so that auth can intialise and pass props
    componentWillMount() {
      if(this.props.authenticated === false) {
          history.push('/');
      } else if (this.props.authenticated === true) {
        this.setState({ isLoading: false });
      }
    }

    //Catch after listener has fired
    componentWillReceiveProps(nextProps) {
      if(nextProps.authenticated === false) {
          history.push('/');
      } else if (nextProps.authenticated === true) {
          this.setState({ isLoading: false });
      }
    }

    render() {
      if(this.state.isLoading === true ) {
        return <Segment>
                  <Dimmer active>
                    <Loader />
                  </Dimmer>
                </Segment>
      } else {
      return <ComposedComponent {...this.props} />
      }
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}