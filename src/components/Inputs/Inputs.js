import React, { Component } from 'react';

import { View,
  StyleSheet,
  Image
} from 'react-native';

import inputs from '../../img/inputs/index';

export default class Inputs extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderInputs = (inputs) => {
    return inputs.map((input, index) => {
      switch (input) {
        // TODO: add image sources here
        case '1':
          return (
            <Image key={index}></Image>
          );
          break;
        case '2':
          return (
            <Image key={index}></Image>
          );
          break;
        case '3':
          return (
            <Image key={index}></Image>
          );
          break;
        case '4':
          return (
            <Image key={index}></Image>
          );
          break;
        case '1+2':
          return (
            <Image key={index}></Image>
          );
          break;
        case '1+3':
          return (
            <Image key={index}></Image>
          );
          break;
        case '1+4':
          return (
            <Image key={index}></Image>
          );
          break;
        case '1+2+3':
          return (
            <Image key={index}></Image>
          );
          break;
        case '1+2+4':
          return (
            <Image key={index}></Image>
          );
          break;
        case '1+2+3+4':
          return (
            <Image key={index}></Image>
          );
          break;
        case '2+4':
          return (
            <Image></Image>
          );
          break;
        case '3+4':
          return (
            <Image key={index}></Image>
          );
          break;
        case 'u':
          return (
            <Image key={index}></Image>
          );
          break;
        case 'd':
          return (
            <Image key={index}></Image>
          );
          break;
        case 'b':
          return (
            <Image key={index}></Image>
          );
          break;
        case 'f':
          return (
            <Image key={index}></Image>
          );
          break;
        case 'u/f':
          return (
            <Image key={index}></Image>
          );
          break;
        case 'd/f':
          return (
            <Image key={index}></Image>
          );
          break;
        case 'd/b':
          return (
            <Image key={index}></Image>
          );
          break;
        case 'u/b':
          return (
            <Image key={index}></Image>
          );
          break;
        case 'n':
          return (
            <Image key={index}></Image>
          );
          break;
          // TODO: add cases for WR/WS/CH/FC/Stances
        default:
          break;
      }
    })
  }

  render() {
    return (
      <View>
        {this.renderInputs(this.props.inputs)}
      </View>
    )
  }
}

const Styles = StyleSheet.create({

});
