import React from 'react';
import { BlockPicker } from 'react-color';
import * as STYLES from '../styles';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
  };

  state = {
    color: STYLES.PRIMARY
  };

  handleChangeComplete(color) {
    console.log('color.hex ~~>', color.hex);
    console.log('this.props ~~>', this.props);
    this.props.input.onChange(color.hex);
    this.setState({color: color.hex});
  };

  render() {
    return (
      <div>
      <input type="hidden" {...this.props.input} />
      <BlockPicker
        color={this.state.color}
        style={{width: '100%'}}
        triangle={'hide'}
        onChangeComplete={this.handleChangeComplete}
       />
       </div>
    );
  };
}

export default ColorPicker;
