import React, { Component } from 'react';

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
        <div className="well" key={i}>
          <div className="project">
            <h4>{currentProject.title} <i>{currentProject.blurb}</i></h4>
            <div>{currentProject.body}</div>
            <hr/>
          </div>
        </div>
      );
    }
    return projectNodes;
  }

  render() {
    const { name, title, blurb, skills, projects } = this.props.data;
    return(
      <div id="resume">
        <div className="well">
          <h1>{name}</h1>
          <div className="sub">{title}</div>
          <div className="blurb">{blurb}</div>
          <div className="skill-container">
            {this.stampSkills(skills)}
          </div>
        </div>
        <div className="projects-container">
          {this.stampProjects(projects)}
        </div>
      </div>
    );
  }
}

export default ClassicTemplate;
