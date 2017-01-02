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

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log(this.props);
    return (
      <div style={{postion: 'relative'}}>
        {/* <Link style={styling.edit} to="/resume/edit">
          <i className="fa fa-pencil"></i>
          Edit
        </Link> */}
        <Classic data={resumeData} />
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  return { currentUser: state.auth.currentUser };
}

export default connect(mapStateToProps, actions)(Resume)
