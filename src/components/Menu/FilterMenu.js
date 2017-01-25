import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import Accordion from 'react-native-accordion';

import { toggleFilter } from '../../redux/actions/filter-action';

import {
  hitLevelFilters
} from '../../util/filters';

function FilterButton({filterName, filterFn, toggleFilter, activeFilters}) {
  console.log(activeFilters, 'all the things')
	function filterFinder(f) {
		return f == filterFn
	}
	return (
		<Button title={filterName} onPress={() => toggleFilter(filterFn)}>{filterName} {activeFilters.find(filterFinder) ? 'active' : 'inactive'}</Button>
	)
}


const FilterButtonContainer = connect(() => ({}), { toggleFilter })(FilterButton);

class FilterMenu extends React.Component {

  filterRender(categoryFilter) {
    return categoryFilter.filters.map((f, key) => {
      return <FilterButtonContainer
         key={f.name}
         filterName={f.name}
         filterFn={f.function}
         toggleFilter={this.props.toggleFilter}
         activeFilters={this.props.attackFilters}
       />
    })
  }

  render() {
    console.log(this.props);
    return (
      <View style={Styles.sideMenuContainer}>
        <Text style={Styles.sideMenuTitle}>Filter Settings</Text>
        <Accordion
          header={<Text>{hitLevelFilters.category}</Text>}
          content={
            <View>
              {this.filterRender(hitLevelFilters)}
            </View>
          }
          easing="easeOutCubic"
          underlayColor="white"
        />
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  sideMenuContainer: {
    paddingTop: 30,
    flex: 1,
    alignItems: 'center'
  },
  sideMenuTitle: {
    alignItems: 'center'
  },
  filterContainer: {
    alignItems: 'flex-end'
  }
})


const mapStateToProps = function(state) {
    let { frameData, character} = state.characterData;
    let { filter, searchFilter, attackFilters } = state;

    return {
        character,
        filter,
        searchFilter,
				attackFilters
    }
}


const mapDispatchToProps = function(dispatch) {
	return {
		dispatch,
    toggleFilter
	 };
}

export default connect( mapStateToProps, mapDispatchToProps )(FilterMenu);
