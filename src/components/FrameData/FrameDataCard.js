import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Modal,
  ScrollView,
  StyleSheet,
  Keyboard
} from 'react-native';

import PropertyList from '../PropertyList/PropertyList';
import Inputs from '../Inputs/Inputs';
import Button from '../Button/Button';
import LinearGradient from 'react-native-linear-gradient';

import * as Colors from '../../style/vars/colors';

import icons from '../../img/icons/';

import { showAttackDetails } from '../../redux/actions/attackDetails';


class FrameDataCard extends React.Component {
  constructor() {
    super();
    this.state = {modalVisible: false}
  }

  setModalVisible = (visible) => {
    Keyboard.dismiss();
    this.setState({modalVisible: visible});
  }

  navigateToAttackDetails(move, index) {
    Keyboard.dismiss();
    this.props.showAttackDetails(move, index)
    this.props.navigation.navigate('attackDetails',  { move, index} );
  }

  indexFinder(charData, move) {
    let indexValue = null;
    charData.forEach((attack, i) => {
        if(attack.notation == move.notation) {
            return indexValue = i;
        }
    })
    return indexValue;
}

  render() {
    const emptyCard = (this.props.notation == null);
    const containerStyle = (emptyCard) ? [Styles.container, Styles.empty] : Styles.container;
    const touchEvent = (emptyCard) ? 'none' : 'auto';
    const characterMoves = this.props.character;
    const moveIndex = this.indexFinder(characterMoves, this.props);
    return (
      <LinearGradient
        start={{x: 3.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
        colors={[Colors.redPrimary, Colors.redSecondary]}
        style={containerStyle} 
        pointerEvents={touchEvent}
      >
        <TouchableHighlight
          onPress={() => { this.navigateToAttackDetails(characterMoves[moveIndex], moveIndex) }}
          style={Styles.card}>
          <View style={Styles.cardContainer}>
            <Text style={Styles.cardNotation}>{this.props.notation}</Text>
            <Inputs isCard={true} inputs={this.props.notation}/>
          </View>
        </TouchableHighlight>
      </LinearGradient>
    )
  }
}

const mapStateToProps = state => {
  return {
      character: state.character.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showAttackDetails: (move, index) =>  dispatch(showAttackDetails(move, index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FrameDataCard);

const Styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingBottom: 10,
    paddingRight: 10,
    marginBottom: 2
  },
  card: {
    height: 'auto',
  },
  empty: {
    opacity: 0
  },
  moveName: {
    color: 'white',
    fontWeight: 'bold'
  },
  cardNotation: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Exo2-Regular',
    fontSize: 16
  },
  cardContainer: {
    flex: 1,
  },
  modalText: {
    fontSize: 16
  },
  characterName: {
    fontSize: 16,
    textAlign: 'center'
  },
  closeButton: {
    position: 'absolute',
    top: 30,
    right: 15,
    padding: 5,
    backgroundColor: 'rgb(65, 18, 18)'
  },
  closeButtonIcon: {
    height: 12,
    width: 12,
    marginTop: 0
  },
  modal: {
    flex: 1,
  },
  modalHeader: {
    paddingLeft: 20
  },
  modalNotation: {
    backgroundColor: "transparent",
    color: 'white',
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Exo2-Regular'
  },
  videoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
    minHeight: 130
  },
  videoText: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 30,
    color: 'white',
    opacity: 0.5
  }
});
