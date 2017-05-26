import React, { Component, PropTypes } from 'react';
// dependencies
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import CustomText from '../CustomText/CustomText';

class ProfileHeader extends Component {
  render() {
    const { name, containerStyle, scroll } = this.props;
    return (
      <View style={[Styles.profileHeader, containerStyle, (scroll) ? Styles.scroll : '']}>
        <CustomText textStyle={Styles.profileHeaderText}>{name}</CustomText>
      </View>
    );
  }
}

ProfileHeader.propTypes = {
  scroll: PropTypes.bool,
  title: PropTypes.string,
  /*
    Styling props
    =============
    ProfileHeaderStyle: ProfileHeader container Styling
  */
};

const Styles = StyleSheet.create({
  profileHeader: {
		zIndex: 3,
		flexDirection: 'row',
		opacity: 0,
		width: Dimensions.get('window').width,
		alignItems: 'center',
		backgroundColor: '#260309',
		height: 0
	},
	profileHeaderText: {
		flex: 1,
		alignSelf: 'center',
		textAlign: 'center',
		marginTop: 15,
		fontSize: 14,
		fontWeight: '600'
	},
	scroll: {
		opacity: 1,
    ...Platform.select({
      ios: {
        height: 64
      },
      android: {
        height: 54
      },
    })
	}
});

export default ProfileHeader;
