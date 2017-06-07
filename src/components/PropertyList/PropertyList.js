import React, { Component, PropTypes } from 'react';

import { View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import SubtitleHeading from '../SubtitleHeading/SubtitleHeading';

import icons from '../../img/icons/';

class PropertyList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderPropertiesForType(type) {
    switch(type) {
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
    const specProps = this.props.specProperties.split(',');
    return (
      <View style={Styles.table}>
        <SubtitleHeading subtitle={'Special Properties'.toUpperCase()}/>
        {
          specProps.map((prop, key) => {
            return ( (prop !== 'null') ?
              (<View style={Styles.propertyRow} key={key}>
                  <Image
                    style={Styles.propertyIcon}
                    source={icons[prop.replace(/\s/g, '').toLowerCase()]} />
                  <Text style={Styles.propertyValue}>{prop}</Text>
                </View>)
              : null
            )
          })
        }
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
        <View style={Styles.propertyRow}>
          <Text style={Styles.property}>{'Speed'}</Text>
          <Text style={Styles.propertyValue}>{this.props.speed}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View>
        {this.renderPropertiesForType(this.props.type)}
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  table: {
    marginTop: 20
  },
  propertyRow: {
    backgroundColor: "transparent",
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 8,
    paddingBottom: 5,
    borderBottomColor: 'rgba(228, 83, 90, 0.6)',
    borderBottomWidth: .5
  },
  property: {
    flex: 0.5,
    paddingLeft: 15,
    color: '#f0aeb1',
    fontFamily: 'Exo2-Light',
    fontWeight: '400'
  },
  propertyValue: {
    flex: 0.5,
    paddingLeft: 10,
    color: 'white',
    fontSize: 15,
    fontFamily: 'Exo2-Light'
  },
  propertyIcon: {
    resizeMode: 'contain',
    marginLeft: 15,
    height: 20,
    width: 24
  }
});

PropertyList.proptypes = {
  type: PropTypes.string,
  // special
  specProperties: PropTypes.string,
  // general
  damage: PropTypes.string,
  hitLevels: PropTypes.string,
  // frame
  onBlock: PropTypes.string,
  onHit: PropTypes.string,
  onCounter: PropTypes.string,
  speed: PropTypes.string
}

export default PropertyList;
