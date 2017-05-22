import React, { Component }  from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight,
  Platform
} from 'react-native';

//action imports
import { searchCharacters } from '../../redux/actions/select';


class SearchBar extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.refs._input.focus();
  }

  characterFilter = (text) => {
    this.props.searchCharacters(text);
  }

  render() {
    return (
      <View style={Styles.mainContainer}>
        <TextInput
          ref="_input"
          placeholder="Search"
          placeholderTextColor='rgb(159, 159, 157)'
          style={Styles.input}
          onChangeText={(text) => this.characterFilter(text)}
        />
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
		backgroundColor: 'transparent',
    alignItems: 'center',
    paddingTop: 12,
    paddingLeft: 40,
    ...Platform.select({
      ios: {
        height: 64,
      },
      android: {
        height: 54,
      },
    }),
  },
  input: {
    alignSelf: "center",
    color: '#f0aa23',
    fontFamily: 'Exo2-Light',
    fontSize: 16,
    width: 270,
    height: 30,
    backgroundColor: '#260309',
    borderRadius: 10
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
