import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

import FilterSideMenu from '../../containers/FilterSideMenu/FilterSideMenu';
import FilterMenu from '../Menu/FilterMenu';
import SideMenu from 'react-native-side-menu';

export default class Toolbar extends React.Component {
  render() {
    const menu = <FilterSideMenu style={Styles.filterSideMenu} navigator={navigator}/>;

    return (
      <View style={Styles.toolbar}>
        {this.props.filter}
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  toolbar: {
    height: 40,
    alignItems: 'flex-end',
    ...absoluteStretch
  },
  filter: {

  }
})


const absoluteStretch = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
}
