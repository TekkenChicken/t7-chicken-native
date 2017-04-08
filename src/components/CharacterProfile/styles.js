import {
	StyleSheet
} from 'react-native';

export default Styles = StyleSheet.create({
  viewContainer: {
		flex: 1,
		backgroundColor: 'rgb(65, 18, 18)',
		height: 100
  },
	profilePic: {
		position: 'absolute',
		height: 100,
		width: 60,
		top: 50,
		left: 10,
		borderColor: 'black',
		borderWidth: 1,
		backgroundColor: 'rgba(90, 90, 90, .8)',
		shadowRadius: 5,
		shadowOpacity: 1.0,
		shadowColor: '#000000'
	},
	profileName: {
		color: 'white',
		marginTop: 70,
		marginLeft: 15,
		fontSize: 30
	}
});
