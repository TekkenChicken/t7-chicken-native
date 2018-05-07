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

import icons from '../../img/icons/index';

class LeftMenu extends Component {
  render() {
    const menuIcon = icons['menu'];
    return (
        <TouchableHighlight
          style={Styles.menuWrapper}
          onPress={this.props.func}>
          <Image style={{flex: 1}} source={menuIcon} />
        </TouchableHighlight>
    );
  }
}

class SearchBarButton extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.func}
        style={Styles.searchWrapper}>
        <Image
          source={icons['searchFa']}
        />
      </TouchableHighlight>
    );
  }
}

class FilterMenu extends Component {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.func}
        style={Styles.filterWrapper}>
        <Image
          source={icons['filter']}
        />
      </TouchableHighlight>
    );
  }
}

class Toolbar extends Component {
  constructor() {
    super();
    this.state = {
      search: false
    };
  }

  toggleSearchBar = () => {
    this.setState({search: !this.state.search});
  }

  renderToolBar() {
    if(this.state.search === false) {
      const name = !this.props.name ? '' : this.props.name;
      return (
        <View style={Styles.toolbarContainer}>
          <LeftMenu func={this.leftMenu}/>
          <SearchBarButton func={this.toggleSearchBar} />
          <Text style={Styles.name}>{name.toUpperCase()}</Text>
          <FilterMenu func={this.rightMenu} />
        </View>
      );
    } else {
      return (
        <View style={Styles.toolbarContainer}>
          <SearchBar toggle={this.toggleSearchBar} />
        </View>
      );
    }
  }

  render() {
    return (
      <View>
        {this.renderToolBar()}
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  toolbarContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 60,
    paddingLeft: 10,
    backgroundColor: 'rgb(65, 18, 18)'
  },
  menuWrapper: {
    height: 40,
    width: 40,
  },
  searchWrapper: {
    height: 40,
    width: 40,
    marginLeft: 20
  },
  filterWrapper: {
    height: 40,
    width: 40,
    marginLeft: 20
  },
  name: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    width: 240,
    height: 50
  }
});

export default Toolbar;
