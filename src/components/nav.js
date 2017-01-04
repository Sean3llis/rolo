import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as STYLES from './styles';
const styling = {
  navbar: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    width: STYLES.NAV_WIDTH,
    borderRight: `2px solid ${STYLES.DARK_GRAY}`,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: STYLES.DARK_GRAY,
  },
  navItem: {
    color: STYLES.OFF_WHITE,
    display: 'block',
    textAlign: 'center',
    lineHeight: `${STYLES.NAV_WIDTH / 2}px`,
    height: `${STYLES.NAV_WIDTH / 2}px`,
    fontSize: 16,
    margin: '0 10px',
    textDecoration: 'none',
  }
}

const homeNav = {
  ...styling.navItem,
  backgroundColor: STYLES.PRIMARY
}

class Header extends Component {
  defaultNav() {
    return (
      <div className="navbar contain">
        <Link to="/" style={homeNav}>ROLO</Link>
        <Link to="/signin" style={styling.navItem}>Sign In</Link>
        <Link to="/signup" style={styling.navItem}>Sign Up</Link>
      </div>
    );
  }

  authNav() {
    const username = this.props.currentUser.username;
    return (
      <div className="navbar contain">
        <Link to="/" style={styling.navItem}>ROLO</Link>
        <Link to={`/${username}`} style={styling.navItem}>View Resume</Link>
        <Link to={`/${username}/edit`} style={styling.navItem}>Edit Resume</Link>
        <Link to="/templates" style={styling.navItem}>Templates</Link>
        <Link to="/signout" style={styling.navItem}>Sign Out</Link>
        <Link to="/settings" style={styling.navItem}><i className="fa fa-gear"></i></Link>
      </div>
    );
  }

  nav() {
    return (this.props.currentUser)
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
  return {
    authenticated: state.auth.authenticated,
    currentUser: state.auth.currentUser
  };
}

export default connect(mapStateToProps)(Header)
