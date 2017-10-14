import React, { Component, PropTypes } from 'react';

// dependencies
import { View, Text, Image, TouchableHighlight, StyleSheet, Platform, Dimensions } from 'react-native';
import { Router } from '../Router';
import LinearGradient from 'react-native-linear-gradient';

const glassPrimary = '#d5d2da';
const glassSecondary = '#bb2130';

// components
import CustomText from '../../components/CustomText/CustomText';

// images
import headshots from '../../img/headshots/index';

class CharacterCard extends Component {

  render() {
    const {image, label, name, onPressHandler, moves} = this.props;
    const headImage = headshots[this.props.label] || headshots.kazuya;
    // in case of empty
    const emptyCard = label == null;
    const touchEvent = (emptyCard) ? 'none' : 'auto';
    const cardStyle = (emptyCard) ? [Styles.card, Styles.empty] : Styles.card;
    const formatName = (emptyCard) ? "" : label.toUpperCase();

    return (
      <View style={cardStyle} pointerEvents={touchEvent}>
        <TouchableHighlight onPress={() => onPressHandler(label, name)}>
          <View style={Styles.imageContainer}>
            <Image
              style={Styles.image}
              source={headImage}
            />
            <LinearGradient
              colors={[glassPrimary, glassSecondary, glassPrimary]}
              start={{x: 0.0, y: 0.18}} end={{x: 0.5, y: 1.0}}
              style={Styles.frame}>
            </LinearGradient>
            <CustomText textStyle={Styles.text}>{formatName.toUpperCase()}</CustomText>
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
    alignItems: "center",
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    height: 120,
    width: 75,
    resizeMode: 'stretch',
    shadowRadius: 2,
		shadowOpacity: 0.3,
		shadowColor: '#000000'
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    left: 0,
    right: 0,
    marginTop: 5,
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500'
  },
  frame: {
    position: 'absolute',
    top: 0,
    height: 120,
    width: 75,
    opacity: 0.25,
  }
});

CharacterCard.Proptypes = {
  label: PropTypes.string,
  image: PropTypes.string,
  onPressHandler: PropTypes.func
};

export default CharacterCard;
