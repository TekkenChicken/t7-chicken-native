import {
	StyleSheet
} from 'react-native';

export default Styles = StyleSheet.create({
  viewContainer: {

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
		height: 120,
		width: 70,
		top: 0,
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
		marginBottom: 30,
		fontSize: 30,
		fontFamily: 'Exo2-Light'
	}
});
