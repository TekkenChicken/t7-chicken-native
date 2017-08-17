import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableHighlight,
    Modal,
    StyleSheet,
    Keyboard,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Inputs from '../../components/Inputs/Inputs';
import * as Colors from '../../style/vars/colors';

const redPrimary = '#9d1018';
const redSecondary = '#320f1c';

class LandscapeList extends Component {

    constructor() {
        super();
        this.state = {modalVisable: false}
    }
    setModalVisible = (visible) => {
        Keyboard.dismiss();
        this.setState({modalVisible: visible});
    }

    renderLandscapeList(moves) {
        return moves.map((move, i) => (
          <TouchableHighlight style={Styles.attack} onPress={() => this.setModalVisible(true)} key={i}>
              <View style={Styles.landscapeRow}>
                <View style={Styles.notationContainer}>
              {/*<Inputs style={Styles.input} isCard={true} inputs={move.notation}/>*/}
                  <Text style={Styles.notation}>{move.notation}</Text>
                </View>
                <Text style={Styles.landscapeMove}>{move.speed}</Text>
                <Text style={Styles.landscapeMove}>{move.on_block}</Text>
                <Text style={Styles.landscapeMove}>{move.on_ch}</Text>
                <Text style={Styles.landscapeMove}>{move.on_hit}</Text>
                <Text style={Styles.landscapeMove}>{move.hit_level}</Text>
                <Text style={Styles.landscapeMove}>{move.damage}</Text>
              </View>
          </TouchableHighlight>
        ))
      }
    render() {
        return (
        <View style={Styles.landscapeContainer}>
            {this.renderLandscapeList(this.props.moves)}
        </View>
        )
    }
}
export default LandscapeList;

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
  },
  input: {
  }
})