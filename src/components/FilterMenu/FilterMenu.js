import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Button, Platform, ScrollView } from 'react-native';

import { connect } from 'react-redux';
import MoveFiltersUtil from '../../util/moveFilters/moveFiltersUtil';
import moveFilterOptions from '../../util/moveFilters/moveFilterOptions';

//Components
import FilterAccordion from './FilterAccordion';

class FilterMenu extends Component {
  constructor (props) {
    super(props);
    this.state = {
      filterQueue: {}
    };
  }

  updateFilter(key, value, addFlag) {
    const filter = { ...this.state.filterQueue };
    filter[key] = filter[key] || [];

    if (addFlag) {
      filter[key].push(value);
    } else {
      const i = filter[key].indexOf(value);
      filter[key].splice(i, 1);

      if (filter[key].length === 0) {
        delete filter[key];
      }
    }

    this.setState({ filterQueue: filter });
    console.log(filter);
    console.log(MoveFiltersUtil.filterMoves(this.props.moves, filter));
  }

  accordionRender(filterOptions, callback) {
    return filterOptions.map((filter, i) => {
      return (
        <FilterAccordion
          key={i}
          options={filter.options}
          filterKey={filter.key}
          headerLabel={filter.label}
          onFilterPressHandler={(key, value, addFlag) => this.updateFilter(key, value, addFlag)}
          easing="easeOutCubic"
        />
      )
    })
  }

  render() {
    return (
      <ScrollView style={Styles.menuContainer}>
        <Text style={Styles.menuTitle}>Filters</Text>
        {this.accordionRender(moveFilterOptions)}
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
});

FilterMenu.propTypes = {
  updateFilterHandler: PropTypes.func
}

/** MAPPING STATE **/
const mapStateToProps = function(state) {
  let { character } = state;
  return {
    moves: character.moves
  }
};

export default connect(mapStateToProps)(FilterMenu);
//export default FilterMenu;
