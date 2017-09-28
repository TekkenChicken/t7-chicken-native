import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Modal,
    StyleSheet,
} from 'react-native';
import Inputs from '../../components/Inputs/Inputs';

class Row extends Component {
    constructor() {
        super();
        this.state = {modalVisable: false}
    }

    render() {
      const { notation, speed, on_block, on_ch, on_hit, hit_level, damage } = this.props.move;
      return (
        <TouchableHighlight 
          style={Styles.attack} 
          onPress={() => this.props.clickHandler()} 
          key={i}>
          <View style={Styles.landscapeRow}>
            <View style={Styles.notationContainer}>
              <Text style={Styles.notation}>{notation}</Text>
            </View>
            <Text style={Styles.landscapeMove}>{speed}</Text>
            <Text style={Styles.landscapeMove}>{on_block}</Text>
            <Text style={Styles.landscapeMove}>{on_ch}</Text>
            <Text style={Styles.landscapeMove}>{on_hit}</Text>
            <Text style={Styles.landscapeMove}>{hit_level}</Text>
            <Text style={Styles.landscapeMove}>{damage}</Text>
          </View>
        </TouchableHighlight>
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
  },
  input: {
  }
});

Row.propTypes = {
  move: PropTypes.object,
  clickHandler: PropTypes.func
};

export default Row;
