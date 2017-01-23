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

//components
import Header from '../Header/Header';
import About from '../About/About';
import CharacterSelect from '../../components/CharacterSelect/CharacterSelect';
import FrameDataCard from '../../components/FrameData/FrameDataCard';
import Toolbar from '../../components/Toolbar/Toolbar';

//side menus
import FilterSideMenu from '../FilterSideMenu/FilterSideMenu';
import FilterMenu from '../../components/Menu/FilterMenu';
import SideMenu from 'react-native-side-menu';

//dispatch actions
import { fetchCharacterData } from '../../redux/actions/character-data-action';
import { updateSearchFilter } from '../../redux/actions/search-filter-action';
import { toggleFilter } from '../../redux/actions/filter-action';

//filter functions
import { isHighAttack, isLowAttack } from '../../util/filters.js';

function FilterButton({filterName, filterFn, toggleFilter, activeFilters}) {
  console.log(activeFilters);
	function filterFinder(f) {
		console.log(f)
		return f == filterFn
	}
	return (
		<Button title={filterName} onPress={() => toggleFilter(filterFn)}>{filterName} {activeFilters.find(filterFinder) ? 'active' : 'inactive'}</Button>
	)
}

const FilterButtonContainer = connect(() => ({}), { toggleFilter })(FilterButton);

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
    this.frameDataFilter = this.props.filteredData;
  }

  componentWillReceiveProps(nextProps) {
	  let nextFrameData = nextProps.filteredData.slice()

	  nextFrameData = this.searchFilterList(nextProps.searchFilter.searchFilter, nextFrameData);

	  this.frameDataFilter = nextFrameData;
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
    this.props.dispatch( updateSearchFilter(text) );

  }

  searchFilterList(text, frameData) {
		console.log(frameData, 'search filter frameData');
		let updatedList = frameData;
		updatedList = updatedList.filter(function(move) {
		return move.notation.toLowerCase().search(text.toLowerCase()) !== -1;
	});
	return updatedList;
	}

	render() {
    const menu = <FilterMenu navigator={navigator} />;
    const fd = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !==r2});
    const { frameData, filter } = this.props;
    let table = fd.cloneWithRows([this.renderFrameData(this.frameDataFilter)]);
		return (
      <SideMenu
        style={Styles.menu}
        menu={menu}
        menuPosition={'right'}>
          <View style={Styles.container}>
            <View style={Styles.headerContainer}>
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
  },
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
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
