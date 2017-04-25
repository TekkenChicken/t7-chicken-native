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
import SelectBanner from './SelectBanner';

// Styles
import Styles from './styles';

// dispatch actions
import { fetchCharacters } from '../../redux/actions/select';
import { fetchInitialAppData } from '../../redux/actions/blob';


class CharacterSelectScreen extends Component {

  componentDidMount() {
    this.props.dispatch(fetchCharacters());
  }

  /**
   *  @method: navigateToCharacter
   *  @param: characterID [string]
   *  Will navigate to the character page and pass the characterID as a prop to the page
   *  (where it will be used to fetch data on a character)
   */
  navigateToCharacter(characterID) {
    this.props.navigator.push(Router.getRoute('characterProfile', { characterID }));
  }

  render() {
    console.log("Characters Select", this.props.characters);
    return (
      <ScrollView style={Styles.mainContainer}>
        <SelectBanner style={Styles.banner} />
        <CharacterList
          characters={this.props.characters}
          onCharacterSelect={(id, image) => this.navigateToCharacter(id)}
        />
      </ScrollView>
    );
  }
}


/** MAPPING STATE **/
const mapStateToProps = function(state) {
  console.log(state);
  return {
    characters: state.select.characters,
    blob: state.blob
  }
};

export default connect(mapStateToProps)(CharacterSelectScreen);
