import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    console.log('this.props.authenticated ~~>', this.props.authenticated);
    return (
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          <Link to="/" className="navbar-brand">Boom</Link>
          <li className="nav-item">adlskfj</li>
          <li className="nav-item">adlskfj</li>
          <li className="nav-item">adlskfj</li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state = {}) {
  console.log('state ~~>', state);
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header)
