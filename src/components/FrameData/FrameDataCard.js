import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Modal,
  ScrollView,
  StyleSheet
} from 'react-native';

import FrameHeader from './FrameHeader';
import PropertyList from '../PropertyList/PropertyList';
import Inputs from '../Inputs/Inputs';
import Button from '../Button/Button';

import icons from '../../img/icons/';


export default class FrameDataCard extends React.Component {
  constructor() {
    super();
    this.state = {modalVisible: false}
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={Styles.container}>
        <TouchableHighlight
          onPress={() => { this.setModalVisible(true) }}
          style={Styles.card}>
          <View>
            <Text style={Styles.cardText}>move name</Text>
            <Text style={Styles.cardNotation}>{this.props.notation}</Text>
            {/* TODO: change the data so we get each input as an array element */}
            <Inputs isCard={true} inputs={['1', '1']}/>
          </View>
        </TouchableHighlight>

        <Modal
         animationType={"slide"}
         transparent={false}
         visible={this.state.modalVisible}
         onRequestClose={() => {alert("Modal has been closed.")}}
         >
          <View style={Styles.modal}>
            <View style={Styles.videoContainer}>
              <Text style={Styles.videoText}>Gifs Coming Soon!</Text>
            </View>
            <ScrollView>
               {/* TODO: make this name dynamic */}
              <FrameHeader title={'Move Name'}/>
              <Text style={Styles.notation}>{this.props.notation}</Text>
              {/* TODO: change the data so we get each input as an array element */}
              <Inputs isCard={false} inputs={['1', '2']}/>
              {/* TODO: get attack properties from data source */}
              <PropertyList type={'special'} properties={['H', 'T']}/>
              <PropertyList type={'general'} damage={this.props.damage} hitLevels={this.props.hit_level} speed={this.props.speed}/>
              <PropertyList type={'frames'} onBlock={this.props.on_block} onHit={this.props.on_hit} onCounter={this.props.on_ch}/>
            </ScrollView>
          </View>
          <Button
            onPress={() => this.setModalVisible(!this.state.modalVisible)}
            buttonStyle={Styles.closeButton}
          >
            <Image source={icons['close']} style={Styles.closeButtonIcon}/>
          </Button>
        </Modal>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    height: 100
  },
  videoText: {
    textAlign: 'center',
    fontSize: 32,
    paddingTop: 30,
    color: 'white'
  },
  card: {
    height: 95,
    width: 120,
    zIndex: -3,
		backgroundColor: 'rgb(65, 18, 18)',
  },
  moveName: {
    color: 'white',
    fontWeight: 'bold'
  },
  cardText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 10,
    fontFamily: 'Exo2-Light'
  },
  cardNotation: {
    color: 'white',
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 15,
    fontFamily: 'Exo2-Regular'
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
    right: 15
  },
  closeButtonIcon: {
    height: 12,
    width: 12
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgb(132, 18, 18)',
  },
  notation: {
    color: 'white',
    fontSize: 24,
    marginTop: 10,
    marginBottom: 5,
    paddingLeft: 35,
    fontFamily: 'Exo2-Regular'
  },
  videoContainer: {
    backgroundColor: '#111',
    minHeight: 120
  }
});
