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
import CommandListBanner from '../../components/CharacterProfile/CommandListBanner';

// Utils
import MoveFiltersUtil from '../../util/moveFilters/moveFiltersUtil';

class MoveList extends Component {

  render() {
    console.log("render movelist", this.props.filter);
    const moves = MoveFiltersUtil.filterMoves(this.props.moves, this.props.filter);
    return (
      <View>
        <CommandListBanner />
        <DataList
          listData={moves}
          cellComponent={FrameDataCard}
          cellsPerRow={3}
          rowStyle={Styles.row}
        />
        <Text style={Styles.rbnorway}>Frame data provided by rbnorway.org</Text>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection:'row',
    alignItems: 'flex-start',
    paddingLeft: 3
  },
  rbnorway: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Exo2-Light',
    color: '#f0aeb1',
    fontSize: 12
  }
})

MoveList.Proptypes = {
  characters: PropTypes.array,
  onCharacterSelect: PropTypes.func
};

/** MAPPING STATE **/
const mapStateToProps = (state) => {
  return {
    filter: state.character.filter
  };
};

export default connect(mapStateToProps)(MoveList);
