import {
	StyleSheet,
} from 'react-native';

import * as colors from '../../style/vars/colors';

export default Styles = StyleSheet.create({
	row: {
		display: 'flex',
		width: '100%',
		flexDirection: 'row'
	},
	cell: {
		paddingTop: 20,
		paddingBottom: 22,
		paddingLeft: 8,
		paddingRight: 5,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 1},
		shadowOpacity: 0.8,
		shadowRadius: 2
	},
	text: {
		fontWeight: '500'
	},

	// Header
	headerCell: {
		elevation: 4,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 8,
		paddingRight: 5,
		shadowColor: '#000',
		shadowOffset: {width: 1, height: 1},
		shadowOpacity: 0.8,
		shadowRadius: 2.5
	},
	headerText: {
		backgroundColor: 'transparent',
		fontWeight: '600',
		fontSize: 12,
		textShadowOffset: { width: 1, height: 1},
		textShadowColor: 'rgba(0,0,0, 0.5)'
	},

	// Notation
  notation: {
		width: '25%',
	},

	// Damage
	damage: {
		width: '12.5%',
	},

	// Hit Level
	hit_level: {
		width: '12.5%',
	},

	// Speed
	speed: {
		width: '12.5%',
	},

	// On Block
	on_block: {
		width: '12.5%',
	},

	// On Hit
	on_hit: {
		width: '12.5%',
	},

	// Counter
	on_ch: {
		width: '12.5%',
	},
});
