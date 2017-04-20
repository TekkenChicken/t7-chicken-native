import React, { Component } from 'react';

import { View,
  StyleSheet,
  Image,
  Text
} from 'react-native';

import inputImages from '../../img/inputs/index';

export default class Inputs extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderInputs = (inputs) => {
    return inputs.map((input, index) => {
      return (
        <Image style={this.props.isCard ? Styles.isCard : Styles.inputChild} source={inputImages[input]} key={index}/>
      );
    });
  }

  render() {
    return (
      <View style={Styles.inputContainer}>
        {this.renderInputs(this.props.inputs)}
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10
  },
  inputChild: {
    marginRight: 5,
    height: 24,
    width: 24
  },
  isCard: {
    height: 20,
    width: 20,
    marginTop: 5
  }
});
