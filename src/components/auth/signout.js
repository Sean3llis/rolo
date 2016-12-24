import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
class SignOut extends Component {
  componentWillMount() {
    console.log('this.props ~~>', this.props);
    this.props.signOutUser();
  }
  render() {
    return (
      <div className="text text-success">Successfully Logged Out</div>
    );
  }
};

export default connect(null, actions)(SignOut);
