import {
	StyleSheet
} from 'react-native';

const redSecondary = '#320f1c';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
		paddingLeft: 18,
    paddingRight: 18
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
		fontSize: 14,
		paddingTop: 10,
		paddingRight: 25,
		lineHeight: 20,
		color: '#eeb8c0'
	},

	link: {
		paddingTop: 10,
		paddingBottom: 10,
	}
});
