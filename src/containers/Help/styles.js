import {
	StyleSheet
} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
		paddingLeft: 18,
		paddingTop: 30
  },
	header: {
		backgroundColor: 'transparent',
	},
	headerBorder: {
		backgroundColor: '#f0aa23',
		height: 5,
		width: 50
	},
  headerText: {
    fontSize: 20,
		fontWeight: '600',
    color: '#f0aa23',
		marginBottom: 15
  },
	description: {
		fontSize: 14,
		paddingTop: 15,
		paddingRight: 25,
		lineHeight: 20,
		color: '#eeb8c0'
	},
	contactContainer: {
		marginTop: 5
	},
	contactInfo: {
		fontWeight: '500',
		lineHeight: 20
	},
});
