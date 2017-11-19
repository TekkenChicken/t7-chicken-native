import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

class ProfileNameBanner extends Component {
  render() {
    return (
      <Text style={Styles.profileName}>
        {this.props.name}
      </Text>
    );
  }
}

const Styles = StyleSheet.create({
  profileName: {
		color: 'white',
    paddingTop: 10,
    paddingBottom: 10,
		fontSize: 28,
		fontFamily: 'Exo2-Light',
    backgroundColor: 'transparent',
	}
});

export default ProfileNameBanner;
