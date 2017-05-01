import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Platform, ScrollView } from 'react-native';

import { connect } from 'react-redux';
//
import { toggleFilter } from '../../redux/actions/filter';
//
import {
  hitLevelFilters,
  speedFilters
} from '../../util/filters';

import allFilters from '../../util/filters';

//Components
import FilterAccordion from './FilterAccordion';

function FilterButton({filterName, filterFn, toggleFilter, activeFilters}) {
  function filterFinder(f) {
    return f == filterFn
  }
  return (
    <Button color="white" title={filterName} onPress={() => toggleFilter(filterFn)} >
      {filterName} {activeFilters.find(filterFinder) ? 'active' : 'inactive'}
    </Button>
  );
}

const FilterButtonContainer = connect(() => ({}), { toggleFilter })(FilterButton);

class FilterMenu extends Component {
  constructor() {
    super(props);
    this.state = {
      filter: {}
    };
  }

  updateFilter(key, value) {
    let filter = this.state.filter;
    // if the value sent is not null, update filter
    if (value) {
      filter[key] = value;
    } else {
      delete filter[key];
    }
    // update filter obj in state
    this.setState({ filter });
  }

  filterRender(categoryFilter) {
    return (
      <View>
        {
          categoryFilter.filters.map((f, key) => {
            return (
              <View style={Styles.accordionContainer} key={key}>
                <FilterButtonContainer
                  filterName={f.name}
                  filterFn={f.function}
                  toggleFilter={this.props.toggleFilter}
                  activeFilters={this.props.filter}
                />
              </View>
            );
          })
        }
      </View>
    );
  }

  accordionRender(allFilters) {
    return Object.keys(allFilters).map((f, key) => {
      return (
        <FilterAccordion
          key={key}
          header={allFilters[f].category}
          content={this.filterRender(allFilters[f])}
          onFilterPressHandler={(key, value) => this.updateFilter(key, value)}
          easing="easeOutCubic"
        />
      )
    })
  }

  render() {
    return (
      <ScrollView style={Styles.menuContainer}>
        <Text style={Styles.menuTitle}>Filters</Text>
        {this.accordionRender(allFilters)}
      </ScrollView>
    )
  }
}

const Styles = StyleSheet.create({
  menuContainer: {
    paddingTop: 80,
    paddingLeft: 10,
    paddingBottom: 500,
    backgroundColor: 'rgb(68, 18, 18)'
  },
  menuTitle: {
    color: 'white',
    fontSize: 32
  },
  accordionContainer: {
    height: 40,
    width: 240,
		backgroundColor: 'rgb(132, 18, 18)'
  }
})

const mapStateToProps = function(state) {
  console.log(state);
    let { filter, searchFilter, attackFilters } = state;
    return {
        filter
    }
}


const mapDispatchToProps = function(dispatch) {
	return {
		dispatch,
    toggleFilter
	 };
}

export default connect( mapStateToProps, mapDispatchToProps )(FilterMenu);
