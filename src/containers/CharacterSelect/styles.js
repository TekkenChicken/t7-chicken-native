import {
	StyleSheet,
	Dimensions,
	Platform
} from 'react-native';

export default Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
		backgroundColor: 'rgb(132, 18, 18)',
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
	charList: {
		marginTop: 10
	},
	searchContainer: {
		width: Dimensions.get('window').width,
		...Platform.select({
      ios: {
        height: 64,
      },
      android: {
        height: 54,
      },
    }),
	}
});
