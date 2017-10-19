import {
	StyleSheet, Platform, Dimensions
} from 'react-native';

export default Styles = StyleSheet.create({
  mainContainer: {
		flex: 1
  },
	scrollContainer: {
		...Platform.select({
      ios: {
				paddingTop: 64,
				marginTop: -64
      },
      android: {
				paddingTop: 54,
				marginTop: -54
      }
    }),
	},
	header: {
		backgroundColor: '#320f1c',
		position: 'absolute',
		left: 0,
		right: 0,
		width: '100%',
		...Platform.select({
      ios: {
        height: 64,
				top: -64
      },
      android: {
        height: 54,
				top: -54
      }
    }),
	},
	offset: {
		...Platform.select({
      ios: {
				marginTop: -64
      },
      android: {
				marginTop: -54
      }
    }),
	},
	staticListHeight: {
		minHeight: 600,
		flex: 1
	}
});
