import {
	StyleSheet
} from 'react-native';

const redSecondary = '#320f1c';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
		paddingLeft: 18,
    paddingRight: 18,
		paddingTop: 30
  },
	header: {
		backgroundColor: 'transparent',
	},

  headerText: {
    fontSize: 24,
		fontWeight: '600',
    color: 'white',
		marginBottom: 15,
		fontFamily: 'Exo2-Regular'
  },
	description: {
		fontSize: 14,
		paddingTop: 10,
		paddingRight: 25,
		lineHeight: 20,
		color: '#eeb8c0'
	},
	linkTextContainer: {
		paddingBottom: 30,
    paddingLeft: 10,
    paddingTop: 10,
		marginBottom: 10,
		backgroundColor: redSecondary
	},
	linkText: {
		color: '#f0aa23',
		fontSize: 18,
		fontFamily: 'Exo2-Regular'
	}
});
