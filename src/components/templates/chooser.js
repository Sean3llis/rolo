import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const templateStyles = {
  width: '200px',
  height: '200px',
  textAlign: 'center',
  display: 'inline-block',
  marginRight: '15px'
};

const templates = [
  {
    name: 'classic',
    prettyName: 'Classic'
  },
  {
    name: 'creative',
    prettyName: 'Creative'
  }
];


class TemplateChooser extends Component {
  templateSelected(templateName) {
    this.props.setTemplate(templateName);
  }

  templateTile(config, key) {
    const classes = ['tile'];
    if (config.name === this.props.selectedTemplate) classes.push('active');
    return (
      <div
        className={classes.join(' ')}
        style={templateStyles}
        key={key}
        onClick={e => this.templateSelected(config.name)}>
        <div className="well">
          <h4>{config.prettyName}</h4>
        </div>
      </div>
    );
  }

  stampTiles() {
    const tiles = [];
    for (var i = 0; i < templates.length; i++) {
      let currentTemplate = templates[i];
      tiles.push(this.templateTile(currentTemplate, i));
    }
    return tiles;
  }

  render() {
    console.log('this.props ~~>', this.props);

    return (
      <div id="template-chooser">
        {this.stampTiles()}
      </div>
    );
  }
}

function mapStateToProps(state = {}) {
  return { selectedTemplate: state.resume.selectedTemplate }
}

export default connect(mapStateToProps, actions)(TemplateChooser);
