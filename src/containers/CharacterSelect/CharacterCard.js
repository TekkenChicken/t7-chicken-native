import React, { Component, PropTypes } from 'react';

// dependencies
import { View } from 'react-native';
import { Router } from '../Router';

class CharacterCard extends Component {
  render() {
    return (<View />);
  }
}

CharacterCard.Proptypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default CharacterCard;
