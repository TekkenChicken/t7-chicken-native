import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const glassPrimary = '#d5d2da';
const glassSecondary = '#bb2130';

class ProfilePicture extends Component {
  render() {
    const profileImage = this.props.image;
    return (
      <View style={Styles.container}>
        <Image
          source={profileImage}
          resizeMode='contain'
          style={Styles.profilePic}>
        </Image>
        <LinearGradient
          colors={[glassPrimary, glassSecondary, glassPrimary]}
          start={{x: 0.0, y: 0.1}} end={{x: 0.5, y: 1.0}}
          style={Styles.frame}>
        </LinearGradient>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    height: 120,
		width: 70,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: 'transparent'
  },
  profilePic: {
		height: 120,
		width: 70,
		shadowRadius: 2,
		shadowOpacity: 0.7,
		shadowColor: '#000000',
    borderColor: '#320f1c',
    borderWidth: 1,
	},
  frame: {
    position: 'absolute',
    top: 0,
    height: 120,
    width: 70,
    opacity: 0.25,
  }
});

export default ProfilePicture;
