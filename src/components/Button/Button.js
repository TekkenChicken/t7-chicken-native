import React, { Component, PropTypes } from 'react';
// dependencies
import { View, Text, TouchableHighlight } from 'react-native';
import CustomText from '../CustomText/CustomText';

class Button extends Component {
  render() {
    const { onPress, title, buttonStyle, titleStyle, children, underlayColor, activeOpacity } = this.props;
    return (
      <TouchableHighlight
        style={buttonStyle}
        onPress={onPress}
        underlayColor={underlayColor || "#000"}
        activeOpacity={activeOpacity || 0.7}
      >
        <View>
          <CustomText textStyle={titleStyle}>{title}</CustomText>
          {children}
        </View>
      </TouchableHighlight>
    );
  }
}

Button.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  /*
    Styling props
    =============
    buttonStyle: Button container Styling
    titleStyle: title Styling
  */
};

export default Button;
