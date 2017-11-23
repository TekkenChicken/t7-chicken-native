import React, { Component, PropTypes } from 'react';

// dependencies
import {
  View,
  StyleSheet,
  Text,
  Alert,
  FlatList,
  Keyboard
} from 'react-native';

import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

// components
import DataList from '../../components/DataList/DataList';
import FrameDataCard from '../../components/FrameData/FrameDataCard';
import Spreadsheet from '../../components/Spreadsheet/';

// Utils
import MoveFiltersUtil from '../../util/moveFilters/moveFiltersUtil';

import * as Colors from '../../style/vars/colors';

//actions
import { updateUserAlertData } from '../../redux/actions/blob';
import { showAttackDetails } from '../../redux/actions/attackDetails';

class MoveList extends Component {

  componentDidMount() {
    //this.spreadsheetCheck(this.props.spreadsheetAware, this.props.orientation);
  }

  // Navigate to Attack Details on Move press
  onMovePress(move, index) {
    Keyboard.dismiss();
    this.props.dispatchNavigateToAttack(move, index);
    this.props.navigation.navigate('attackDetails', {move, index});
  }

  spreadsheetCheck(isAware, isPortrait) {
    if (!isAware && isPortrait == true) {
      Alert.alert('Spreadsheet View',
        'Hold phone sideways to see Spreadsheet View',
        [
          {text: 'Ok', onPress: () => this.props.updateUserAlertData(false)},
          {text: `Don't show me this again`, onPress: () => this.props.updateUserAlertData(true)}
        ]
      )
    }
  }

  render() {
    // Filter and Search Move Data before rendering
    let moves = MoveFiltersUtil.filterMoves(this.props.moves, this.props.filter);
    moves = MoveFiltersUtil.searchByNotation(moves, this.props.searchNotation);
    const { isPortrait } = this.props;
    return (
      <View style={Styles.container}>
        <View>
          <View style={isPortrait ? { display: 'none' } : {}}>
            <Spreadsheet isPortrait={isPortrait} moves={moves} onMovePress={(move, index) => this.onMovePress(move, index)} />
          </View>
          <LinearGradient
            start={{ x: 1.8, y: 0.4 }} end={{ x: 0.1, y: 0.9 }}
            colors={[Colors.redSecondary, Colors.redPrimary]}>
            <FlatList
              style={isPortrait ? {} : { display: 'none' }}
              data={moves}
              keyExtractor={(move, i) => i}
              renderItem={(move) => (
                <FrameDataCard
                  onPressHandler={() => this.onMovePress(move.item, move.index)}
                  moveIndex={move.index}
                  move={move.item}
                />)}
              ListEmptyComponent={() => (<Text>Loading</Text>)}
            />
          </LinearGradient>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 80
  },
  row: {
    flexDirection:'row',
    alignItems: 'flex-start'
  },
  landscapeContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  notation: {
    paddingLeft: 10,
    width: 150,
    borderWidth: 1,
    borderColor: 'transparent',
    color: 'white'
  },
  headerNotation: {
    paddingLeft: 10,
    width: 150,
    borderWidth: 1,
    borderColor: 'transparent',
    color: 'white',
    backgroundColor: Colors.redSecondary,
  },
  landscapeMove: {
    flex: 1,
    textAlign: 'center',
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    color: 'white'
  },
  landscapeHeader: {
    flex: 1,
    textAlign: 'center',
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    color: 'white',
    backgroundColor: Colors.redSecondary,
  }
})

MoveList.Proptypes = {
  characters: PropTypes.array,
  onCharacterSelect: PropTypes.func
};

/** MAPPING STATE **/
const mapStateToProps = (state) => {
  return {
    filter: state.character.filter,
    searchNotation: state.character.searchNotation,
    spreadsheetAware: state.blob.spreadsheetAware
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserAlertData: (isAware) => dispatch(updateUserAlertData(isAware)),
    dispatchNavigateToAttack: (move, index) =>  dispatch(showAttackDetails(move, index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveList);
