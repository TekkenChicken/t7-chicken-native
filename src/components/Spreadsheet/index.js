import React, { Component, PropTypes } from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  Modal,
  StyleSheet,
  Keyboard,
} from 'react-native';

// components
import CustomText from '../CustomText/CustomText';
import FrameDataRow from './FrameDataRow';

// styles
import cellStyles from './cellStyles';

class Spreadsheet extends Component {

    constructor() {
      super();
      this.state = {modalVisable: false}
    }

    setModalVisible = (visible) => {
      Keyboard.dismiss();
      this.setState({modalVisible: visible});
    }

    renderTableHeader() {
      return (
        <FrameDataRow navigation={this.props.navigation} header={true} />
      )
    }

    // renderTableRows(moves, navigation) {
    //   return moves.map((move, i) =>
    //     <FrameDataRow move={move} key={i} rowIndex={i} />
    //   );
    // }

    /**
     *  @method renderTableRow
     *  @param {object} moveData -- individual move data item provided by FlatList using passed in data source
     *  @return {component} FrameDataRow
     *  Callback method passed into FlatList to render a FrameDataRow for each individual move item
     */
    renderTableRow(moveData, onMovePress) {
      return (
        <FrameDataRow
          move={moveData.item}
          moveIndex={moveData.index}
          onPressHandler={() => onMovePress(moveData.item, moveData.index)}
        />
      );
    }

    render() {
      const { moves } = this.props;

      return (
        <FlatList
          data={shownMoves}
          keyExtractor={(move, i) => i}
          renderItem={(move) => this.renderTableRow(move, this.props.onMovePress)}
          ListEmptyComponent={() => (<Text>Loading</Text>)}
        />
      )
    }

}

Spreadsheet.propTypes = {
  moves: PropTypes.array,
  onMovePress: PropTypes.func
}

export default Spreadsheet;
