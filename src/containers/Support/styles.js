import {
	StyleSheet
} from 'react-native';

const redPrimary = '#931a28';
const redSecondary = '#320F1C';
const buttonColor = '#F0AA23';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: redPrimary,
  },
	header: {
		backgroundColor: 'transparent',
		marginTop: 15
	},

  headerText: {
    fontSize: 24,
		fontWeight: '600',
    color: 'white',
		marginBottom: 15,
		fontFamily: 'Exo2-Regular'
  },
	description: {
		fontSize: 16,
		paddingTop: 10,
		paddingRight: 25,
		paddingLeft: 25,
		lineHeight: 20,
		color: '#eeb8c0',
		marginBottom: 20
	},
	text: {
		fontSize: 16,
		paddingTop: 10,
		paddingRight: 25,
		paddingLeft: 25,
		lineHeight: 20,
		color: '#eeb8c0',
		marginBottom: 20,
	},
	linkButton: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 20,
		paddingLeft: 20,
		paddingRight: 20,
		height: 70,
		marginTop: 2
	},
	buttonText: {
		color: '#F0AA23',
		fontSize: 18
	},
	linkIcon: {
		height: 25,
		width: 25,
		
	}
});
