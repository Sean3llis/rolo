import React, { Component } from 'react';

import Header from './header';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <br />
        <Header />
        {this.props.children}
      </div>
    );
  }
}
