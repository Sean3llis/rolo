import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as firebase from 'firebase';


export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      this.props.authenticateUser();
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  Authentication.contextTypes = {
    router: PropTypes.object.isRequired
  };

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps, actions)(Authentication)
}
