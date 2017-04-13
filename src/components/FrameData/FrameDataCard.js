import React from 'react';
import { View,
  Text,
  TouchableHighlight,
  Modal,
  ScrollView,
  StyleSheet } from 'react-native';

import Header1 from '../Header1/Header1';


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
            <Text style={Styles.cardText}>{this.props.notation}</Text>
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
          <Header1 title={'Reverse Special Stretch Bomb'}/>
          <Text style={Styles.modalText}>{this.props.notation}</Text>
          <Text style={Styles.modalText}>Damage: {this.props.damage}</Text>
          <Text style={Styles.modalText}>Speed: {this.props.speed}</Text>
          <Text style={Styles.modalText}>Hit Level: {this.props.hit_level}</Text>
          <Text style={Styles.modalText}>On Block: {this.props.on_block}</Text>
          <Text style={Styles.modalText}>On Hit: {this.props.on_hit}</Text>
          <Text style={Styles.modalText}>On Counter: {this.props.on_ch}</Text>
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
    paddingTop: 10
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
    flex: 1
  }
});
