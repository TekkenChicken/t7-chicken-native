import {
	StyleSheet
} from 'react-native';

const redSecondary = '#320F1C';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
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
		marginBottom: 40
	},
	text: {
		fontSize: 16,
		paddingTop: 10,
		paddingRight: 25,
		paddingLeft: 25,
		lineHeight: 20,
		color: '#eeb8c0',
		marginBottom: 20
	},
	linkButton: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 10,
		paddingRight: 10,
		height: 60,
		backgroundColor: redSecondary,
		marginTop: 2
	}
});
