import React, { Component, PropTypes }  from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableHighlight,
  Platform,
  Dimensions,
  Animated,
  Easing
} from 'react-native';

import icons from '../../img/icons/';
import Button from '../Button/Button';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchFocusAnim: new Animated.Value(0)
    };
  }

  // On search focus/unfocus, will animate toggling the cancel button
  animateOnSearchFocus(focus, callback) {
    const start = (focus) ? 0 : 1;
    const end = (focus) ? 1 : 0;
    this.state.searchFocusAnim.setValue(start);
    Animated.timing(
      this.state.searchFocusAnim,
      {
        toValue: end,
        duration: 300,
        easing: Easing.out(Easing.quad)
      }
    ).start();

    if (callback) { callback(); }
  }

  /**
   *  @method: cancelSearch
   *  (Cancel Button touch callback) Clears the input and the search queries.
   */
  cancelSearch() {
    this.refs._input.clear();
    this.props.onChange('');
    this.refs._input.blur();
  }

  render() {
    const { onChange, containerStyle, onFocusCallback, onBlurCallback } = this.props;
    const margin = this.state.searchFocusAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [ 20, 0]
    });
    const opacity = this.state.searchFocusAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [ 0, 1]
    });
    return (
      <View style={[Styles.mainContainer, containerStyle]}>
        <View style={Styles.contentWrap}>
          <View
            style={[Styles.iconContainer, Styles.searchIconContainer]}>
            <Image style={Styles.search} source={icons['search']} />
          </View>
          <TextInput
            ref="_input"
            placeholder="Search"
            placeholderTextColor='#804e55'
            style={Styles.input}
            onFocus={() => this.animateOnSearchFocus(true, onFocusCallback)}
            onBlur={() => this.animateOnSearchFocus(false, onBlurCallback)}
            onChangeText={(text) => onChange(text)}
            underlineColorAndroid='rgba(0,0,0,0)'
          />
          <Animated.View style={[Styles.cancel, {marginLeft: margin, opacity: opacity}] }>
            <Button
              onPress={() => this.animateOnSearchFocus(false, () => this.cancelSearch())}
              title={"Cancel"}
              titleStyle={Styles.cancelTitle}
              underlayColor="transparent"
            />
          </Animated.View>
        </View>
      </View>
    )
  }
}

const styleVar = {
  sidePadding: 18,
  vertPadding: 3,
  searchBarHeight: 30
};

const Styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get('window').width,
    flexDirection: 'row',
		backgroundColor: '#1b0105',
    alignItems: 'center',
    height: 54,
    paddingTop: styleVar.vertPadding,
    paddingBottom: styleVar.vertPadding,
    paddingLeft: styleVar.sidePadding,
    paddingRight: styleVar.sidePadding
  },
  contentWrap: {
    flex: 0.85,
    flexDirection: 'row',
    backgroundColor: '#34151a',
    borderRadius: 5
  },
  input: {
    alignSelf: "center",
    color: '#f0aa23',
    fontFamily: 'Exo2-Light',
    fontSize: 15,
    flex: 0.7,
    ...Platform.select({
      ios: {
        height: 30
      },
      android: {
        height: 40
      }
    }),
    paddingLeft: 14
  },
  iconContainer: {
    alignSelf: "center",
    height: 11,
    ...Platform.select({
      ios: {
        width: 11
      },
      android: {
        width: 20
      }
    })
  },
  searchIconContainer: {
    paddingLeft: 6,
    paddingTop: 0.5,
    alignSelf: "center",
    opacity: 0.4,
    zIndex: 2
  },
  search: {
    resizeMode: 'contain',
    width: 11,
    height: 11,
  },
  cancel: {
    flex: 0.18,
    backgroundColor: '#1b0105',
    opacity: 0,
    paddingLeft: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelTitle: {
    color: '#f0aa23'
  }
});

/** MAPPING STATE **/
const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchCharacters: (text) => {
      dispatch(searchCharacters(text));
    }
  };
};

SearchBar.propTypes = {
  onChange: PropTypes.func,
  onFocusCallback: PropTypes.func,
  onBlurCallback: PropTypes.func,
  containerStyle: PropTypes.number
}

export default SearchBar;
