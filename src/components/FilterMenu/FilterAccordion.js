import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

import Accordion from 'react-native-accordion';

class FilterAccordion extends Component {
  render() {
    return (
      <View>
        <Accordion
          header={<Text style={Styles.filterTitle}>{this.props.header}</Text>}
          content={<Text style={Styles.filterButton}>{this.props.content}</Text>}
          easing="easeOutCubic"
          underlayColor="white"
        />
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  filterContainer: {
    flex: 1
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
    textAlign: 'center',
    width: 100,
  }
})

export default FilterAccordion
