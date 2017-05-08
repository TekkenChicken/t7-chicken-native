import React, { Component }  from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight
} from 'react-native';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);

  }
  hideSearch = () => {
    console.log('Search hidden');
  }
  render() {
    return (
      <View style={Styles.mainContainer}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#f0aa23"
          style={Styles.input}
        />
        <TouchableHighlight
          onPress={this.props.toggle}>
          <Image style={Styles.close} source={require('./../../img/icons/close.png')}/>
        </TouchableHighlight>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 55,
		backgroundColor: 'black',
    paddingTop: 10,
    paddingLeft: 60
  },
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    color: '#f0aa23',
    paddingLeft: 10,
    width: 270,
    height: 35,
    backgroundColor: 'rgba(50,50,50, 0.5)',
    borderRadius: 10
  },
  close: {
    width: 20,
    height: 20,
    marginTop: 10,
    marginLeft: 10
  }
});
