import React, { Component } from 'react';

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

    renderTableRows(moves, navigation) {
      return moves.map((move, i) =>
        <FrameDataRow navigation={navigation} move={move} key={i} rowIndex={i} />
      );
    }

    render() {
      const { moves } = this.props;

      return (
        <View>
          {this.renderTableRows(moves, this.props.navigation)}
        </View>
      )
    }

}

export default Spreadsheet;
