import React, { Component, PropTypes } from 'react';

// dependencies
import { View, Text, Image, TouchableHighlight, StyleSheet, Platform } from 'react-native';
import { Router } from '../Router';

// components
import CustomText from '../../components/CustomText/CustomText';

// images
import headshots from '../../img/headshots/index';

class CharacterCard extends Component {

  render() {
    const {image, name, id, onPressHandler, moves} = this.props;
    const headImage = headshots[this.props.name] || headshots.kazuya;
    // in case of empty
    const emptyCard = name == null;
    const touchEvent = (emptyCard) ? 'none' : 'auto';
    const cardStyle = (emptyCard) ? [Styles.card, Styles.empty] : Styles.card;
    const formatName = (emptyCard) ? "" : name.toUpperCase();

    return (
      <View style={cardStyle} pointerEvents={touchEvent}>
        <TouchableHighlight onPress={() => onPressHandler(name, moves, image)}>
          <View>
            <Image
              style={Styles.image}
              source={headImage}
            />
            <CustomText textStyle={Styles.text}>{formatName}</CustomText>
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
  empty: {
    opacity: 0
  },
  image: {
    marginBottom: 8,
    height: 110,
    width: 90,
    backgroundColor: '#fff',
    resizeMode: 'contain'
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500'
  }
});

CharacterCard.Proptypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  onPressHandler: PropTypes.func
};

export default CharacterCard;
