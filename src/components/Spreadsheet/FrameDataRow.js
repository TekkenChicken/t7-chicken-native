import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    TouchableHighlight,
    Modal,
    StyleSheet,
    Keyboard
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

// components
import CustomText from '../CustomText/CustomText';
import Inputs from '../Inputs/Inputs';

// styles
import cellStyles from './cellStyles';

// spread sheet display config
import { propOrder, propColors } from './config';


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

    /**
     *  @method: renderCells
     *  @param: move {object}
     *  @return: Cell Components to render
     *  Takes a move and renders out all required properties of the move into cells for the row
     *  Properties needed are notated in propOrder of the spreadsheet Config
     */
    renderCells(move, moveIndex) {
      return propOrder.map((moveProp, i) => {
        return (
          <View
            style={[
              cellStyles.cell,
              cellStyles.moveCell,
              cellStyles[moveProp.key],
              { backgroundColor: moveIndex % 2 === 0 ? propColors[moveProp.key].dark : propColors[moveProp.key].between}
            ]}
            key={i}>
            <CustomText textStyle={isPortrait ? cellStyles.hidden : cellStyles.text}>{move[moveProp.key]}</CustomText>
          </View>
        );
      })
    }

    /**
     *  @method: renderHeaderCells
     *  @render: Cell Components to render
     *  Renders header cells with move properties to be shown in spreadsheet
     *  Properties needed are notated in propOrder of the spreadsheet Config
     */
    renderHeaderCells() {
      return propOrder.map((moveProp, i) => {
        return (
          <View
            style={[
              cellStyles.headerCell,
              cellStyles[moveProp.key],
              {backgroundColor: propColors[moveProp.key].light}
            ]}
            key={i}>
            <CustomText textStyle={isPortrait ? cellStyles.hidden : cellStyles.headerText}>{moveProp.label}</CustomText>
          </View>
        );
      })
    }

  render() {
    const { moveIndex, move, onPressHandler, isPortrait } = this.props;
    // if Row is a header row
    if (this.props.header) {
      return (
        <View style={isPortrait ? cellStyles.hidden : cellStyles.row}>
          {this.renderHeaderCells(this.props.isPortrait)}
        </View>
      );
      // if regular move data row
    } else {
      return (
        <TouchableHighlight
          style={isPortrait ? cellStyles.hidden : cellStyles.row}
          onPress={() => onPressHandler(move, moveIndex)}>
          <View style={cellStyles.row}>
            {this.renderCells(move, moveIndex, isPortrait)}
          </View>
        </TouchableHighlight>
      );
    }
  }
}

FrameDataRow.propTypes = {
  move: PropTypes.object,
  moveIndex: PropTypes.number,
  onPressHandler: PropTypes.func
};

export default FrameDataRow;
