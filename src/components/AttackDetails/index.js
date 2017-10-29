import React, { Component } from 'react';
import { connect } from 'react-redux';
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

import { previousAttack, nextAttack } from '../../redux/actions/attackDetails';

class AttackDetails extends Component {
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

    handlePreviousPress(index, allCharacterAttacks, setParams) {
        index--;
        const characterMove = allCharacterAttacks[index]
        this.props.previousAttack(characterMove, index)
        setParams({move: {...characterMove}})
    }

    handleNextPress(index, allCharacterAttacks, setParams) {
        index++;
        const characterMove = allCharacterAttacks[index]
        this.props.nextAttack(characterMove, index)
        setParams({move: {...characterMove}})
    }

    renderButtons(index, allCharacterAttacks, setParams) {
        const previousReference = allCharacterAttacks[index-1];
        const nextReference = allCharacterAttacks[index+1]

        if (previousReference && nextReference) {
            return (
                <View>
                  <Button title='Previous' onPress={() => this.handlePreviousPress(index, allCharacterAttacks, setParams)}  />
                  <Button title='Next' onPress={() => this.handleNextPress(index, allCharacterAttacks, setParams)} />
                </View>
            )
        }

        if (!previousReference) {
            return (
                <View>
                  <Button title='Next' onPress={() => this.handleNextPress(index, allCharacterAttacks, setParams)} />
                </View>
            )
        }

        if (!nextReference) {
            return (
                <View>
                  <Button title='Previous' onPress={() => this.handlePreviousPress(index, allCharacterAttacks, setParams)}  />
                </View>
            )
        }
    }

    render() {
        const { setParams } = this.props.navigation;
        const { character, index } = this.props;
        const selectedMove = this.props.selected;
        return (
            <LinearGradient
              start={{x: 3.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              colors={[Colors.redPrimary, Colors.redSecondary]}
              style={Styles.mainContainer}
            >
            <ScrollView style={{backgroundColor: 'transparent'}}>
              <PropertyList type={'special'} specProperties={selectedMove.notes}/>
              <PropertyList type={'general'} damage={selectedMove.damage} hitLevels={selectedMove.hit_level} />
              <PropertyList type={'frames'} onBlock={selectedMove.on_block} onHit={selectedMove.on_hit} onCounter={selectedMove.on_ch} speed={selectedMove.speed} />
            </ScrollView>
            {this.renderButtons(index, character, setParams)}
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

const mapStateToProps = state => {
    console.log('what is in state', state)
    return {
        character: state.character.data,
        selected: state.selectedAttack.selectedAttack.move,
        index: state.selectedAttack.selectedAttack.index,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        previousAttack: (move, index) =>  dispatch(previousAttack(move, index)),
        nextAttack:  (move, index) => dispatch(nextAttack(move, index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttackDetails);