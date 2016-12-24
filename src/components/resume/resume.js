import React, { Component } from 'react';
import { Link } from 'react-router';

import resumeData from './mock-resume';
import Classic from '../templates/classic';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return <Classic data={resumeData} />;
  }
}

export default Resume;
