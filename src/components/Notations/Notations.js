import React, { Component } from 'react';

import { View,
  StyleSheet,
  Image
} from 'react-native';

export default class Notations extends Component {
  constructor() {
    super();
    this.state = {}
  }

  renderInputs = (inputs) => {
    return inputs.map((input) => {
      return switch (input) {
        case '1':
          return (
            <Image></Image>
          );
          break;
        case '2':
          return (
            <Image></Image>
          );
          break;
        case '3':
          return (
            <Image></Image>
          );
          break;
        case '4':
          return (
            <Image></Image>
          );
          break;
        case '1+2':
          return (
            <Image></Image>
          );
          break;
        case '1+3':
          return (
            <Image></Image>
          );
          break;
        case '1+4':
          return (
            <Image></Image>
          );
          break;
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
