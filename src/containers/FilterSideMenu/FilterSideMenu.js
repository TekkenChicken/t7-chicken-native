import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FilterMenu from '../../components/Menu/FilterMenu';

export default class FilterSideMenu extends React.Component {
  render() {
    return (
      <View>
          <FilterMenu style={Styles.container}/>
      </View>
    )
  }
}

const absoluteStretch = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
}

const Styles = StyleSheet.create({
  container: {
    width: 100,
    height: 10
  }
})
