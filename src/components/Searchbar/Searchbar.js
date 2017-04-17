import React, { Component }  from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button
} from 'react-native';


export default class SearchBar extends Component {
  hideSearch() {
    console.log('Search cleared');
  }
  render() {
    return (
      <View style={Styles.mainContainer}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#f0aa23"
          style={Styles.input} />
      <Button
        onPress={this.hideSearch}
        title="X">
      </Button>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 55,
    marginTop: 20,
    paddingTop: 7,
    paddingLeft: 20,
		backgroundColor: 'black',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    color: '#f0aa23',
    paddingLeft: 10,
    width: 300,
    height: 40,
    backgroundColor: 'rgba(50,50,50, 0.5)',
    borderRadius: 10
  }
});
