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
// spread sheet display config
import orderConfig from './config';

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
        <View style={cellStyles.row}>
          {
            orderConfig.map((moveProp, i) => {
              return (
                <View style={[cellStyles.headerCell, cellStyles[moveProp.key], cellStyles[moveProp.key + '_header']]} key={i}>
                  <CustomText textStyle={cellStyles.headerText}>
                    {moveProp.label}
                  </CustomText>
                </View>
              );
            })
          }
        </View>
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

const redPrimary = '#9d1018';
const redSecondary = '#320f1c';

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'transparent'
  },
  attack: {
    height: 70,
  },
  row: {
    flexDirection:'row',
    alignItems: 'flex-start'
  },
  landscapeRow: {
    backgroundColor: 'transparent',
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  notation: {
    paddingLeft: 10,
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
  },
  notationContainer: {
    flex: 1,
    height: 20,
    width: 20,
  }
});

export default Spreadsheet;
