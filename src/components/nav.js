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
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: `12px`,
    height: 70,
    textDecoration: 'none',
    borderBottom: `1px solid ${STYLES.DARKER_GRAY}`,
    padding: '10px 0px'
  },
  logoNav: {
    height: STYLES.TITLE_HEIGHT,
    backgroundColor: STYLES.LIGHT_MEDIUM_GRAY
  },
  navIcon: {
    flexBasis: '100%',
    order: 0,
  },
  navLabel: {
    flexBasis: '100%',
    order: 1,
    color: STYLES.OFF_WHITE,
    fontSize: 14,
    letterSpacing: 1,
  }
}

const homeNav = {
  ...styling.navItem,
  height: STYLES.TITLE_HEIGHT,
}

const HomeLink = props => {
  return <Link to="/" style={{...homeNav, backgroundColor: props.color || STYLES.DARKER_GRAY}}>ROLO</Link>;
}

const NavLink = props => {
  const { to, style, label, icon, color } = props;
  console.log('color ~~>', color);
  return (
    <Link to={to} style={styling.navItem} activeStyle={{borderRight: `4px solid ${color || STYLES.OFF_WHITE}`}}>
      <div style={styling.navLabel}>{label}</div>
      <div style={styling.navIcon}><i className={`fa fa-${icon}`}></i></div>
    </Link>
  );
};

class Header extends Component {
  defaultNav() {
    return (
      <div className="navbar contain">
        <HomeLink>ROLO</HomeLink>
        <Link to="/signin" style={styling.navItem}>Sign In</Link>
        <Link to="/signup" style={styling.navItem}>Sign Up</Link>
      </div>
    );
  }

  authNav() {
    const uid = this.props.currentUser.uid;
    const color = this.props.currentUser.color;
    return (
      <div className="navbar contain">
        <HomeLink color={this.props.color}>ROLO</HomeLink>
        <NavLink to={`/${uid}`} icon="address-card" label="VIEW" color={color}/>
        <NavLink to={`/edit/${uid}`} icon="pencil" label="Edit" color={color}/>
        <NavLink to="/templates" icon="paint-brush" label="Templates" color={color}/>
        <NavLink to="/signout" icon="user-times" label="Log Out" color={color}/>
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
    currentUser: state.auth.currentUser,
    color: state.auth.currentUser.color
  };
}

export default connect(mapStateToProps)(Header)
