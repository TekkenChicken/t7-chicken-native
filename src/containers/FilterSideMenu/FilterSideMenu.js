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

const Styles = StyleSheet.create({
  container: {
    width: 100,
    height: 10
  }
})
