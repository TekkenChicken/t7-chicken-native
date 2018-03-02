import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    ScrollView,
    Linking,
    WebView
} from 'react-native';

import Accordion from 'react-native-accordion';
import PropertyList from '../../components/PropertyList/PropertyList';
import Inputs from '../../components/Inputs/Inputs';
import Button from '../../components/Button/Button';
import { attackDetailsNavHeader } from '../../components/NavigationBar';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './styles';
import * as Colors from '../../style/vars/colors';

import { showAttackDetails } from '../../redux/actions/attackDetails';
import { redSecondary } from '../../style/vars/colors';

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
      //Linking.openURL(url);
      //Linking.openURL('https://gfycat.com/SeriousKeyBluebottle');
      return (
        <WebView style={{ flex: 1, height: 225 }} source={{ uri: 'https://gfycat.com/@offinbed/albums' }} />
      )
    }

    handleNavigateToNextMove(newMove, index) {
      this.props.dispatchNavigateToAttack(newMove, index);
      this.props.navigation.setParams({move: newMove});
    }

    renderMoveButton(direction, move, index) {
      const directionText = (direction === "previous") ? "Prev" : "Next";
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
        const webView = <WebView style={{ flex: 1, height: 400 }} source={{ uri: 'https://gfycat.com/@offinbed/albums' }} />

        return (
            <LinearGradient
              start={{x: 3.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              colors={[Colors.redPrimary, Colors.redSecondary]}
              style={Styles.mainContainer}
            >
            <Accordion
              header={<Text style={Styles.tempGifAlert}>Click Here To See Gif Progress!</Text>}
              content={webView}
              easing="easeOutCubic"
            />
            <ScrollView style={{backgroundColor: redSecondary}}>
              <Inputs isCard={false} inputs={selectedMove.notation} style={Styles.inputs} />
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
      character: state.character.filteredMoves,
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
