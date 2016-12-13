import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Styles } from './HomeScreenStyles';
import { createRouter }  from '@exponent/ex-navigation';
import { Router } from '../Router';

import About from '../About/About';
import CharacterSelect from '../../components/CharacterSelect/CharacterSelect';

const characters =[
  'alisa',
  'asuka',
  'bryan',
  'claudio',
  'dragunov',
  'feng',
  'heihachi',
  'hwoarang',
  'katarina',
  'kazuya',
  'king',
  'lars',
  'leo',
  'paul',
  'shaheen'
];

export default class HomeScreen extends React.Component {

	goToAbout = () => {
		this.props.navigator.push(Router.getRoute('about'));
	}

	render() {
		return (
			<View style={Styles.container}>
				<Text>Data Provided by rbnorway</Text>
				<CharacterSelect characters={characters} />
			</View>
			);
	}
}
