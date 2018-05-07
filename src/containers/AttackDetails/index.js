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

import TimerMixin from 'react-mixin';

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

import danny from '../../img/misc/danny.png';

const GifContainer = ({url, accordionExpanded}) => {

  const toggleContent = () => {

    if (!accordionExpanded && url !== 'null') {
      setTimeout(() => {
      }, 5000);
      return danny;
    }

    if (accordionExpanded && url === 'null') {
      return danny;
    }

    if (accordionExpanded && url !== 'null') {
      return { uri: url }
    }
  }

  return (
    <Image
       resizeMode={'contain'}
       style={toggleContent() === danny ? { flex: 1, height: 300, width: 420 } : { flex: 1, height: 300} }
       source={toggleContent()}
       loadingIndicatorSource={danny}
    />
  );
}

class AttackDetails extends Component {
    static navigationOptions = ({navigation}) => {
      const left = [{key: "BackButton", navigation: navigation}];
      const move = navigation.state.params.move.notation;
      return attackDetailsNavHeader(move, left)
    }

    constructor() {
      super();
      this.state = {
          accordionExpanded: false
      }
    }

    handleLink(url) {
      return (
        <Image style={{ flex: 1, height: 225 }} source={{ uri: 'https://gfycat.com/@offinbed/albums' }} />
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

    renderAccordionHeader = (preview_url) => {
      if(preview_url === 'null' || undefined) {
        return <Text style={Styles.tempGifAlert}>No Gif Available For This Attack</Text>
      }

      if(preview_url) {
        return <Text style={Styles.tempGifAlert}>Click Here To See The Gif!</Text>
      }
    }

    toggleAccordionExpanded = () => {
      this.setState({
        accordionExpanded: !this.state.accordionExpanded
      })
    }

    render() {
        const { setParams } = this.props.navigation;
        const { character, index, selectedMove } = this.props;

        return (
            <LinearGradient
              start={{x: 3.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
              colors={[Colors.redPrimary, Colors.redSecondary]}
              style={Styles.mainContainer}
            >
            <Accordion
              onPress={() => {this.toggleAccordionExpanded()}}
              expanded={this.state.accordionExpanded}
              header={this.renderAccordionHeader(selectedMove.preview_url)}
              content={<GifContainer url={selectedMove.preview_url} accordionExpanded={this.state.accordionExpanded} />}
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
