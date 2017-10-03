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
import FrameDataRow from './frameDataRow';

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
        <FrameDataRow header={true} />
      )
    }

    renderTableRows(moves) {
      return moves.map((move, i) =>
        <FrameDataRow move={move} key={i} />
      );
    }

    render() {
      const { moves } = this.props;

      return (
        <View style={Styles.container}>
          {this.renderTableHeader()}
          {this.renderTableRows(moves)}
        </View>
      )
    }

}

export default Spreadsheet;
