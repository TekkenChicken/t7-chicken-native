import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

class LeftMenu extends Component {

  render() {
    return (
        <TouchableHighlight
          onPress={this.props.func}
          >
          <Image
            style={Styles.menuIcon}
            source={require('./../../img/icons/menu.png')}
          />
        </TouchableHighlight>
    )
  }
}

class SearchBar extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.func}>
        <Image
          style={Styles.searchIcon}
          source={require('./../../img/icons/fa-search.png')}
        />
      </TouchableHighlight>
    )
  }
}

class FilterMenu extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.func}>
        <Image
          style={Styles.filterIcon}
          source={require('./../../img/icons/filter.png')}
        />
      </TouchableHighlight>
    )
  }
}

class Toolbar extends Component {

  leftMenu() {
    console.log('Open Left Menu')
  }

  rightMenu() {
    console.log('Open Right Menu');
  }

  renderSearchBar() {
    console.log('Render Search Bar');
  }

  render() {
    const name = !this.props.name ? '' : this.props.name;
    return (
      <View style={Styles.toolbarContainer}>
        <LeftMenu func={this.leftMenu}/>
        <SearchBar func={this.renderSearchBar} />
        <Text style={Styles.name}>{name.toUpperCase()}</Text>
      <FilterMenu func={this.rightMenu} />
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
    marginBottom: 30,
    height: 20
  },
  menuIcon: {
    height: 25,
    width: 25
  },
  searchIcon: {
    height: 25,
    width: 25,
    marginLeft: 20
  },
  filterIcon: {
    height: 25,
    width: 25
  },
  name: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    width: 240
  }
})

export default Toolbar;
