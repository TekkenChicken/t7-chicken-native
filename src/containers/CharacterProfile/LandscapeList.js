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

export default class LandscapeList extends Component {
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
          <View style={Styles.landscapeContainer} key={i}>
            <Text style={Styles.notation}>{move.notation}</Text>
            <Text style={Styles.landscapeMove}>{move.speed}</Text>
            <Text style={Styles.landscapeMove}>{move.on_block}</Text>
            <Text style={Styles.landscapeMove}>{move.on_ch}</Text>
            <Text style={Styles.landscapeMove}>{move.on_hit}</Text>
            <Text style={Styles.landscapeMove}>{move.hit_level}</Text>
            <Text style={Styles.landscapeMove}>{move.damage}</Text>
          </View>
        ))
      }
    render() {
        console.log('this runs');
        return (
        <View>
            {this.renderLandscapeList(this.props.moves)}
        </View>
        )
    }
}