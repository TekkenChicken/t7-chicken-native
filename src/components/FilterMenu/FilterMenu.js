import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Button, Platform, ScrollView } from 'react-native';

import MoveFiltersUtil from '../../util/moveFilters/moveFiltersUtil';
import moveFilterOptions from '../../util/moveFilters/moveFilterOptions';

//Components
import FilterAccordion from './FilterAccordion';

class FilterMenu extends Component {
  constructor (props) {
    super(props);
    this.state = {
      reset: false,
    };
  }

  resetFilters() {
  }

  accordionRender(filterOptions, callback, reset) {
    return filterOptions.map((filter, i) => {
      return (
        <FilterAccordion
          key={i}
          options={filter.options}
          filterKey={filter.key}
          headerLabel={filter.label}
          onFilterPressHandler={(key, value, addFlag) => callback(key, value, addFlag)}
          easing="easeOutCubic"
          reset={reset}
        />
      )
    })
  }

  render() {
    return (
      <View>
        <ScrollView style={Styles.menuContainer}>
          <Text style={Styles.menuTitle}>Filters</Text>
          {this.accordionRender(moveFilterOptions, this.props.updateFilterHandler, this.state.reset)}
        </ScrollView>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  menuContainer: {
    marginTop: 1,
    paddingTop: 40,
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
});

FilterMenu.propTypes = {
  updateFilterHandler: PropTypes.func
}

export default FilterMenu;
