import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';

import Styles from './styles';

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

export default ProfilePicture;
