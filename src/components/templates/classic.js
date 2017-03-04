import React, { Component } from 'react';
import classNames from 'classnames';
import * as STYLES from '../styles';
const styling = {
  classic: {

  },
  blurb: {
    padding: '20px 0px',
  },
  nameplate: {
    backgroundColor: STYLES.PRIMARY,
    padding: '40px 0px',
  },
  name: {
    fontSize: 100,
    lineHeight: '100px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: STYLES.OFF_WHITE,
    whiteSpace: 'nowrap'
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    padding: '4px 16px',
    borderRadius: 2
  },
  contacts: {
    padding: `${STYLES.CONTACT.padding}px 0px 0px 0px`,
    fontSize: 0,
    textAlign: 'center'
  },
  contactNode: {
    ...STYLES.LABEL,
    display: 'inline-block',
    backgroundColor: STYLES.PRIMARY,
    color: STYLES.OFF_WHITE,
    position: 'relative',
    overflow: 'hidden',
    minWidth: 200,
    marginRight: STYLES.CONTACT.padding,
    marginBottom: STYLES.CONTACT.padding,
    textAlign: 'left'
  },
  contactIcon: {
    textAlign: 'center',
    backgroundColor: STYLES.DARK_GRAY,
    color: STYLES.OFF_WHITE,
    position: 'absolute',
    height: STYLES.LABEL.height,
    lineHeight: `${STYLES.LABEL.height}px`,
    width: STYLES.LABEL.height,
    fontSize: 14,
    top: 0,
    left: 0,
    borderRadius: 2
  },
  project: {
    position: 'relative',
    margin: '40px 0px'
  },
  projectBorder: {
    backgroundColor: STYLES.BORDER,
    position: 'absolute',
    height: '100%',
    width: 2,
    left: -10
  },
  projectTitle: {
    margin: 0,
    marginBottom: 4,
  },
  projectLink: {
    fontSize: 16,
    fontStyle: 'italic'
  }
};

class ClassicTemplate extends Component {
  stampSkills(skills) {
    const skillLabels = [];
    for (var i = 0; i < skills.length; i++) {
      let currentSkill = skills[i];
      skillLabels.push(
        <div className="label label-info" key={i}>{currentSkill}</div>
      );
    }
    return skillLabels;
  }

  stampProjects(projects) {
    const projectNodes = [];
    if (!projects) return null;
    for (var i = 0; i < projects.length; i++) {
      let currentProject = projects[i];
      let title = (!currentProject.link)
        ? (<h2 style={styling.projectTitle}>{currentProject.title}</h2>)
        : (
          <h2 style={styling.projectTitle}>
            <a href={currentProject.link} target="_blank" style={{textDecoration: 'none'}}>
            {currentProject.title} |
            <span style={styling.projectLink}>  <i className="fa fa-link" style={{color: STYLES.MEDIUM_GRAY}}></i> Link</span>
            </a>
          </h2>
        );
      projectNodes.push(
        <div key={i} className="project" style={styling.project}>
          {title}
          <div style={{position: 'relative'}}>
            <div className="project-border" style={styling.projectBorder}></div>
            {currentProject.description}
          </div>
        </div>
      );
    }
    return projectNodes;
  }

  stampContacts(contacts) {
    if (!contacts) return null;
    const contactNodes = [];
    for (var i = 0; i < contacts.length; i++) {
      let currentContact = contacts[i];
      if (!currentContact.value) continue;
      contactNodes.push(
        <span style={{...styling.contactNode, backgroundColor: this.props.data.color}} key={i}>
          <i className={classNames('fa', `fa-${currentContact.icon}`)} style={styling.contactIcon}></i>
          {currentContact.value}
        </span>
      );
    }
    return contactNodes;
  }

  render() {
    console.log('this.props.data ~~>', this.props.data);
    if (!this.props.data) return null;
    const { name, title, blurb, contacts, skills, projects } = this.props.data;
    return (
      <div id="resume">
        <div id="nameplate" style={{...styling.nameplate, backgroundColor: this.props.data.color}}>
          <div id="name" style={styling.name}>{this.props.data.name}</div>
          <div style={styling.title}>{this.props.data.title}</div>
        </div>
        <div className="contain">
        <div id="contacts" style={styling.contacts}>
            {this.stampContacts(contacts)}
        </div>
        {/* <div className="skill-container contain">
          {this.stampSkills(skills)}
        </div> */}
        <div id="blurb" style={styling.blurb}>
          <div className="contain">
            {this.props.data.blurb}
          </div>
        </div>
        <div className="projects-container contain">
          {this.stampProjects(this.props.data.projects)}
        </div>
        </div>
      </div>
    );
  }
}

export default ClassicTemplate;
