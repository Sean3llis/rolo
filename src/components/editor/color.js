import React from 'react';
import { connect } from 'react-redux';
import { BlockPicker } from 'react-color';
import * as actions from '../../actions';
import * as STYLES from '../styles';

const colors = [
  '#202a2d',
  STYLES.DARK_GRAY,
  '#4f5f65',
  STYLES.MEDIUM_GRAY,
  '#a33030',
  STYLES.DANGER,
  '#f09348',
  STYLES.WARNING,
  '#439f58',
  '#409c95',
  '#3e86bb',
  '#366497',
  '#485182',
  '#594971',
  '#ad4d78'
]

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeComplete = this.handleChangeComplete.bind(this);
    this.state = {
      color: props.color
    };
  };

  componentDidMount() {
    console.log('mounted with: ', this.state.color);
    // this.props.setThemeColor(this.state.color);
  }

  handleChangeComplete(payload) {
    const color = payload.hex;
    this.props.input.onChange(color);
    this.setState({color});
    console.log('handle change: ', color);
    this.props.setThemeColor(color);
  };

  render() {
    if (!this.props.color) return null;
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

function mapStateToProps(state = {}) {
  console.log('state.auth.currentUser.color ~~>', state.auth.currentUser.color);
  return {
    color: state.auth.currentUser.color
  }
}

export default connect(mapStateToProps, actions)(ColorPicker);
