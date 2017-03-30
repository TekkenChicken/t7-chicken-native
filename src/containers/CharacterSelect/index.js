import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// dependencies
import {
  View,
  Text,
  ListView,
  ScrollView,
  Button,
  TextInput
} from 'react-native';
import { Router } from '../Router';

// components
import DataList from '../components/DataList/DataList';

//dispatch actions
import { fetchCharacters } from '../../redux/actions/select';

class CharacterSelect extends Component {

  componentDidMount() {

  }

  render() {
    return();
  }
}

// mapping
const mapStateToProps = function(state) {
  let { characters } = state.select;
  return {
    characters
  }
};

const mapDispatchToProps = function(dispatch) {
	return {
		dispatch,
		fetchCharacters
	 };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSelect);
