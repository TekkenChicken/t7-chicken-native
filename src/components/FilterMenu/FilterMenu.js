import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Platform, ScrollView } from 'react-native';

import { connect } from 'react-redux';

import moveFilterOptions from '../../util/moveFilters/moveFilterOptions';

//Components
import FilterAccordion from './FilterAccordion';

class FilterMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {}
    };
  }

  componentWillUpdate() {
    if (this.state.filter) {
      return false;
    }
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

  accordionRender(filterOptions) {
    return filterOptions.map((filter, i) => {
      return (
        <FilterAccordion
          key={i}
          options={filter.options}
          filterKey={filter.key}
          headerLabel={filter.label}
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
