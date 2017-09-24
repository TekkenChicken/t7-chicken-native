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
    alignItems: 'flex-start',
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 12,
    paddingBottom: 10
  },
  inputChild: {
    marginLeft: 2,
    marginRight: 2,
    height: 24,
    width: 24
  },
  isCard: {
    height: 20,
    width: 20,
    marginRight: 5,
    marginTop: 1
  },
  text: {
    opacity: 0.8,
    marginRight: 3,
    fontWeight: '500',
    fontSize: 14
  }
});
