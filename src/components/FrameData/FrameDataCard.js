import React from 'react';
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


export default class FrameDataCard extends React.Component {
  constructor() {
    super();
    this.state = {modalVisible: false}
  }

  setModalVisible = (visible) => {
    Keyboard.dismiss();
    this.setState({modalVisible: visible});
  }

  render() {
    const emptyCard = (this.props.notation == null);
    const containerStyle = (emptyCard) ? [Styles.container, Styles.empty] : Styles.container;
    const touchEvent = (emptyCard) ? 'none' : 'auto';
    return (
      <LinearGradient
        start={{x: 3.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
        colors={[Colors.redPrimary, Colors.redSecondary]}
        style={containerStyle} 
        pointerEvents={touchEvent}
      >
        <TouchableHighlight
          onPress={() => { this.setModalVisible(true) }}
          style={Styles.card}>
          <View style={Styles.cardContainer}>
            <Text style={Styles.cardNotation}>{this.props.notation}</Text>
            <Inputs isCard={true} inputs={this.props.notation}/>
          </View>
        </TouchableHighlight>

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setModalVisible(!this.state.modalVisible)}
         >
          <View style={Styles.videoContainer}>
            <Text style={Styles.videoText}>Gifs Coming Soon!</Text>
          </View>
          <LinearGradient
            colors={[Colors.redPrimary, Colors.redSecondary]}
            start={{x: 1.0, y: 0.9}} end={{x: 0.5, y: 0.1}}
            style={Styles.modal}
            >
            <ScrollView>
              <View style={Styles.modalHeader}>
                <Text style={Styles.modalNotation}>{this.props.notation}</Text>
                <Inputs isCard={false} inputs={this.props.notation}/>
              </View>
              <PropertyList type={'special'} specProperties={this.props.notes}/>
              <PropertyList type={'general'} damage={this.props.damage} hitLevels={this.props.hit_level} />
              <PropertyList type={'frames'} onBlock={this.props.on_block} onHit={this.props.on_hit} onCounter={this.props.on_ch} speed={this.props.speed} />
            </ScrollView>
          </LinearGradient>
          <TouchableHighlight
            onPress={() => this.setModalVisible(!this.state.modalVisible)}
            style={Styles.closeButton}>
            <Image source={icons['close']} style={Styles.closeButtonIcon}/>
          </TouchableHighlight>
        </Modal>
      </LinearGradient>
    )
  }
}

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
