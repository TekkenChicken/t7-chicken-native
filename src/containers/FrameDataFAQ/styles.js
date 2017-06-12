import {
	StyleSheet
} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
		paddingLeft: 18,
    paddingRight: 18,
		paddingTop: 30
  },
  faqText: {
    marginBottom: 15
  },
	header: {
		backgroundColor: 'transparent',
    marginBottom: 30
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
		paddingTop: 10,
		paddingRight: 25,
		lineHeight: 20,
		color: '#eeb8c0'
	},
	teamText: {
		marginTop: 25,
		marginBottom: 10,
		fontWeight: '500'
	},
	teamMember: {
		lineHeight: 22,
		color: '#f4ced3'
	}
});
