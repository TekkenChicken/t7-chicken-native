import React from 'react';
import { View, Text, TouchableHighlight, Modal, StyleSheet } from 'react-native';


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
            <Text style={Styles.cardText}>{this.props.notation}</Text>
          </View>
        </TouchableHighlight>

        <Modal
         animationType={"none"}
         transparent={false}
         visible={this.state.modalVisible}
         onRequestClose={() => {alert("Modal has been closed.")}}
         >
        <View style={Styles.modal}>
         <View>
           <View>
             <Text style={Styles.characterName}>{(this.props.name) ? this.props.name.toUpperCase() : ""}</Text>
             <Text style={Styles.modalText}>{this.props.notation}</Text>
             <Text style={Styles.modalText}>Damage: {this.props.damage}</Text>
             <Text style={Styles.modalText}>Speed: {this.props.speed}</Text>
             <Text style={Styles.modalText}>Hit Level: {this.props.hitLevel}</Text>
             <Text style={Styles.modalText}>On Block: {this.props.onBlock}</Text>
             <Text style={Styles.modalText}>On Hit: {this.props.onHit}</Text>
             <Text style={Styles.modalText}>On Counter: {this.props.onCh}</Text>
           </View>
           <TouchableHighlight
             onPress={() => {
               this.setModalVisible(!this.state.modalVisible)
           }}>
           <Text style={Styles.close}>Close</Text>
           </TouchableHighlight>
         </View>
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
    height: 100,
    borderColor: 'black',
    borderWidth: 1,
    zIndex: -3
  },
  cardText: {
    textAlign: 'center'
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
    paddingLeft: 10,
    paddingBottom: 30,
    flex: 1,
    alignItems: 'center'
  }
})
