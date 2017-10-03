import {
	StyleSheet,
} from 'react-native';

import * as colors from '../../style/vars/colors';

export default Styles = StyleSheet.create({
	row: {
		display: 'flex',
		width: '100%',
		flexDirection: 'row',
		marginBottom: 1
	},
	cell: {
		marginRight: 1,
		paddingTop: 15,
		paddingBottom: 20,
		paddingLeft: 5,
		paddingRight: 5
	},
	text: {
		fontWeight: '500'
	},

	// Header
	headerCell: {
		marginRight: 1,
		paddingTop: 8,
		paddingBottom: 10,
		paddingLeft: 5,
		paddingRight: 5
	},
	headerText: {
		fontWeight: '600',
		fontSize: 12,
		textShadowOffset: { width: 1, height: 1},
		textShadowColor: 'rgba(0,0,0, 0.5)'
	},

	// Notation
  notation: {
		width: '25%',
		backgroundColor: colors.maroon
	},
	notation_header: {
		backgroundColor: colors.redSecondary,
	},

	// Damage
	damage: {
		width: '12.5%',
		backgroundColor: colors.darkOrange,
	},
	damage_header: {
		backgroundColor: colors.orange
	},

	// Hit Level
	hit_level: {
		width: '12.5%',
		backgroundColor: colors.darkScarlet,
	},
	hit_level_header: {
		backgroundColor: colors.scarlet
	},

	// Speed
	speed: {
		width: '12.5%',
		backgroundColor: colors.darkGreen,
	},
	speed_header: {
		backgroundColor: colors.green
	},

	// On Block
	on_block: {
		width: '12.5%',
		backgroundColor: colors.darkBlue,
	},
	on_block_header: {
		backgroundColor: colors.blue
	},

	// On Hit
	on_hit: {
		width: '12.5%',
		backgroundColor: colors.darkViolet,
	},
	on_hit_header: {
		backgroundColor: colors.violet
	},

	// Counter
	counter_hit: {
		width: '12.5%',
		backgroundColor: colors.darkPink,
	},
	counter_hit_header: {
		backgroundColor: colors.pink
	}
});
