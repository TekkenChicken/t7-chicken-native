import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Styles } from './HomeScreenStyles';
import { createRouter }  from '@exponent/ex-navigation';
import { Router } from '../Router';

import About from '../About/About';
import CharacterSelect from '../../components/CharacterSelect/CharacterSelect';

//dispatch actions
import { fetchCharacterData } from '../../redux/actions/character-data-action';

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


class HomeScreen extends React.Component {

  handleSelect = (name) => {
		//const character = event.target.value;
    this.props.dispatch( fetchCharacterData(name) );
	}

	goToAbout = () => {
		this.props.navigator.push(Router.getRoute('about'));
	}

	render() {
		return (
			<View style={Styles.container}>
				<Text>Data Provided by rbnorway</Text>
				<CharacterSelect
          handleSelect={this.handleSelect}
          characters={characters}
        />
			</View>
			);
	}
}

const mapStateToProps = function(state) {
	return {
		frameData: state.characterData.frameData,
		character: state.characterData.character
	}
}

const mapDispatchToProps = function(dispatch) {
	return { dispatch };
}
export default connect( mapStateToProps, mapDispatchToProps )(HomeScreen);
