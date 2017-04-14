import React, { Component } from 'react';

import { View,
  Text,
  StyleSheet
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
        <SubtitleHeading subtitle={'Special Properties'}/>
        <View style={Styles.propertyRow}>
          <Text>{'Damage'}</Text>
          <Text>{this.props.damage}</Text>
        </View>
        <View style={Styles.propertyRow}>
          <Text>{'Hit Level(s)'}</Text>
          <Text>{this.props.hitLevels}</Text>
        </View>
        <View style={Styles.propertyRow}>
          <Text>{'Speed (Frames)'}</Text>
          <Text>{this.props.speed}</Text>
        </View>
      </View>
    );
  }

  renderGeneralProperties() {
    return (
      <View style={Styles.table}>
        <SubtitleHeading subtitle={'General Properties'}/>
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
        <SubtitleHeading subtitle={'Frame Properties'}/>
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
    color: '#f0aeb1'
  },
  propertyValue: {
    paddingLeft: 10,
    color: 'white'
  }
});
