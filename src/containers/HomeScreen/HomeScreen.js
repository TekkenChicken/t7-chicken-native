import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, Text, ListView, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import { createRouter }  from '@exponent/ex-navigation';
import { Router } from '../Router';

import Header from '../Header/Header';
import About from '../About/About';
import CharacterSelect from '../../components/CharacterSelect/CharacterSelect';
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
  constructor(props){
    super(props);
    this.state = {
      character: ""
    }
  }

  handleSelect = (name) => {
    this.setState({character: name})
    this.props.dispatch( fetchCharacterData(name) );
	}

	goToAbout = () => {
		this.props.navigator.push(Router.getRoute('about'));
	}

  renderFrameData(data = []) {
    return data.map((move, key) => {
      return (
        <FrameDataCard
          name={this.state.character}
          style={Styles.card}
          key={move.notation}
          notation={move.notation}
          damage={move.damage}
          hitLevel={move.hit_level}
          notes={move.notes}
          onBlock={move.on_block}
          onCh={move.on_ch}
          onHit={move.on_hit}
          speed={move.speed}
        />
      )
    })
  }

	render() {
    const fd = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !==r2});
    const { frameData } = this.props;
    let table = fd.cloneWithRows([this.renderFrameData(frameData)]);
    console.log(this.props);
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

const Styles = StyleSheet.create({
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
