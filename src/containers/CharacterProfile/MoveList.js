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
import LandscapeList from './LandscapeList';

// Utils
import MoveFiltersUtil from '../../util/moveFilters/moveFiltersUtil';

const redPrimary = '#9d1018';
const redSecondary = '#320f1c';


class MoveList extends Component {

  orientationHandler(orientation, moves) {
    console.log(orientation);
    if(orientation == 'portrait') {
      return (
        <DataList
          listData={moves}
          cellComponent={FrameDataCard}
          cellsPerRow={1}
          rowStyle={Styles.row}
        />
      )
    } else if(orientation == 'landscape') {
      return (
        <View>
          <View style={Styles.landscapeContainer}>
            <Text style={Styles.headerNotation}>Notation</Text>
            <Text style={Styles.landscapeHeader}>Speed</Text>
            <Text style={Styles.landscapeHeader}>On Block</Text>
            <Text style={Styles.landscapeHeader}>On Counter</Text>
            <Text style={Styles.landscapeHeader}>On Hit</Text>
            <Text style={Styles.landscapeHeader}>Hit Level</Text>
            <Text style={Styles.landscapeHeader}>Damage</Text>
          </View>
          <LandscapeList
          moves={moves}
        />
        </View>

      )
    }
  }

  render() {
    let moves = MoveFiltersUtil.filterMoves(this.props.moves, this.props.filter);
    moves = MoveFiltersUtil.searchByNotation(moves, this.props.searchNotation);

    return (
      <View style={Styles.container}>
        <Text style={Styles.rbnorway}>Frame data provided by rbnorway.org</Text>
          {this.orientationHandler(this.props.orientation, moves)}
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
    alignItems: 'flex-start'
  },
  rbnorway: {
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Exo2-Light',
    color: '#f0aeb1',
    fontSize: 12,
    backgroundColor: 'transparent'
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
    backgroundColor: redSecondary,
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
    backgroundColor: redSecondary,
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
