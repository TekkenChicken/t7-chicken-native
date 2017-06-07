import React, { Component, PropTypes } from 'react';

// dependencies
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import { connect } from 'react-redux';

// components
import DataList from '../../components/DataList/DataList';
import FrameDataCard from '../../components/FrameData/FrameDataCard';

// Utils
import MoveFiltersUtil from '../../util/moveFilters/moveFiltersUtil';

class MoveList extends Component {

  render() {
    let moves = MoveFiltersUtil.filterMoves(this.props.moves, this.props.filter);
    moves = MoveFiltersUtil.searchByNotation(moves, this.props.searchNotation);
    return (
      <View style={Styles.container}>
        <Text style={Styles.rbnorway}>Frame data provided by rbnorway.org</Text>
        <DataList
          listData={moves}
          cellComponent={FrameDataCard}
          cellsPerRow={1}
          rowStyle={Styles.row}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 7,
    marginBottom: 80
  },
  row: {
    flexDirection:'row',
    alignItems: 'flex-start',
    paddingLeft: 3
  },
  rbnorway: {
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Exo2-Light',
    color: '#f0aeb1',
    fontSize: 12,
    backgroundColor: 'transparent'
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
    searchNotation: state.character.searchNotation
  };
};

export default connect(mapStateToProps)(MoveList);
