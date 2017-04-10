import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import Styles from './styles';

class ProfileBanner extends Component {
  render() {
    return (
      <Text style={Styles.profileName}>
        {this.props.name}
      </Text>
    );
  }
}

export default ProfileBanner;
