import React, { Component } from 'react';

import { View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import SubtitleHeading from '../SubtitleHeading/SubtitleHeading';

export default class PropertyList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  determineType() {
    switch(this.props.type) {
    case 'special':
      return this.renderSpecialProperties();
      break;
    case 'general':
      return this.renderGeneralProperties();
      break;
    case 'frames':
      return this.renderFrameProperties();
      break;
    default:
      break;
    }
  }

  renderSpecialProperties() {
    return (
      <View style={Styles.table}>
        <SubtitleHeading subtitle={'Special Properties'.toUpperCase()}/>
        {/* TODO: determine logic to display properties in relation to data */}
        <View style={Styles.propertyRow}>
          <Image></Image>
          <Text style={Styles.propertyValue}>{'Rage Art'}</Text>
        </View>
        <View style={Styles.propertyRow}>
          <Image/>
          <Text style={Styles.propertyValue}>{'Rage Drive'}</Text>
        </View>
        <View style={Styles.propertyRow}>
          <Image/>
          <Text style={Styles.propertyValue}>{'Homing'}</Text>
        </View>
        <View style={Styles.propertyRow}>
          <Image/>
          <Text style={Styles.propertyValue}>{'Tailspin'}</Text>
        </View>
      </View>
    );
  }

  renderGeneralProperties() {
    return (
      <View style={Styles.table}>
        <SubtitleHeading subtitle={'General Properties'.toUpperCase()}/>
        <View style={Styles.propertyRow}>
          <Text style={Styles.property}>{'Damage'}</Text>
          <Text style={Styles.propertyValue}>{this.props.damage}</Text>
        </View>
        <View style={Styles.propertyRow}>
          <Text style={Styles.property}>{'Hit Level(s)'}</Text>
          <Text style={Styles.propertyValue}>{this.props.hitLevels}</Text>
        </View>
        <View style={Styles.propertyRow}>
          <Text style={Styles.property}>{'Speed'}</Text>
          <Text style={Styles.propertyValue}>{this.props.speed}</Text>
        </View>
      </View>
    );
  }

  renderFrameProperties() {
    return (
      <View style={Styles.table}>
        <SubtitleHeading subtitle={'Frame Properties'.toUpperCase()}/>
        <View style={Styles.propertyRow}>
          <Text style={Styles.property}>{'On Block'}</Text>
          <Text style={Styles.propertyValue}>{this.props.onBlock}</Text>
        </View>
        <View style={Styles.propertyRow}>
          <Text style={Styles.property}>{'On Hit'}</Text>
          <Text style={Styles.propertyValue}>{this.props.onHit}</Text>
        </View>
        <View style={Styles.propertyRow}>
          <Text style={Styles.property}>{'Counter Hit'}</Text>
          <Text style={Styles.propertyValue}>{this.props.onCounter}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View>
        {this.determineType()}
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  table: {
    marginTop: 20
  },
  propertyRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomColor: '#f0aeb1',
    borderBottomWidth: 1
  },
  property: {
    textAlign: 'right',
    color: '#f0aeb1',
    fontFamily: 'Exo2-Light'
  },
  propertyValue: {
    paddingLeft: 10,
    color: 'white',
    fontFamily: 'Exo2-Light'
  }
});
