import React, { Component, PropTypes } from 'react';

// dependencies
import {
  View,
  StyleSheet
} from 'react-native';

// components
import DataList from '../../components/DataList/DataList';
import CharacterCard from './CharacterCard';

class CharacterList extends Component {

  // custom renderRow function for List
  renderCharacterRow(rowData) {
    return null;
  }

  render() {
    return (
      <View>
        <DataList
          listData={this.props.characters}
          cellComponent={CharacterCard}
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

CharacterList.Proptypes = {
  characters: PropTypes.array,
  onCharacterSelect: PropTypes.func
};

export default CharacterList;
