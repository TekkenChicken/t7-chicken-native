import React, { Component, PropTypes } from 'react';

// dependencies
import {
  View
} from 'react-native';

// components
import DataList from '../components/DataList/DataList';
import CharacterCard './CharacterCard';

class CharacterList extends Component {

  // custom renderRow function for List
  renderCharacterRow(rowData) {
    return ();
  }

  render() {
    <DataList
      listData={this.frameDataFilter}
      cellComponent={FrameDataCard}
      cellsPerRow={5}
    />
  }
}

CharacterList.Proptypes = {
  characters: PropTypes.array,
  onCharacterSelect: PropTypes.func
};

export default CharacterList;
