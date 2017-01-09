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
    this.props.getUser(this.props.params.username);
  }

  render() {
    return (
      <div style={{postion: 'relative'}}>
        {this.props.viewingUser &&
          <Classic viewingUser={this.props.viewingUser} formData={formData} data={resumeData}/>
        }
      </div>
    );
  }
}

function mapStateToProps(state = {}, ownProps) {
  return {
    viewingUser: state.auth.viewingUser,
    formData: state.form.editor.values
  };
}

export default connect(mapStateToProps, actions)(Resume)
