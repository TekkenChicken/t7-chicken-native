import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    ScrollView,
    StyleSheet
} from 'react-native';

import PropertyList from '../PropertyList/PropertyList';
import Inputs from '../Inputs/Inputs';
import Button from '../Button/Button';
import { attackDetailsNavHeader } from '../NavigationBar';
import LinearGradient from 'react-native-linear-gradient';

import * as Colors from '../../style/vars/colors';

import icons from '../../img/icons/';

const redPrimary = '#9d1918';
const redSecondary = '#320f1c';


export default class AttackDetails extends Component {
    static navigationOptions = ({navigation}) => {
        const left = [{key: "BackButton", navigation: navigation}];
        const move = navigation.state.params.move.notation;
        return attackDetailsNavHeader(move, left)
}
    constructor() {
        super();
        this.state = {
            gifDisplayOn: false
        }
    }
    render() {
        const { move } = this.props.navigation.state.params;
        return (
            <LinearGradient
              start={{x: 3.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              colors={[Colors.redPrimary, Colors.redSecondary]}
            >
            <ScrollView style={{backgroundColor: 'transparent'}}>
              <PropertyList type={'special'} specProperties={move.notes}/>
              <PropertyList type={'general'} damage={move.damage} hitLevels={move.hit_level} />
              <PropertyList type={'frames'} onBlock={move.on_block} onHit={move.on_hit} onCounter={move.on_ch} speed={move.speed} />
            </ScrollView>
          </LinearGradient>
        )
    }
}

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    notation: {
        backgroundColor: 'transparent',
        color: 'white'
    }
})