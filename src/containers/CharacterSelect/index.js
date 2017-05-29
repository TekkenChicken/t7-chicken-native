import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
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
import SearchBar from '../../components/SearchBar/SearchBar';
import { charSelectNavHeader } from '../../components/NavigationBar';

// Styles
import Styles from './styles';

// dispatch actions
import { fetchCharacters, searchCharacters  } from '../../redux/actions/select';
import { fetchInitialAppData } from '../../redux/actions/blob';


class CharacterSelectScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const headerLeft = [
      {
        key: "MenuButton",
        onPress: () => navigation.navigate('DrawerOpen')
      }
    ];
    return charSelectNavHeader(headerLeft);
  };

  componentWillMount() {
    this.props.fetchCharacters();
    this.props.fetchInitialAppData();
  }

  /**
   *  @method: navigateToCharacter
   *  @param: characterID [string]
   *  Will navigate to the character page and pass the characterID as a prop to the page
   *  (where it will be used to fetch data on a character)
   */
  navigateToCharacter(characterID) {
    this.props.navigation.navigate('characterProfile', { characterID: characterID });
  }

  mapCharacters = (characters) => {
    let characterArray = [];
    Object.keys(characters).map((c) => {
      characterArray.push(characters[c]);
    });
    return characterArray;
  }

  render() {
    console.log(this.mapCharacters(this.props.characters));
    return (
      <View style={Styles.mainContainer}>
        <View>
          <SearchBar onChange={this.props.searchCharacters}/>
        </View>
        <ScrollView
          style={Styles.scrollContainer}
          keyboardShouldPersistTaps="always">
          <CharacterList
            containerStyle={Styles.charList}
            characters={this.mapCharacters(this.props.characters)}
            onCharacterSelect={(id, image) => this.navigateToCharacter(id)}
          />
        </ScrollView>
      </View>
    );
  }
}


/** MAPPING STATE **/
const mapStateToProps = (state) => {
  return {
    characters: state.select.characters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCharacters: () => {
      dispatch(fetchCharacters());
    },
    searchCharacters: (searchQuery) => {
      dispatch(searchCharacters(searchQuery));
    },
    fetchInitialAppData: () => {
      dispatch(fetchInitialAppData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSelectScreen);
