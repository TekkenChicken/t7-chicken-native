import React, { Component, PropTypes } from 'react';

// dependencies
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

// components
import DataList from '../../components/DataList/DataList';
import FrameDataCard from '../../components/FrameData/FrameDataCard';
import CommandListBanner from '../../components/CharacterProfile/CommandListBanner';

class MoveList extends Component {

  // custom renderRow function for List
  renderCharacterRow(rowData) {
    return null;
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <CommandListBanner />
      <Text style={Styles.rbnorway}>Frame data provided by rbnorway.org</Text>
        <DataList
          listData={this.props.moves}
          cellComponent={FrameDataCard}
          cellsPerRow={3}
          rowStyle={Styles.row}
        />
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
    alignItems: 'flex-start'
  },
  rbnorway: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'Exo2-Light',
    color: '#f0aeb1'
  }
})

MoveList.Proptypes = {
  characters: PropTypes.array,
  onCharacterSelect: PropTypes.func
};

export default MoveList;
