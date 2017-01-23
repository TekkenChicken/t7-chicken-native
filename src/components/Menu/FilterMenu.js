import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

import { toggleFilter } from '../../redux/actions/filter-action';

import {
  isHighAttack,
  isLowAttack
} from '../../util/filters';

function FilterButton({filterName, filterFn, toggleFilter, activeFilters}) {
	function filterFinder(f) {
		return f == filterFn
	}
	return (
		<Button title={filterName} onPress={() => toggleFilter(filterFn)}>{filterName} {activeFilters.find(filterFinder) ? 'active' : 'inactive'}</Button>
	)
}


const FilterButtonContainer = connect(() => ({}), { toggleFilter })(FilterButton);

class FilterMenu extends React.Component {

  render() {
    return (
      <View style={Styles.sideMenuContainer}>
        <Text style={Styles.sideMenuTitle}>Filter Settings</Text>
        <View style={Styles.filterContainer}>
          <FilterButtonContainer
            filterName="High Attacks"
            filterFn={isHighAttack}
            activeFilters={this.props.attackFilters} />
        </View>
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
