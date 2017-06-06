import React, { Component } from 'react';

import { View,
  StyleSheet,
  Image
} from 'react-native';

import CustomText from '../CustomText/CustomText';

import inputImages from '../../img/inputs/index';
import InputParser from './inputParser';

export default class Inputs extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderInputs(inputs) {
    return inputs.map((input, index) => {
      if (inputImages[input]) {
        return (
          <Image style={this.props.isCard ? Styles.isCard : Styles.inputChild}
            source={inputImages[input]}
            key={index}/>
        );
      } else {
        return (
          <CustomText
            textStyle={Styles.text}
            key={index}>
            {input}
          </CustomText>
        )
      }
    });
  }

  render() {
    const inputArray = (this.props.inputs) ? InputParser.parseInputFromString(this.props.inputs) : [];
    return (
      <View style={Styles.inputContainer}>
        {this.renderInputs(inputArray)}
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "transparent",
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
    paddingTop: 18,
    paddingBottom: 13
  },
  inputChild: {
    marginLeft: 2,
    marginRight: 5,
    height: 24,
    width: 24
  },
  isCard: {
    height: 20,
    width: 20,
    marginTop: 5
  },
  text: {
    marginRight: 1,
    lineHeight: 20,
    fontWeight: '500',
    fontSize: 16
  }
});
