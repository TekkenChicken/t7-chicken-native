import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';
import { Styles } from './HomeScreenStyles';
import { createRouter }  from '@exponent/ex-navigation';
import { Router } from '../Router';

import Header from '../Header/Header';
import About from '../About/About';
import CharacterSelect from '../../components/CharacterSelect/CharacterSelect';
import FrameData from '../FrameData/FrameData';
import FrameDataCard from '../../components/FrameData/FrameDataCard';

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

  renderFrameData(data = []) {
    return data.map((move, key) => {
      return (
        <FrameDataCard
          style={Styles.card}
          key={key}
          notation={move.notation}
        />
      )
    })
  }

	render() {
    const fd = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !==r2});
    const { frameData } = this.props;
    let table = fd.cloneWithRows([this.renderFrameData(frameData)]);
    console.log(table);
		return (
			<View style={Styles.container}>
        <View id="header-container" style={Styles.headerContainer}>
          <CharacterSelect
            handleSelect={this.handleSelect}
            characters={characters}
          />
        </View>
        <ListView
          style={{zIndex: -2}}
          contentContainerStyle={Styles.frameDataContainer}
          dataSource={table}
          renderRow={(rowData) =>
            <View
             style={Styles.frameDataContainer}>
             {rowData}
           </View>
         }
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
