import React, { Component, PropTypes } from 'react';
// dependencies
import { StyleSheet } from 'react-native';
import CustomText from '../CustomText/CustomText';

class NavigationTitle extends Component {
  render() {
    const { text } = this.props;
    return (
      <CustomText textStyle={Styles.title}>{text.toUpperCase()}</CustomText>
    );
  }
}

const Styles = StyleSheet.create({
  title: {
    fontWeight: '700'
  }
});

NavigationTitle.propTypes = {
  // textStyle: PropTypes.number, /* style enum */
  text: PropTypes.string
};

export default NavigationTitle;
