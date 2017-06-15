import React, { Component, PropTypes } from 'react';
import { View, Image, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';

// components
import CustomText from '../CustomText/CustomText';

import icons from '../../img/icons/';

class ErrorBox extends Component {
  constructor() {
    super();
    this.state = {
      closed: false
    };
  }

  render() {
    const pointerEvents = (!this.state.closed) ? "auto" : "none";
    console.log(pointerEvents);
    return (
      <View style={[Styles.container, (this.state.closed) ? Styles.closed : '']} pointerEvents={pointerEvents}>
        <View>
          <CustomText textStyle={Styles.errorText}>{this.props.error}</CustomText>
          <TouchableHighlight 
            onPress={() => this.setState({closed: true})}
            style={Styles.closeBtn}>
            <Image style={Styles.closeIcon} source={icons['close']} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    bottom: 0,
    zIndex: 2,
    backgroundColor: 'rgba(200, 30, 38, 0.85)'
  },
  errorText: {
    textAlign: 'center'
  },
  closed: {
    display: 'none'
  },
  closeBtn: {
    position: 'absolute',
    right: 20,
    top: 4,
    opacity: 0.7
  },
  closeIcon: {
    width: 12,
    height: 12
  }
});

ErrorBox.proptypes = {
  error: PropTypes.string
};

export default ErrorBox;
