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
  TextInput,
  Keyboard
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

// components
import CharacterList from './CharacterList';
import SearchBar from '../../components/SearchBar/SearchBar';
import CustomText from '../../components/CustomText/CustomText';
import ErrorBox from '../../components/ErrorBox/ErrorBox';
import { charSelectNavHeader } from '../../components/NavigationBar';

// Styles
import Styles from './styles';
import * as Colors from '../../style/vars/colors';

// dispatch actions
import { fetchCharacters, searchCharacters  } from '../../redux/actions/select';
import { fetchInitialAppData, fetchUserAlertData } from '../../redux/actions/blob';


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
    this.props.fetchUserAlertData();
  }

  /**
   *  @method navigateToCharacter
   *  @param {string} characterID
   *  Will navigate to the character page and pass the characterID as a prop to the page
   *  (where it will be used to fetch data on a character)
   */
  navigateToCharacter(characterID, characterName) {
    Keyboard.dismiss();
    this.props.navigation.navigate('characterProfile', { characterID, characterName });
  }

  renderErrorMsg(fetchError) {
    if (fetchError) {
      return (
        <ErrorBox error={fetchError} />
      );
    }
    return null;
  }

  render() {
    return (
      <LinearGradient colors={[Colors.redPrimary, Colors.redSecondary]} style={Styles.mainContainer}>
        <View>
          <SearchBar onChange={this.props.searchCharacters}/>
        </View>
        <ScrollView
          style={Styles.scrollContainer}
          keyboardShouldPersistTaps="always">
          <CharacterList
            containerStyle={Styles.charList}
            characters={this.props.characters}
            onCharacterSelect={(id, name) => this.navigateToCharacter(id, name)}
          />
        </ScrollView>
        {this.renderErrorMsg(this.props.fetchError)}
      </LinearGradient>
    );
  }
}


/** MAPPING STATE **/
const mapStateToProps = (state) => {
  return {
    characters: state.select.characters,
    fetchError: state.blob.fetchError
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
    },
    fetchUserAlertData: () => {
      dispatch(fetchUserAlertData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSelectScreen);
