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
      switch (input) {
        // TODO: fix up missing image sources
        case '1':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} source={inputImages.one} key={index}></Image>
          );
          break;
        case '2':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} source={inputImages.two} key={index}></Image>
          );
          break;
        case '3':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} source={inputImages.three} key={index}></Image>
          );
          break;
        case '4':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} source={inputImages.four} key={index}></Image>
          );
          break;
        case '1+2':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} source={inputImages.oneplustwo} key={index}></Image>
          );
          break;
        case '1+3':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} key={index}>{'missing'}</Image>
          );
          break;
        case '1+4':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} source={inputImages.oneplusfour} key={index}></Image>
          );
          break;
        case '1+2+3':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} source={inputImages.oneplustwoplusthree} key={index}></Image>
          );
          break;
        case '1+2+4':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} source={inputImages.oneplustwoplusfour} key={index}></Image>
          );
          break;
        case '1+2+3+4':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} source={inputImages.oneplustwoplusthreeplusfour} key={index}></Image>
          );
          break;
        case '2+4':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} key={index}>{'missing'}</Image>
          );
          break;
        case '3+4':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} source={inputImages.threeplusfour} key={index}></Image>
          );
          break;
        case 'u':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} source={inputImages.u} key={index}></Image>
          );
          break;
        case 'd':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} source={inputImages.d} key={index}></Image>
          );
          break;
        case 'b':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} source={inputImages.b} key={index}></Image>
          );
          break;
        case 'f':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} source={inputImages.f} key={index}></Image>
          );
          break;
        case 'u/f':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} source={inputImages.uf} key={index}></Image>
          );
          break;
        case 'd/f':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} source={inputImages.df} key={index}></Image>
          );
          break;
        case 'd/b':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} key={index}>{inputImages.db}</Image>
          );
          break;
        case 'u/b':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} key={index}>{inputImages.ub}</Image>
          );
          break;
        case 'n':
          return (
            <Image style={Styles.inputChild, this.props.isCard ? Styles.isCard : null} key={index}>{'missing'}</Image>
          );
          break;
          // TODO: add cases for WR/WS/CH/FC/Stances
        default:
          break;
      }
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
    marginRight: 5
  },
  isCard: {
    height: 20,
    width: 20,
    marginTop: 5
  }
});
