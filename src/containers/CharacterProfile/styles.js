import {
	StyleSheet, Platform, Dimensions
} from 'react-native';

export default Styles = StyleSheet.create({
  mainContainer: {
		flex: 1,
		backgroundColor: '#111'
  },
	scrollContainer: {
		backgroundColor: '#960b11'
	},
	header: {
		position: 'absolute',
		left: 0,
		...Platform.select({
      ios: {
        height: 64,
      },
      android: {
        height: 54,
      }
    }),
	},
	offset: {
		position: 'absolute',
		zIndex: 4,
		...Platform.select({
      ios: {
				top: 64
      },
      android: {
				top: 54
      }
    }),
	}
});
