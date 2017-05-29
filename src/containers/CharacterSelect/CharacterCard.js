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
    const {image, label, id, onPressHandler, moves} = this.props;
    const headImage = headshots[this.props.label] || headshots.kazuya;
    // in case of empty
    const emptyCard = label == null;
    const touchEvent = (emptyCard) ? 'none' : 'auto';
    const cardStyle = (emptyCard) ? [Styles.card, Styles.empty] : Styles.card;
    const formatName = (emptyCard) ? "" : label.toUpperCase();

    return (
      <View style={cardStyle} pointerEvents={touchEvent}>
        <TouchableHighlight onPress={() => onPressHandler(label, moves, image)}>
          <View style={Styles.imageContainer}>
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
    paddingBottom: 15
  },
  empty: {
    opacity: 0
  },
  imageContainer : {
    flex: 1,
    alignItems: "center"
  },
  image: {
    marginBottom: 8,
    height: 120,
    width: 75,
    backgroundColor: '#fff',
    resizeMode: 'stretch'
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
  label: PropTypes.string,
  image: PropTypes.string,
  onPressHandler: PropTypes.func
};

export default CharacterCard;
