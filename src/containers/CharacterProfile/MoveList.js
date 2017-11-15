import React, { Component, PropTypes } from 'react';

// dependencies
import {
  View,
  StyleSheet,
  Text,
  Alert
} from 'react-native';

import { connect } from 'react-redux';

// components
import DataList from '../../components/DataList/DataList';
import FrameDataCard from '../../components/FrameData/FrameDataCard';
import Spreadsheet from '../../components/Spreadsheet/';

// Utils
import MoveFiltersUtil from '../../util/moveFilters/moveFiltersUtil';

const redPrimary = '#9d1018';
const redSecondary = '#320f1c';

//actions
import { updateUserAlertData } from '../../redux/actions/blob';

class MoveList extends Component {

  componentDidMount() {
    this.spreadsheetCheck(this.props.spreadsheetAware, this.props.orientation);
  }


  renderByOrientation(orientation, moves) {
    if (orientation == 'landscape') {
      return (
        <Spreadsheet navigation={this.props.navigation} moves={moves} />
      );
    } else {
      return (
        <DataList
          listData={moves}
          cellComponent={FrameDataCard}
          cellsPerRow={1}
          rowStyle={Styles.row}
          navigation={this.props.navigation}
        />
      );
    }
  }

  spreadsheetCheck(isAware, orientation) {
    if (!isAware && orientation == 'portrait') {
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

    return (
      <View style={Styles.container}>
        {this.renderByOrientation(this.props.orientation, moves)}
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
    updateUserAlertData: (isAware) => dispatch(updateUserAlertData(isAware))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveList);
