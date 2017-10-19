import * as colors from '../../style/vars/colors';

/**
 *	Order Config
 *	===================
 *	Determines the order of the move properties on the table
 */
export const propOrder = [
	{
		key: "notation",
		label: "Notation"
	},
	{
		key: "damage",
		label: "Damage"
	},
	{
		key: "hit_level",
		label: "Hit Level"
	},
	{
		key: "speed",
		label: "Speed"
	},
	{
		key: "on_block",
		label: "On Block"
	},
	{
		key: "on_hit",
		label: "On Hit"
	},
	{
		key: "on_ch",
		label: "Counter Hit"
	}
];

/**
 *	Color Config
 *	===================
 *	Determines the background color of the move properties on the table
 */
export const propColors = {
	"notation": {
		light: colors.redSecondary,
		dark: colors.maroon
	},
	"damage": {
		light: colors.orange,
		dark: colors.darkOrange
	},
	"hit_level": {
		light: colors.scarlet,
		dark: colors.darkScarlet
	},
	"speed": {
		light: colors.green,
		dark: colors.darkGreen
	},
	"on_block": {
		light: colors.blue,
		dark: colors.darkBlue
	},
	"on_hit": {
		light: colors.violet,
		dark: colors.darkViolet
	},
	"on_ch": {
		light: colors.pink,
		dark: colors.darkPink
	}
}
