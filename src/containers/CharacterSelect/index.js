import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router } from '../Router';
// dependencies
import {
  View,
  Text,
  ListView,
  ScrollView,
  Button,
  TextInput
} from 'react-native';

// components
import CharacterList from './CharacterList';

// Styles
import Styles from './styles';

// dispatch actions
import { fetchCharacters } from '../../redux/actions/select';
import { fetchInitialAppData } from '../../redux/actions/blob';


class CharacterSelectScreen extends Component {

  componentDidMount() {
    // Will need to decide to move onto initial loading screen
    // or keep here and use a loading state
    this.props.dispatch(fetchInitialAppData());
    this.props.dispatch(fetchCharacters());
  }

  navigateToCharacter(characterID) {
    this.props.navigator.push({
      component: Router.getRoute('character'),
      args: {
        characterID
      }
    });
  }

  render() {
    console.log("Characters Select", this.props.characters);
    return (
      <ScrollView style={Styles.mainContainer}>
        <CharacterList
          characters={this.props.characters}
          onCharacterSelect={() => this.navigateToCharacter()}
        />
      </ScrollView>
    );
  }
}


/** MAPPING STATE **/
const mapStateToProps = function(state) {
  let { characters } = state.select;
  return {
    characters
  }
};

export default connect(mapStateToProps)(CharacterSelectScreen);
