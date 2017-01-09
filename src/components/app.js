import React, { Component } from 'react';

import Nav from './nav';
import * as STYLES from './styles';

const styling = {
  contentArea: {
    marginLeft: STYLES.NAV_WIDTH,
    backgroundColor: STYLES.LIGHT_GRAY,
    position: 'relative',
    padding: '40px 0px'
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="rolo">
        <Nav />
        <div id="content-area" style={styling.contentArea}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
