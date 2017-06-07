import React, { Component,PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Animated,
  Easing,
  Image
} from 'react-native';

import tekkenGamerLogo from '../../img/misc/tekkengamer_dark_bg.png';

class LoadingIcon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fadeAnimateValue: new Animated.Value(0)
    };
  }

  componentDidMount() {
    setTimeout(() => this.fadeInIcon(), 250);
  }

  fadeInIcon() {
    this.state.fadeAnimateValue.setValue(0);
    Animated.timing(
      this.state.fadeAnimateValue,
      {
        toValue: 1,
        duration: 400,
        easing: Easing.out(Easing.quad)
      }
    ).start();
  }

  render() {
    const top = this.state.fadeAnimateValue.interpolate({
      inputRange: [0, 1],
      outputRange: [ 30, -30]
    });
    const opacity = this.state.fadeAnimateValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });
    return (
      <View style={[baseStyle.container]}>
        <Animated.Text style={[baseStyle.text, {marginTop: top, opacity: opacity}]}>
          Powered by
        </Animated.Text>
        <Image style={baseStyle.tekkenGamer} resizeMode="contain" source={tekkenGamerLogo} />
      </View>
    );
  }
}

const baseStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
  },
  text: {
    opacity: 0,
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
    textAlign:'center'
  },
  tekkenGamer: {
    width: 300,
    height: 200
  }
});

export default LoadingIcon;
