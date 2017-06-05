import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  Modal,
  Platform,
  Dimensions,
  Animated,
  Easing
} from 'react-native';

import SearchBar from '../../SearchBar/SearchBar';
import icons from '../../../img/icons/';

class SearchButton extends Component {
  // TODO: method to toggle search bar and search bar with onSearchCallback
  constructor() {
    super();
    this.state = {
      openSearch: false,
      searchAnimate: new Animated.Value(0)
    };
  }

  toggleSearch(toggle) {
    if (toggle) {
      return this.setSearchState(true, () => this.animateSearch(true));
    }
    return this.animateSearch(false, () => this.setSearchState(false));
  }

  setSearchState(toggle, callback = ()=>{} ) {
    return this.setState({openSearch: toggle}, () => callback());
  }

  animateSearch(willEnter, callback = ()=>{} ) {
    const start = (willEnter) ? 0 : 1;
    const end = (willEnter) ? 1 : 0;
    this.state.searchAnimate.setValue(start);
    Animated.timing(
      this.state.searchAnimate,
      {
        toValue: end,
        duration: 200,
        easing: Easing.out(Easing.quad)
      }
    ).start(() => callback());
  }

  // Only render the search bar if needed
  renderSearchBar(openSearch, animateStyle) {
    if (openSearch) {
      return (
        <Animated.View style={[styles.searchBox, animateStyle]}>
          <SearchBar />
          <TouchableHighlight
            onPress={() => this.toggleSearch(false)}
            underlayColor="transparent">
            <Image style={styles.close} source={icons['close']} />
          </TouchableHighlight>
        </Animated.View>
      );
    }
    return null;
  }

  render() {
    const endTop = (Platform.OS === "ios") ? -36 : -31;
    const top = this.state.searchAnimate.interpolate({
      inputRange: [0, 1],
      outputRange: [ -25, endTop]
    });
    const opacity = this.state.searchAnimate.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });
    return (
      <View style={[styles.container, (this.state.openSearch) ? styles.searchOpen : '']}>
        <TouchableHighlight
          disabled={this.state.openSearch}
          onPress={() => this.toggleSearch(true)}
          style={styles.button}>
          <Image
            style={styles.icon}
            source={icons['searchFa']}
          />
        </TouchableHighlight>
          {this.renderSearchBar(this.state.openSearch, {top, opacity})}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    height: 18,
    width: 18,
    zIndex: 4
  },
  icon: {
    resizeMode: 'contain',
    height: 18,
    width: 18
  },
  searchOpen: {
    backgroundColor: '#111'
  },
  searchBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    opacity: 0,
    zIndex: 3,
    width: Dimensions.get('window').width * 0.9,
    flex: 1,
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        height: 64,
        top: -36,
      },
      android: {
        height: 54,
        top: -31
      },
    })
  },
  close: {
    alignSelf: "center",
    width: 15,
    height: 15,
    marginLeft: 50,
    marginTop: 13
  }
});

SearchButton.propTypes = {
  onSearchCallback: PropTypes.func
}

export default SearchButton;
