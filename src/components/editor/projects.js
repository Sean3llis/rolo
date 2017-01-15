import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import Collapse, { Panel } from 'rc-collapse';
import * as STYLES from '../styles';

import Label from './label';
import TextInput from './input.text';
import TextAreaInput from './input.textarea';
const styling = {
  add: {
    backgroundColor: STYLES.DARK_GRAY,
    color: STYLES.OFF_WHITE,
    borderRadius: '2px 2px 0px 0px',
    marginBottom: 10,
  },
  project: {
    position: 'relative',
    backgroundColor: STYLES.LIGHT_GRAY,
    padding: '10px',
    borderBottom: STYLES.BORDER_SHADOW
  },
  delete: {
    position: 'absolute',
    width: 'auto',
    top: 0,
    left: 0,
    fontSize: 12,
    lineHeight: '20px',
    padding: 0,
    height: 20,
    width: 20,
    borderRadius: 0,
    backgroundColor: STYLES.DANGER,
    color: STYLES.OFF_WHITE,
  },
  counter: {
    position: 'absolute',
    top: 20,
    color: STYLES.OFF_WHITE,
    backgroundColor: STYLES.DARK_GRAY,
    textAlign: 'center'
  },
  panel: {
    backgroundColor: STYLES.DARK_GRAY,
    color: STYLES.OFF_WHITE,
    padding: 0
  }
};

// export default ({ fields, meta: { touched, error } }) => (
  // <div>
  //   <button style={styling.add} type="button" onClick={() => fields.push({})}>
  //     <i className="fa fa-plus"></i>
  //   </button>
  //
  //   {touched && error && <span>{error}</span>}
  //   {fields.map((project, i) => (
  //     <Collapse onChange={onChange} accordion={false} key={i}>
  //     <Panel header="lfdsjklfjsdlkf"><p>lskdajfslkdjflkfjskldj</p></Panel>
  //     <div className="project" style={styling.project}>
  //       <div className="counter" style={{...styling.delete, ...styling.counter}}>{i + 1}</div>
  //       <button
  //         type="button"
  //         title="Remove Member"
  //         style={styling.delete}
  //         onClick={() => fields.remove(i)}>
  //         <i className="fa fa-times"></i>
  //       </button>
  //
  //       <fieldset>
  //         <Label style={styling.projectLabel}>Title</Label>
  //         <Field
  //           name={`${project}.title`}
  //           type="text"
  //           component={TextInput} />
  //       </fieldset>
  //
  //       <fieldset>
  //         <Label style={styling.projectLabel}>Link</Label>
  //         <Field
  //           name={`${project}.link`}
  //           type="text"
  //           component={TextInput} />
  //       </fieldset>
  //
  //       <fieldset>
  //         <Label style={styling.projectLabel}>Description</Label>
  //         <Field
  //             name={`${project}.description`}
  //             type="textarea"
  //             component={TextAreaInput}/>
  //       </fieldset>
  //     </div>
  //     </Collapse>
  //   ))}
  // </div>
// );


export default class Projects extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this);
    this.state = {
      activeKey: ['0']
    }
  }

  onChange(activeKey) {
    this.setState({ activeKey });
  }

  project(project, i, c) {
    const fields = c.getAll();
    const currentField = fields[i];
    return (
      <Panel key={i} header={currentField.title} style={styling.panel}>
      <div className="project" style={styling.project}>
        <div className="counter" style={{...styling.delete, ...styling.counter}}>{i + 1}</div>
        <button
          type="button"
          title="Remove Member"
          style={styling.delete}
          onClick={() => fields.remove(i)}>
          <i className="fa fa-times"></i>
        </button>

        <fieldset>
          <Label style={styling.projectLabel}>Title</Label>
          <Field
            name={`${project}.title`}
            type="text"
            component={TextInput} />
        </fieldset>

        <fieldset>
          <Label style={styling.projectLabel}>Link</Label>
          <Field
            name={`${project}.link`}
            type="text"
            component={TextInput} />
        </fieldset>

        <fieldset>
          <Label style={styling.projectLabel}>Description</Label>
          <Field
              name={`${project}.description`}
              type="textarea"
              component={TextAreaInput}/>
        </fieldset>
      </div>
      </Panel>
    );
  }

  render() {
    const { fields, meta } = this.props;
    return (
      <div id="projects">
        <button style={styling.add} type="button" onClick={() => fields.push({})}>
          <i className="fa fa-plus"></i>
        </button>
        <div className="projects-wrapper">
        <Collapse
          onChange={this.onChange}
          accordion={true}
          activeKey={this.state.activeKey}>
          {fields.map(this.project)}
        </Collapse>
        </div>
      </div>
    );
  }
}
