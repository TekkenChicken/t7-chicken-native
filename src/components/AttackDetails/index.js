import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    ScrollView,
    Linking
} from 'react-native';

import PropertyList from '../PropertyList/PropertyList';
import Inputs from '../Inputs/Inputs';
import Button from '../Button/Button';
import { attackDetailsNavHeader } from '../NavigationBar';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './styles';
import * as Colors from '../../style/vars/colors';

import icons from '../../img/icons/';

import { showAttackDetails } from '../../redux/actions/attackDetails';

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

    handleLink(url) {
      Linking.openURL(url);
    }

    handleNavigateToNextMove(newMove, index) {
      this.props.dispatchNavigateToAttack(newMove, index);
      this.props.navigation.setParams({move: newMove});
    }

    renderMoveButton(direction, move, index) {
      const directionText = (direction === "previous") ? "Previous Move" : "Next Move";
      const directionStyle = (direction === "previous") ? Styles.previousButton : Styles.nextButton;
      return (
        <Button
          onPress={() => this.handleNavigateToNextMove(move, index)}
          titleStyle={[Styles.moveButton, directionStyle]}
          title={directionText}
        />
      );
    }

    renderNavigateMovesButtons(index, allCharacterAttacks) {
        const prevMove = allCharacterAttacks[index-1];
        const nextMove = allCharacterAttacks[index+1];
        const previousButton = (prevMove) ? this.renderMoveButton("previous", prevMove, index-1) : <View />;
        const nextButton = (nextMove) ? this.renderMoveButton("next", nextMove, index+1) : <View/>;
        return (
          <View style={Styles.buttonContainer}>
            {previousButton}
            {nextButton}
          </View>
        );
    }

    render() {
        const { setParams } = this.props.navigation;
        const { character, index } = this.props;
        const selectedMove = this.props.selectedMove;
        return (
            <LinearGradient
              start={{x: 3.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              colors={[Colors.redPrimary, Colors.redSecondary]}
              style={Styles.mainContainer}
            >
            <Text style={Styles.tempGifAlert}
              onPress={()=> this.handleLink('https://gfycat.com/@offinbed/albums')}>
                Check the progress of the gifs here!
            </Text>
            <ScrollView style={{backgroundColor: 'transparent'}}>
              <Inputs isCard={false} inputs={selectedMove.notation} style={{justifyContent: 'center'}} />
              <PropertyList type={'special'} specProperties={selectedMove.notes}/>
              <PropertyList type={'general'} damage={selectedMove.damage} hitLevels={selectedMove.hit_level} />
              <PropertyList type={'frames'} onBlock={selectedMove.on_block} onHit={selectedMove.on_hit} onCounter={selectedMove.on_ch} speed={selectedMove.speed} />
            </ScrollView>
            {this.renderNavigateMovesButtons(index, character)}
          </LinearGradient>
        )
    }
}


const mapStateToProps = state => {
    return {
      character: state.character.data,
      selectedMove: state.attackDetails.move,
      index: state.attackDetails.index,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      dispatchNavigateToAttack: (move, index) =>  dispatch(showAttackDetails(move, index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttackDetails);
