import React, { Component, PropTypes } from 'react';
// dependencies
import { Text, TouchableHighlight } from 'react-native';

class Button extends Component {
  render() {
    const { onPress, title, buttonStyle, titleStyle } = this.props;
    return (
      <TouchableHighlight
        style={buttonStyle}
        onPress={onPress}
      >
        <Text style={titleStyle}>{title}</Text>
      </TouchableHighlight>
    );
  }
}

Button.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  buttonStyle: PropTypes.number, /* style enum */
  titleStyle: PropTypes.number, /* style enum */
};

export default Button;
