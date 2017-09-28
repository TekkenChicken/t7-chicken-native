import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  Modal,
  StyleSheet,
  Keyboard,
} from 'react-native';

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
        <View>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </View>
      )
    }

    render() {
      const { moves } = this.props;

      return (
        <View style={Styles.landscapeContainer}>
          <Header />
          {
            moves.map((move) =>
              <Row move={move} />
            )
          }
        </View>
      )
    }

}

const redPrimary = '#9d1018';
const redSecondary = '#320f1c';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 7,
    marginBottom: 80
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
