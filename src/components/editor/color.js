import React from 'react';
import { BlockPicker } from 'react-color';
import * as STYLES from '../styles';

const colors = [
  '#202a2d',
  STYLES.DARK_GRAY,
  '#4f5f65',
  STYLES.MEDIUM_GRAY,
  STYLES.PRIMARY,
  STYLES.DANGER,
  STYLES.WARNING,
  '#409c95',
  '#3e86bb',
  '#485182',
  '#594971',
  '#ad4d78'
]

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.state = {
      color: this.props.color || STYLES.PRIMARY
    };
  };

  handleChangeComplete(color) {
    this.props.input.onChange(color.hex);
    this.setState({color: color.hex});
  };

  componentWillMount() {
    console.log('mounting, color is ', this.props.color);
  }

  componentDidMount() {
    console.log('this.state.color ~~>', this.state.color);
    if (!this.props.color) this.handleChangeComplete({hex: this.state.color});
  }

  render() {
    return (
      <div>
      <input type="hidden" {...this.props.input} />
      <BlockPicker
        color={this.state.color}
        colors={colors}
        width={'100%'}
        triangle={'hide'}
        onChangeComplete={this.handleChangeComplete}
       />
       </div>
    );
  };
}

export default ColorPicker;
