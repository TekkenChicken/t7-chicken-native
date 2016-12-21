import React from 'react'
import { View, Text } from 'react-native';
import { Styles } from './HeaderStyles';
import CharacterSelect from '../../components/CharacterSelect/CharacterSelect';

export default class Header extends React.Component {
  render() {
    console.log(this.props)
    return (
      <View>
        <Text>Data Provided by rbnorway</Text>
      </View>
    )
  }
}
