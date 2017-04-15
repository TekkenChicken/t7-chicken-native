import {
	StyleSheet
} from 'react-native';

export default Styles = StyleSheet.create({
  viewContainer: {
		flex: 1,
		backgroundColor: 'rgb(65, 18, 18)',
		height: 60
  },
	commandListContainer: {
		backgroundColor: 'rgb(65, 18, 18)',
		height: 40,
		paddingTop: 10,
		marginBottom: 20
	},
	commandListText: {
		color: '#f0aa23',
		fontWeight: 'bold',
		paddingLeft: 10
	},
	randomLine: {
		width: 150,
		height: 6,
		backgroundColor: '#f0aa23',
		marginTop: 5
	},
	profilePic: {
		position: 'absolute',
		height: 100,
		width: 60,
		top: 90,
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
		marginTop: 60,
		marginLeft: 15,
		marginBottom: 30,
		fontSize: 30
	}
});
