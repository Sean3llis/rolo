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
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: STYLES.DARK_GRAY,
  },
  navItem: {
    color: STYLES.OFF_WHITE,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    textAlign: 'center',
    lineHeight: `12px`,
    height: `${STYLES.NAV_WIDTH}px`,
    textDecoration: 'none',
  },
  logoNav: {
    height: STYLES.TITLE_HEIGHT,
    backgroundColor: STYLES.LIGHT_MEDIUM_GRAY
  },
  navIcon: {
    flexBasis: '100%',
    order: 0,
    fontSize: 20,
  },
  navLabel: {
    flexBasis: '100%',
    order: 1,
    color: STYLES.OFF_WHITE,
    fontSize: 14,
    fontWeight: 100,
    letterSpacing: 1,
  }
}

const NavLink = ({ to, style, label, icon }) => {
  const iconLink = (
    <Link to={to} style={styling.navItem}>
      <div style={styling.navLabel}>{label}</div>
      <div style={styling.navIcon}><i className={`fa fa-${icon}`}></i></div>
    </Link>
  )
  return (icon)
    ? iconLink
    : <Link to={to} style={styling.navItem}>{label}</Link>
};

const homeNav = {
  ...styling.navItem,
  height: STYLES.TITLE_HEIGHT,
  backgroundColor: STYLES.DARKER_GRAY
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
        <Link to="/" style={homeNav}>ROLO</Link>
        <NavLink to={`/${username}`} icon="eye" label="VIEW"></NavLink>
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
