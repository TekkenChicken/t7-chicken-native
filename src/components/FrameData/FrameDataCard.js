import React from 'react';
import { View, Text, TouchableHighlight, Modal, StyleSheet } from 'react-native';


export default class FrameDataCard extends React.Component {
  constructor() {
    super();
    this.state = {modalVisible: false}
  }

  setModalVisible = (visible) => {
    console.log(visible);
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          style={Styles.modal}
         animationType={"fade"}
         transparent={false}
         visible={this.state.modalVisible}
         onRequestClose={() => {alert("Modal has been closed.")}}
         >
        <View style={{marginTop: 22}}>
         <View>
           <Text>Hello World!</Text>

           <TouchableHighlight
             onPress={() => {
               this.setModalVisible(!this.state.modalVisible)
           }}>
             <Text>Hide Modal</Text>
           </TouchableHighlight>

         </View>
        </View>
       </Modal>

        <TouchableHighlight
          onPress={() => { this.setModalVisible(true) }}
          style={Styles.card}>
          <View>
            <Text style={Styles.text}>{this.props.notation}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  card: {
    height: 100,
    width: 75,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'blue',
    zIndex: -3
  },
  text: {
    textAlign: 'center',
    color: 'white'
  },
  modal: {
    zIndex: -2
  }
})
