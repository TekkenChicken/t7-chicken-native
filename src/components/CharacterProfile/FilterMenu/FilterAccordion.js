import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Button
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const redPrimary = '#730909';
const redSecondary = '#520b0a';

// Components
import CustomText from '../../CustomText/CustomText';
import Accordion from 'react-native-accordion';
import FilterButtonGroup from './FilterButtonGroup';

class FilterAccordion extends Component {

  constructor() {
    super();
    this.state = {
      expanded: true
    };
  }

  renderHeader(label) {
    const expandIconStyle = (this.state.expanded) ? Styles.filterHeader__expandIcon : [Styles.filterHeader__expandIcon, Styles.filterHeader__expandIcon__closed];
    return (
      <LinearGradient
        colors={[redPrimary, redSecondary]}
        style={Styles.filterHeader}
        start={{x: 1.5, y: 0.25}} end={{x: 0.5, y: 1.0}}
        >
        <CustomText textStyle={Styles.filterHeader__label}>{label}</CustomText>
        <CustomText textStyle={expandIconStyle}>^</CustomText>
      </LinearGradient>
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
        expanded={false}
        onPress={() => this.setState({ expanded: !this.state.expanded })}
        easing="easeOutCubic"
        underlayColor="white"
      />
    );
  }
}

const Styles = StyleSheet.create({
  filterHeader: {
    flex: 1,
    flexDirection: 'row',
		backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#6d080d',
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 20
  },
  filterHeader__label: {
    flex: 0.9,
    color: '#f0aa23',
    fontWeight: '500'
  },
  filterHeader__expandIcon: {
    flex: 0.1,
    fontSize: 28,
    color: '#f0aa23',
    fontWeight: '600',
    height: 20,
    marginTop: -4
  },
  filterHeader__expandIcon__closed: {
    transform: [{ rotateX: '180deg'}, {translateY: -8}],
  }
});

FilterAccordion.propTypes = {
  filter: PropTypes.object,
  onFilterSelectHandler: PropTypes.func,
};

export default FilterAccordion;
