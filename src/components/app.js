import React, { Component } from 'react';

import Header from './header';
import * as STYLES from './styles';

const styling = {
  contentArea: {
    marginTop: STYLES.NAV_HEIGHT,
    backgroundColor: STYLES.LIGHT_GRAY,
    position: 'relative',
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="rolo">
        <Header />
        <div id="content-area" style={styling.contentArea}>
        {this.props.children}
        </div>
      </div>
    );
  }
}
