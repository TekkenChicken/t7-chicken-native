import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View,
  Text,
  ListView,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Button,
  TextInput }
  from 'react-native';
import { createRouter }  from '@exponent/ex-navigation';
import { Router } from '../Router';
import _ from 'lodash';

//components
import Header from '../Header/Header';
import About from '../About/About';
import CharacterSelect from '../../components/CharacterSelect/CharacterSelect';
import FrameDataCard from '../../components/FrameData/FrameDataCard';
import Toolbar from '../../components/Toolbar/Toolbar';
import DataList from '../../components/DataList/DataList';

//side menus
import FilterSideMenu from '../FilterSideMenu/FilterSideMenu';
import FilterMenu from '../../components/Menu/FilterMenu';
import SideMenu from 'react-native-side-menu';

//dispatch actions
import { fetchCharacterData } from '../../redux/actions/character-data-action';
import { updateSearchFilter } from '../../redux/actions/search-filter-action';
import { toggleFilter } from '../../redux/actions/filter-action';

//filter functions
import { hitLevelFilters } from '../../util/filters.js';


//should be grabbing from API
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
    //side menu state
    this.state = {
      isOpen: false
    }
    this.frameDataFilter = this.props.filteredData;
  }

  shouldComponentUpdate() {
    console.log('component should update');
    return true
  }
  componentWillReceiveProps(nextProps) {
	  let nextFrameData = nextProps.filteredData.slice()

	  nextFrameData = this.searchFilterList(nextProps.searchFilter.searchFilter, nextFrameData);

	  this.frameDataFilter = nextFrameData;
	}

  //dispatch character fetching action after character selected
  handleSelect = (name) => {
    this.setState({character: name})
    this.props.dispatch( fetchCharacterData(name) );
	}

  //navigation function not being used yet, will probably be on left side menu
	goToAbout = () => {
		this.props.navigator.push(Router.getRoute('about'));
	}

  //toggling for side menu
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  //update side menu state
  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  //rendering character Frame data after fetch
  renderFrameData(data = []) {
    console.log(data);
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

  //renders search bar if character is selected
  characterCheck = () => {
    if(this.props.character === "") {
    } else {
      return this.renderSearch();
    }
  }

  //function for rendering search bar
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

  //on input action dispatched for filtering related data
  searchDispatcher(text) {
    this.props.dispatch( updateSearchFilter(text) );
  }

  //return new array based on input from search bar
  searchFilterList(text, frameData) {
		let updatedList = frameData;
		updatedList = updatedList.filter(function(move) {
  		return move.notation.toLowerCase().search(text.toLowerCase()) !== -1;
  	});
	  return updatedList;
	}

  renderRow(rowData) {
    console.log(rowData);
    return (
      <View
        style={Styles.frameDataCard}>
        {rowData}
      </View>
    );
  }

	render() {
    const { frameData, filter } = this.props;
    //Side menu
    const menu = <FilterMenu
      updateMenuState={this.updateMenuState}
      isOpen={this.state.isOpen}
      toggle={this.toggle}
      navigator={navigator} />;
    //table crap
    const fd = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !==r2});
    console.log(this.frameDataFilter);
    let table = fd.cloneWithRows([this.renderFrameData(this.frameDataFilter)]);
    console.log(table);

		return (
      <SideMenu
        style={Styles.menu}
        menu={menu}
        menuPosition={'right'}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}>
          <View style={Styles.container}>
            <Toolbar filter={<Button title="Filter" onPress={() => this.toggle()}></Button>} />
            <View style={Styles.headerContainer}>
            <Header />
            <CharacterSelect
              handleSelect={this.handleSelect}
              characters={characters}
            />
            {this.characterCheck()}
            </View>
            <DataList
              styles={Styles.cardContainer}
              containerStyle={Styles.frameDataCard}
              listData={this.frameDataFilter}
              cellComponent={FrameDataCard}
              cellStyle={Styles.card}
              cellsPerRow={5}
            />
          </View>
        </SideMenu>
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
	frameDataCard: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		zIndex: -2
	},
	cardContainer: {
    zIndex: -1
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


//apply each filter in the attackFilters array to every attack
function filteredAttacks(state) {
	let { attackFilters } = state;
	let { frameData } = state.characterData;
	return frameData.filter(attack => attackFilters.every(filter => filter(attack)));
}


const mapStateToProps = function(state) {
    let { frameData, character} = state.characterData;
    let { filter, searchFilter, attackFilters } = state;

    return {
        character,
        filter,
        searchFilter,
				attackFilters,
				//array of attacks after being filtered
				filteredData: filteredAttacks(state)
    }
}


const mapDispatchToProps = function(dispatch) {
	return {
		dispatch,
		//binding toggleFilter
		toggleFilter
	 };
}

export default connect( mapStateToProps, mapDispatchToProps )(HomeScreen);
