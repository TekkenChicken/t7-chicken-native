import React, { Component, PropTypes } from 'react';
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
    renderCells(move) {
      return propOrder.map((moveProp, i) => {
        return (
          <View
            style={[
              cellStyles.cell,
              cellStyles.moveCell,
              cellStyles[moveProp.key],
              {backgroundColor: propColors[moveProp.key].dark}
            ]}
            key={i}>
            <CustomText textStyle={cellStyles.text}>{move[moveProp.key]}</CustomText>
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
            <CustomText textStyle={cellStyles.headerText}>{moveProp.label}</CustomText>
          </View>
        );
      })
    }

    navigateToAttackDetails(move) {
      Keyboard.dismiss();
      this.props.navigation.navigate('attackDetails',  { move } );
    }

    render() {
      // if Row is a header row
      if (this.props.header) {
        return (
          <View style={cellStyles.row}>
            {this.renderHeaderCells()}
          </View>
        );
      // if regular move data row
      } else {
        return (
          <TouchableHighlight 
            onPress={()=> this.navigateToAttackDetails(this.props.move)}>
            <View style={cellStyles.row}>
              {this.renderCells(this.props.move)}
            </View>
          </TouchableHighlight>
        );
      }
    }
}

FrameDataRow.propTypes = {
  move: PropTypes.object,
  clickHandler: PropTypes.func
};

export default FrameDataRow;
