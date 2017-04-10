import React, { Component, PropTypes } from 'react';

// dependencies
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { Router } from '../Router';

class CharacterCard extends Component {

  render() {
    const {image, name, id, onPressHandler} = this.props;

    return (
      <View style={Styles.card}>
        <TouchableHighlight onPress={() => onPressHandler(name)}>
          <View>
            <Image
              style={Styles.image}
              source={{uri: this.props.image}}
            />
            <Text style={Styles.text}>{this.props.name.toUpperCase()}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  card: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 20
  },
  image: {
    alignSelf: 'stretch',
    marginBottom: 8,
    height: 110,
    backgroundColor: '#eee',
    resizeMode: 'contain'
  },
  text: {
    position: 'absolute',
    alignSelf: 'center',
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: "500"
  }
});

CharacterCard.Proptypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  onPressHandler: PropTypes.func
};

export default CharacterCard;
