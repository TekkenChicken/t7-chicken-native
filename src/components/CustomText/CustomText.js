import React, { Component, PropTypes } from 'react';
// dependencies
import { Text, StyleSheet } from 'react-native';

class CustomText extends Component {
  render() {
    const { text, textStyle, children } = this.props;
    return (
      <Text style={[Styles.initial, textStyle]}>{children}</Text>
    );
  }
}

const Styles = StyleSheet.create({
  initial: {
    color: "#fff",
    fontFamily: 'Exo2-Light'
  }
});

CustomText.propTypes = {
  // textStyle: PropTypes.number, /* style enum */
};

export default CustomText;
