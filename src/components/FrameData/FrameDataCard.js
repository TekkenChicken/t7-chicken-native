import React from 'react';
import { View,
  Text,
  TouchableHighlight,
  Modal,
  ScrollView,
  StyleSheet } from 'react-native';

import Header1 from '../Header1/Header1';
import PropertyList from '../PropertyList/PropertyList';
import Inputs from '../Inputs/Inputs';


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
        <View>
          <Text>Video goes here</Text>
        </View>
         <ScrollView>
           {/* TODO: make this name dynamic */}
          <Header1 title={'Reverse Special Stretch Bomb'}/>
          <Text style={Styles.notation}>{this.props.notation}</Text>
          {/* TODO: change the data so we get each input as an array element */}
          <Inputs isCard={false} inputs={['1', '2']}/>
          <PropertyList type={'special'} properties={['H', 'T']}/>
          <PropertyList type={'general'} damage={this.props.damage} hitLevels={this.props.hit_level} speed={this.props.speed}/>
          <PropertyList type={'frames'} onBlock={this.props.on_block} onHit={this.props.on_hit} onCounter={this.props.on_ch}/>
          <TouchableHighlight
           onPress={() => {
             this.setModalVisible(!this.state.modalVisible)
          }}>
          <Text style={Styles.close}>Close</Text>
          </TouchableHighlight>
         </ScrollView>
        </View>
       </Modal>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  container: {
    height: 100
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
  close: {
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    paddingTop: 5,
    height: 40,
    fontSize: 24,
  },
  modal: {
    marginTop: 22,
    paddingTop: 30,
    paddingBottom: 30,
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
  }
});
