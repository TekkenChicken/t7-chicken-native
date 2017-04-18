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
import SearchBar from '../../components/Searchbar/Searchbar';
import Toolbar from '../../components/Toolbar/Toolbar';

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

  /**
   *  @method: navigateToCharacter
   *  @param: characterID [string]
   *  Will navigate to the character page and pass the characterID as a prop to the page
   *  (where it will be used to fetch data on a character)
   */
  navigateToCharacter(characterID, characterMoves, characterImage) {
    this.props.navigator.push(Router.getRoute('characterProfile', { characterID, characterMoves, characterImage }));
  }

  render() {
    console.log("Characters Select", this.props.characters);
    return (
      <ScrollView style={Styles.mainContainer}>
        <Toolbar />
        <SelectBanner style={Styles.banner} />
        <CharacterList
          characters={this.props.characters}
          onCharacterSelect={(id, moves, image) => this.navigateToCharacter(id, moves, image)}
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
