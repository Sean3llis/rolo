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
  };

  state = {
    color: this.props.color
  };

  handleChangeComplete(color) {
    this.props.input.onChange(color.hex);
    this.setState({color: color.hex});
  };

  componentWillMount() {
    this.setState({color: this.props.color})
  }

  render() {
    return (
      <div>
      <input onChange={e => console.log(e)}type="hidden" {...this.props.input} />
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
