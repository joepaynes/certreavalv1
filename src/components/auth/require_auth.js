import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../../history';
import { auth } from '../../firebase/firebase';

function observer() { 
    auth.onAuthStateChanged(user => {
        if(user === null) {
            history.push('/');
        }
    });
}

export default function(ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      observer();
    }

    componentWillUpdate(nextProps) {
        observer();
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}