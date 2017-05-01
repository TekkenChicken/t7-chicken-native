import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

// Components
import Accordion from 'react-native-accordion';
import FilterRadioButtonGroup from './FilterRadioButtonGroup';

class FilterAccordion extends Component {

  renderHeader(label) {
    return (
      <View>
        <Text style={Styles.filterTitle}>{label}</Text>
      </View>
    );
  }
  renderFilterOptions(filterKey, options, callback) {
    return (
      <View>
        <FilterRadioButtonGroup
          filterKey={filterKey}
          options={options}
          onOptionSelectHandler={(key, value) => callback(key, value)}
        />
      </View>
    );
  }

  render() {
    const { filterKey, options, onFilterPressHandler, headerLabel } = this.props;
    const header = this.renderHeader(headerLabel);
    const content = this.renderFilterOptions(filterKey, options, onFilterPressHandler);
    return (
      <Accordion
        header={header}
        content={content}
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
  }
});

FilterAccordion.propTypes = {
  filter: PropTypes.object,
  onFilterPressHandler: PropTypes.func,
};

export default FilterAccordion;
