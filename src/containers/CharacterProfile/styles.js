import {
	StyleSheet, Platform, Dimensions
} from 'react-native';
import * as Colors from '../../style/vars/colors';

export default Styles = StyleSheet.create({
	rbnorway: {
		textAlign: 'center',
		fontFamily: 'Exo2-Light',
		color: '#f0aeb1',
		fontSize: 12,
		backgroundColor: Colors.redSecondary,
		paddingBottom: 10
	},
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
	},
	stickySection: {
		marginBottom: 2
	},
	charHeader:{
		backgroundColor: Colors.redSecondary,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
		paddingTop: 10,
		paddingBottom: 15
	}
});
