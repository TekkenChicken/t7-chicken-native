import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View,
  Text,
  ListView,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TextInput }
  from 'react-native';
import { createRouter }  from '@exponent/ex-navigation';
import { Router } from '../Router';

import Header from '../Header/Header';
import About from '../About/About';
import CharacterSelect from '../../components/CharacterSelect/CharacterSelect';
import FrameDataCard from '../../components/FrameData/FrameDataCard';

//dispatch actions
import { fetchCharacterData } from '../../redux/actions/character-data-action';
import { updateFilter } from '../../redux/actions/search-filter-action';


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
      character: "",
      searchText: "",
      filtered: ""
    }
    this.frameDataFilter = this.props.frameData;
  }

  componentWillReceiveProps(nextProps) {
    this.filterList(nextProps.filter, nextProps.frameData);
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

  characterCheck = () => {
    if(this.props.character === "") {
    } else {
      return this.renderSearch();
    }
  }

  renderSearch = () => {
    return (
      <View style={Styles.textInputContainer}>
        <TextInput
          style={Styles.textInput}
          value={this.props.filter}
          onChangeText={(text) => this.searchDispatcher(text)}
          placeholder="Search Attacks" />
    </View>
    )
  }

  searchDispatcher(text) {
    this.props.dispatch( updateFilter(text) );

  }

  filterList(text, frameData) {
    let updatedList = frameData;
    updatedList = updatedList.filter(function(move) {
    return move.notation.toLowerCase().search(text.toLowerCase()) !== -1;
  });
  return this.frameDataFilter = updatedList;
}

	render() {
    const fd = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !==r2});
    const { frameData, filter } = this.props;
    let table = fd.cloneWithRows([this.renderFrameData(this.frameDataFilter)]);
		return (
			<View style={Styles.container}>
        <View id="header-container" style={Styles.headerContainer}>
          <Header />
          <CharacterSelect
            handleSelect={this.handleSelect}
            characters={characters}
          />
        {this.characterCheck()}
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
	},
  textInputContainer: {
    zIndex: -2
  },
  textInput: {
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    width: 200
  }
});


const mapStateToProps = function(state) {
	return {
		frameData: state.characterData.frameData,
		character: state.characterData.character,
    filter: state.dataFilter.filter
	}
}

const mapDispatchToProps = function(dispatch) {
	return { dispatch };
}
export default connect( mapStateToProps, mapDispatchToProps )(HomeScreen);
