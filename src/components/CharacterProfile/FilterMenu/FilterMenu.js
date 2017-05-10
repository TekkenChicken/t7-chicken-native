import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native';

import moveFilterOptions from '../../../util/moveFilters/moveFilterOptions';

//Components
import FilterAccordion from './FilterAccordion';
import Button from '../../Button/Button';

class FilterMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resetFlag: 0,
    };
  }

  resetFilters(callback) {
    this.setState( {resetFlag: this.state.resetFlag + 1}, callback );
  }

  accordionRender(filterOptions, callback) {
    return filterOptions.map((filter, i) => {
      return (
        <FilterAccordion
          key={i}
          options={filter.options}
          filterKey={filter.key}
          headerLabel={filter.label}
          onFilterSelectHandler={(key, value, addFlag) => callback(key, value, addFlag)}
          easing="easeOutCubic"
        />
      )
    })
  }

  render() {
    const { onFilterSelectHandler, onFilterResetHandler } = this.props;
    return (
      <View>
        <ScrollView style={Styles.menuContainer}>
          <View style={Styles.menuHeader}>
            <Text style={Styles.menuTitle}>Filters</Text>
            <Button
              buttonStyle={Styles.menuResetBtn}
              titleStyle={Styles.menuResetBtn__Title}
              onPress={() => this.resetFilters(onFilterResetHandler)} 
              title="Reset"
            />
          </View>
          <View key={this.state.resetFlag}>
            {this.accordionRender(moveFilterOptions, onFilterSelectHandler)}
          </View>
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
  menuHeader: {
    flex: 1,
    flexDirection: 'row'
  },
  menuTitle: {
    color: 'white',
    fontSize: 24,
    flex: 0.8
  },
  menuResetBtn: {
    flex: 0.2
  },
  menuResetBtn__Title: {
    color: 'white'
  },
  accordionContainer: {
    height: 40,
    width: 240,
		backgroundColor: 'rgb(132, 18, 18)'
  }
});

FilterMenu.propTypes = {
  onFilterPressHandler: PropTypes.func,
  onFilterResetHandler: PropTypes.func
}

export default FilterMenu;
