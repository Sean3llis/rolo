import React, { Component } from 'react';
import classNames from 'classnames';
import * as STYLES from '../styles';
const styling = {
  classic: {

  },
  blurb: {
    padding: '20px 0px'
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
    display: 'flex',
    alignContent: 'flex-end',
    fontSize: 0
  },
  contactNode: {
    ...STYLES.LABEL,
    display: 'inline-block',
    backgroundColor: STYLES.PRIMARY,
    color: STYLES.OFF_WHITE,
    position: 'relative',
    overflow: 'hidden',
    marginRight: STYLES.CONTACT.padding,
    marginBottom: STYLES.CONTACT.padding,
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
    left: 0
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
    for (var i = 0; i < projects.length; i++) {
      let currentProject = projects[i];
      projectNodes.push(
        <div className="contain" key={i}>
          <div className="project">
            <a href={currentProject.link} target="_blank">
            <h4>{currentProject.title} <i>{currentProject.blurb}</i></h4>
            <div>{currentProject.description}</div>
            </a>
            <hr/>
          </div>
        </div>
      );
    }
    return projectNodes;
  }

  stampContacts(contacts) {
    const contactNodes = [];
    for (var i = 0; i < contacts.length; i++) {
      let currentContact = contacts[i];
      contactNodes.push(
        <span style={{...styling.contactNode, backgroundColor: this.props.formData.color}} key={i}>
          <i className={classNames('fa', `fa-${currentContact.icon}`)} style={styling.contactIcon}></i>
          {currentContact.value}
        </span>
      );
    }
    return contactNodes;
  }

  render() {
    const { name, title, blurb, contacts, skills, projects } = this.props.data;
    if (!this.props.formData || !this.props.formData.projects) return null;
    return (
      <div id="resume">
        <div id="nameplate" style={{...styling.nameplate, backgroundColor: this.props.formData.color}}>
          <div id="name" style={styling.name}>{this.props.formData.name}</div>
          <div style={styling.title}>{this.props.formData.title}</div>
        </div>
        <div id="contacts" style={styling.contacts}>
          <div className="contain">
            {this.stampContacts(contacts)}
          </div>
        </div>
        {/* <div className="skill-container contain">
          {this.stampSkills(skills)}
        </div> */}
        <div id="blurb" style={styling.blurb}>
          <div className="contain">
            {this.props.formData.blurb}
          </div>
        </div>
        <div className="projects-container">
          {this.stampProjects(this.props.formData.projects)}
        </div>
      </div>
    );
  }
}

export default ClassicTemplate;
