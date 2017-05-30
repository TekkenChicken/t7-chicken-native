import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

class ProfilePicture extends Component {
  render() {
    const profileImage = this.props.image;
    return (
      <Image
        source={profileImage}
        resizeMode='contain'
        style={Styles.profilePic}>
      </Image>
    )
  }
}

const Styles = StyleSheet.create({
  profilePic: {
		position: 'absolute',
		height: 120,
		width: 70,
		top: 35,
		left: 15,
		borderColor: 'black',
		borderWidth: 1,
		backgroundColor: 'rgba(90, 90, 90, .8)',
		shadowRadius: 5,
		shadowOpacity: 1.0,
		shadowColor: '#000000'
	}
});

export default ProfilePicture;
