import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as STYLES from './styles';
const styling = {
  navbar: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: STYLES.NAV_HEIGHT,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: STYLES.DARK_GRAY
  },
  navItem: {
    color: STYLES.OFF_WHITE,
    display: 'inline-block',
    lineHeight: `${STYLES.NAV_HEIGHT}px`,
    fontSize: 16,
    margin: '0 10px',
    textDecoration: 'none',
  }
}

class Header extends Component {
  defaultNav() {
    return (
      <div className="navbar contain">
        <Link to="/" style={styling.navItem}>ROLO</Link>
        <Link to="/signin" style={styling.navItem}>Sign In</Link>
        <Link to="/signup" style={styling.navItem}>Sign Up</Link>
      </div>
    );
  }

  authNav() {
    return (
      <div className="navbar contain">
        <Link to="/" style={styling.navItem}>ROLO</Link>
        <Link to="/resume" style={styling.navItem}>View Resume</Link>
        <Link to="/resume/edit" style={styling.navItem}>Edit Resume</Link>
        <Link to="/templates" style={styling.navItem}>Templates</Link>
        <Link to="/signout" style={styling.navItem}>Sign Out</Link>
        <Link to="/settings" style={styling.navItem}><i className="fa fa-gear"></i></Link>
      </div>
    );
  }

  nav() {
    return (this.props.authenticated)
      ? this.authNav()
      : this.defaultNav();
  }

  render() {
    return (
      <nav style={styling.navbar} className="no-print">
        {this.nav()}
      </nav>
    );
  }
}

function mapStateToProps(state = {}) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header)
