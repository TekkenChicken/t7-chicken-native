import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import Accordion from 'react-native-accordion';

import { toggleFilter } from '../../redux/actions/filter-action';

import {
  hitLevelFilters,
  speedFilters
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
    return (
      <View style={raw.sideMenuContainer}>
        <Text style={Styles.sideMenuTitle}>Filter Settings</Text>

        <Accordion
          header={<Text style={Styles.header}>{hitLevelFilters.category}</Text>}
          content={<View style={Styles.expanded}>{this.filterRender(hitLevelFilters)}</View>}
          easing="easeOutCubic"
          underlayColor="white"
        />
        <Accordion
          header={<Text style={Styles.header}>{speedFilters.category}</Text>}
          content={<View style={Styles.expanded}>{this.filterRender(speedFilters)}</View>}
          easing="easeOutCubic"
          underlayColor="white"
        />

      </View>
    )
  }
}

const raw = {
  sideMenuContainer: {
    paddingTop: 30,
    flex: 1,
    alignItems: 'center'
  },
  sideMenuTitle: {
    alignItems: 'center'
  },
  accordion: {
    borderWidth: 1
  },
  header: {
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 32,
    marginTop: 10
  },
  button: {
    color: 'red',
    fontSize: 30
  },
  expanded: {
    width: 200
  }
}

const Styles = StyleSheet.create(raw)



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
