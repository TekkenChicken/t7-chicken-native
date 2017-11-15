import React, { Component } from 'react';

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

    renderTableHeader() {
      return (
        <FrameDataRow navigation={this.props.navigation} header={true} />
      )
    }

    renderTableRows(moves, navigation) {
      return moves.map((move, i) =>
        <FrameDataRow move={move} key={i} rowIndex={i} />
      );
    }

    render() {
      // will be empty on intial load so that rendered Table does not
      const shownMoves = (this.state.initialLoad) ? [] : moves;
      return (
        <View>
          {this.renderTableRows(this.props.moves, this.props.navigation)}
        </View>
      )
    }

}

export default Spreadsheet;
