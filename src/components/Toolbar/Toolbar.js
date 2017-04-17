import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image
} from 'react-native';

class LeftMenu extends Component {
  leftMenu() {
    console.log('Open Left Menu')
  }
  render() {
    return (
      <View>
        <Image
          onPress={this.openMenu}
          style={Styles.menuIcon}
          source={require('./../../img/icons/menu.png')}
        />
      </View>
    )
  }
}

class SearchBar extends Component {
  render() {
    return (
      <View>
        <Image
          style={Styles.searchIcon}
          source={require('./../../img/icons/fa-search.png')}
        />
      </View>
    )
  }
}

class FilterMenu extends Component {
  render() {
    return (
      <View>
        <Image
          style={Styles.searchIcon}
          source={require('./../../img/icons/filter.png')}
        />
      </View>
    )
  }
}

class Toolbar extends Component {
  render() {
    const name = !this.props.name ? '' : this.props.name;
    return (
      <View style={Styles.toolbarContainer}>
        <LeftMenu />
      <SearchBar />
    <Text style={Styles.name}>{name.toUpperCase()}</Text>
    <FilterMenu style={Styles.filterIcon}/>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  toolbarContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
  },
  menuIcon: {
    height: 20,
    width: 20
  },
  searchIcon: {
    height: 20,
    width: 20,
    marginLeft: 20
  },
  filterIcon: {

  },
  name: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    width: 240
  }
})

export default Toolbar;
