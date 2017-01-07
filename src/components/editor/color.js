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
    // console.log(`change complete: ${color.hex}`);
    // this.setState({
    //   backgrou
    // })
    this.props.input.onChange(color.hex);
    this.setState({color: color.hex})
    // return true;
    // var test = '12312';
  };

  render() {
    return (
      <div>
      <input type="hidden" {...this.props.field} />
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
