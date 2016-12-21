import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Styles } from './FrameDataStyles';

import FrameDataCard from '../../components/FrameData/FrameDataCard';


export default class FrameData extends React.Component {

  renderFrameData(data = []) {
    return data.map((move, key) => {
      return (
        <FrameDataCard
          style={Styles.card}
          key={key}
          notation={move.notation}
        />
      )
    })
  }

  render() {
    return (
      <ScrollView style={Styles.scroll}>
        {this.renderFrameData(this.props.data)}
      </ScrollView>
    )
  }
}
