import React, { Component, PropTypes } from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  Modal,
  StyleSheet,
  Keyboard,
  FlatList
} from 'react-native';

// components
import CustomText from '../CustomText/CustomText';
import FrameDataRow from './FrameDataRow';

// styles
import cellStyles from './cellStyles';

class Spreadsheet extends Component {

    constructor() {
      super();
      this.state = {
        initialLoad: true
      };
    }

    componentDidMount() {
      setTimeout(() => this.triggerLoadState(), 600);
    }

    triggerLoadState() {
      this.setState({initialLoad: false});
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
    renderTableRow(moveData, onMovePress, isPortrait) {
      return (
        <FrameDataRow
          move={moveData.item}
          moveIndex={moveData.index}
          onPressHandler={() => onMovePress(moveData.item, moveData.index)}
          isPortrait={isPortrait}
        />
      );
    }

    renderTempLoadingComponent() {
      return (
        <Text style={{textAlign: 'center', width: '100%'}}>Loading</Text>
      );
    }

    render() {
      // will be empty on intial load so that rendered Table does not
      const shownMoves = (this.state.initialLoad) ? [] : this.props.moves;
      return (
        <FlatList
          data={shownMoves}
          keyExtractor={(move, i) => i}
          renderItem={(move) => this.renderTableRow(move, this.props.onMovePress, this.props.isPortrait)}
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
