import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Modal,
    StyleSheet,
} from 'react-native';

// components
import CustomText from '../CustomText/CustomText';
import Inputs from '../Inputs/Inputs';

// styles
import cellStyles from './cellStyles';

// spread sheet display config
import orderConfig from './config';


class FrameDataRow extends Component {
    constructor() {
        super();
        this.state = {modalVisable: false}
    }

    renderNotation(notation) {
      return (
        <View>
          <CustomText textStyle={cellStyles.text}>{notation}</CustomText>
        </View>
      )
    }

    renderText(text) {
      return (<CustomText textStyle={cellStyles.text}>{text}</CustomText>);
    }

    renderCells(move) {
      return orderConfig.map((moveProp, i) => {
        return (
          <View style={[cellStyles.cell, cellStyles.moveCell, cellStyles[moveProp.key]]} key={i}>
            { 
              (moveProp.key == 'notation') ? this.renderNotation(move[moveProp.key]) : this.renderText(move[moveProp.key])
            }
          </View>
        );
      })
    }

    render() {
      return (
        <TouchableHighlight 
          onPress={() => this.props.clickHandler()}
        >
          <View style={cellStyles.row}>
            {this.renderCells(this.props.move)}
          </View>
        </TouchableHighlight>
      )
    }
}

FrameDataRow.propTypes = {
  move: PropTypes.object,
  clickHandler: PropTypes.func
};

export default FrameDataRow;
