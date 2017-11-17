import React, {PropTypes} from 'react';
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


class FrameDataCard extends React.Component {
  constructor() {
    super();
    this.state = {modalVisible: false}
  }

  render() {
    const emptyCard = (this.props.move.notation == null);
    const containerStyle = (emptyCard) ? [Styles.container, Styles.empty] : Styles.container;
    const touchEvent = (emptyCard) ? 'none' : 'auto';
    const characterMoves = this.props.character;
    return (
      <View
        style={containerStyle}
        pointerEvents={touchEvent}>
        <TouchableHighlight
          onPress={() => this.props.onPressHandler()}
          style={Styles.card}>
          <View style={Styles.cardContainer}>
            <Text style={Styles.cardNotation}>{this.props.move.notation}</Text>
            <Inputs isCard={true} inputs={this.props.move.notation}/>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}


// Props
FrameDataCard.propTypes = {
  move: PropTypes.object,
  moveIndex: PropTypes.number,
  navigation: PropTypes.object,
  onPressHandler: PropTypes.func
};

export default FrameDataCard;

const Styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingBottom: 10,
    paddingRight: 10,
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#5b1a21'
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
    fontSize: 15
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
