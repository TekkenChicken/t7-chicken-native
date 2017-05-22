import {
	StyleSheet, Platform, Dimensions
} from 'react-native';

export default Styles = StyleSheet.create({
  mainContainer: {
		flex: 1,
		backgroundColor: '#222'
  },
	scrollContainer: {
		backgroundColor: '#960b11'
	},
	profileHeader: {
		position: 'absolute',
		left: 0,
		flex: 1,
		flexDirection: 'row',
		opacity: 0,
		width: Dimensions.get('window').width,
		alignItems: 'center',
		backgroundColor: "#111",
		...Platform.select({
      ios: {
        height: 64
      },
      android: {
        height: 54
      },
    })
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
		opacity: 1
	}
});
