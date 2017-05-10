import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

// Components
import Accordion from 'react-native-accordion';
import FilterButtonGroup from './FilterButtonGroup';

class FilterAccordion extends Component {

  renderHeader(label) {
    return (
      <View style={Styles.filterButton}>
        <Text style={Styles.filterTitle}>{label}</Text>
      </View>
    );
  }
  renderFilterOptions(filterKey, options, callback) {
    return (
      <View>
        <FilterButtonGroup
          filterKey={filterKey}
          options={options}
          onOptionSelectHandler={(key, value, addFlag) => callback(key, value, addFlag)}
        />
      </View>
    );
  }

  render() {
    const { filterKey, options, onFilterSelectHandler, headerLabel } = this.props;
    const header = this.renderHeader(headerLabel);
    const content = this.renderFilterOptions(filterKey, options, onFilterSelectHandler);
    return (
      <Accordion
        header={header}
        content={content}
        expanded={true}
        easing="easeOutCubic"
        underlayColor="white"
      />
    );
  }
}

const Styles = StyleSheet.create({
  accordionContainer: {
    height: 40,
    width: 240,
		backgroundColor: 'rgb(132, 18, 18)'
  },
  filterTitle: {
    color: '#f0aa23',
    height: 50,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgb(132, 18, 18)',
    paddingLeft: 10,
    paddingTop: 10
  },
  filterButton: {
    backgroundColor: 'rgb(68, 18, 18)'
  }
});

FilterAccordion.propTypes = {
  filter: PropTypes.object,
  onFilterSelectHandler: PropTypes.func,
};

export default FilterAccordion;
