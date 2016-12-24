import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  defaultNav() {
    return (
      <ul className="nav navbar-nav">
        <Link to="/" className="navbar-brand">ROLO</Link>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    );
  }

  authNav() {
    return (
      <ul className="nav navbar-nav">
        <Link to="/" className="navbar-brand">ROLO</Link>
        <li><Link to="/resume">View Resume</Link></li>
        <li><Link to="/templates">Templates</Link></li>
        <li><Link to="/signout">Sign Out</Link></li>
      </ul>
    );
  }

  nav() {
    return (this.props.authenticated)
      ? this.authNav()
      : this.defaultNav();
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        {this.nav()}
      </nav>
    );
  }
}

function mapStateToProps(state = {}) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header)
