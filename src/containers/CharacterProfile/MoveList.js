import React, { Component, PropTypes } from 'react';

// dependencies
import {
  View,
  StyleSheet
} from 'react-native';

// components
import DataList from '../../components/DataList/DataList';
import FrameDataCard from '../../components/FrameData/FrameDataCard';

class MoveList extends Component {

  // custom renderRow function for List
  renderCharacterRow(rowData) {
    return null;
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <DataList
          listData={this.props.characters}
          cellComponent={FrameDataCard}
          cellsPerRow={4}
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
  }
})

MoveList.Proptypes = {
  characters: PropTypes.array,
  onCharacterSelect: PropTypes.func
};

export default MoveList;
