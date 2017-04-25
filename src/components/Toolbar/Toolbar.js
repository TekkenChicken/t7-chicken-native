import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

import SearchBar from '../SearchBar/SearchBar';

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

class SearchBarButton extends Component {
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
  constructor() {
    super();
    this.state = {
      search: false
    }
  }
  leftMenu() {
    console.log('Open Left Menu')
  }

  rightMenu() {
    console.log('Open Right Menu');
  }

  toggleSearchBar = () => {
    console.log('render search bar');
    this.setState({
      search: !this.state.search
    })
  }

  renderToolBar() {
    if(this.state.search == false) {
      const name = !this.props.name ? '' : this.props.name;
      return (
        <View style={Styles.toolbarContainer}>
          <LeftMenu func={this.leftMenu}/>
          <SearchBarButton func={this.toggleSearchBar} />
          <Text style={Styles.name}>{name.toUpperCase()}</Text>
          <FilterMenu func={this.rightMenu} />
        </View>
      )
    } else {
      return (
        <View style={Styles.toolbarContainer}>
          <SearchBar style={Styles.searchBarContainer} toggle={this.toggleSearchBar} />
        </View>
      )
    }
  }

  render() {
    console.log("toolbar");
    return (
      <View>
        {this.renderToolBar()}
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
    backgroundColor: 'rgb(65, 18, 18)'
  },
  searchBarContainer: {

  },
  menuIcon: {
    height: 25,
    width: 25,
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
    width: 240,
    height: 50
  }
})

export default Toolbar;
