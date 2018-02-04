import React, { Component, PropTypes } from 'react';
// dependencies
import { View, Text, TouchableHighlight, StyleSheet, Clipboard , Animated, Easing } from 'react-native';
import CustomText from '../CustomText/CustomText';

import * as Colors from '../../style/vars/colors';

class CopyTextButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      copied: new Animated.Value(0)
    };
  }

  onCopyToClipboard(text) {
    Clipboard.setString(text);
    this.animateAlert();
  }

  animateAlert() {
    const endVal = (this.state.copied._value === 0) ? 1 : 0; 
    Animated.timing(
      this.state.copied,
      {
        toValue: endVal,
        duration: 200,
        easing: Easing.inout
      }
    ).start(() => {
      if (this.state.copied._value === 1) {
        setTimeout(() => this.animateAlert(), 1000);
      }
    });
  }

  render() {
    const {text, buttonStyle, textStyle} = this.props;

    const transition = this.state.copied.interpolate({
      inputRange: [0, 1],
      outputRange: [60, 45]
    });

    return (
      <View>
        <TouchableHighlight
          style={[Styles.initialButton, buttonStyle]}
          onPress={() => this.onCopyToClipboard(text)}>
          <View>
            <CustomText textStyle={[Styles.initialText, textStyle]}>{text}</CustomText>
          </View>
        </TouchableHighlight>

        <Animated.View 
          style={[Styles.copyAlert, {opacity: this.state.copied, top: transition}]}>
          <CustomText textStyle={[Styles.initialText, Styles.copyAlertText]}>Copied to Clipboard</CustomText>
        </Animated.View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  initialButton: {
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: Colors.darkMaroon
  },
  initialText: {
    fontWeight: '600',
    textAlign: 'center'
  },
  copyAlert: {
    position: 'absolute',
    backgroundColor: "#000",
    borderRadius: 15,
    padding: 8,
    paddingLeft: 30,
    paddingRight: 30,
    overflow: 'hidden',
    alignSelf: 'center'
  },
  copyAlertText: {
    fontWeight: '400',
    fontSize: 12
  }
})

CopyTextButton.propTypes = {
  text: PropTypes.string,
  /*
    Styling props
    =============
    buttonStyle: Button container Styling
    textStyle: title Styling
  */
};

export default CopyTextButton;
