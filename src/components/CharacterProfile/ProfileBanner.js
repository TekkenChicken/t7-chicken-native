import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import Toolbar from '../Toolbar/Toolbar';

import Styles from './styles';

class ProfileBanner extends Component {
  render() {
    return (
      <View style={Styles.viewContainer}>
        <Toolbar name={this.props.name} />
      </View>
    );
  }
}

export default ProfileBanner;
