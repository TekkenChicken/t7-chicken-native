import {
	StyleSheet
} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
		paddingTop: 30,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
	headerContainer: {
		alignItems: 'center'
	},
	frameDataContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		zIndex: -2
	},
	cardContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
});
