import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import resumeData from './mock-resume';
import Classic from '../templates/classic';

import * as STYLES from '../styles';
import * as actions from '../../actions';

const styling = {
  edit: {
    ...STYLES.LABEL,
    position: 'absolute',
    top: 10,
    left: 10,
    textDecoration: 'none',
    color: STYLES.OFF_WHITE,
    backgroundColor: STYLES.PRIMARY,
  }
}

function Template(props) {
  return (props.viewingUser)
    ? <Classic viewingUser={props.viewingUser} data={resumeData}/>
    : null;
}

class Resume extends Component {
  componentWillMount() {
    this.props.getUser(this.props.params.uid);
  }

  render() {
    console.log('this.props.viewingUser ~~>', this.props.viewingUser);
    return (
      <div style={{postion: 'relative'}}>
        {this.props.viewingUser &&
          <Classic data={this.props.viewingUser}/>
        }
      </div>
    );
  }
}

function mapStateToProps(state = {}, ownProps) {
  return {
    viewingUser: state.auth.viewingUser,
  };
}

export default connect(mapStateToProps, actions)(Resume)
