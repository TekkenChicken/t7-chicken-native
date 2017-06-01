import React, { Component, PropTypes } from 'react';

// dependencies
import { View, Text, Image, TouchableHighlight, StyleSheet, Platform, Dimensions } from 'react-native';
import { Router } from '../Router';
import LinearGradient from 'react-native-linear-gradient';

const glassPrimary = '#c3bfcd40';
const glassSecondary = '#73bdc841';

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
            <LinearGradient
              colors={[glassPrimary, glassSecondary]}
              start={{x: 1.0, y: 0.9}} end={{x: 9.5, y: 0.5}}>
              <Image
                style={Styles.image}
                source={headImage}
              />
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
    width: Dimensions.get('window').width / 4,
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
    height: 120,
    width: 75,
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
