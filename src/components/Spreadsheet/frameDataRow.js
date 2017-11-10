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

import { showAttackDetails } from '../../redux/actions/attackDetails';


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
    renderCells(move, rowIndex) {
      console.log()
      return propOrder.map((moveProp, i) => {
        return (
          <View
            style={[
              cellStyles.cell,
              cellStyles.moveCell,
              cellStyles[moveProp.key],
              { backgroundColor: rowIndex % 2 === 0 ? propColors[moveProp.key].dark : propColors[moveProp.key].light}
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

    navigateToAttackDetails(move, index) {
      Keyboard.dismiss();
      this.props.showAttackDetails(move, index)
      this.props.navigation.navigate('attackDetails',  { move, index} );
    }

    indexFinder(charData, move) {
      let indexValue = null;
      charData.forEach((attack, i) => {
          if(attack.notation == move.notation) {
              return indexValue = i;
          }
      })
      return indexValue;
  }

    render() {
      const characterMoves = this.props.character;
      const moveIndex = this.indexFinder(characterMoves, {...this.props.move});
      const rowIndex = this.props.rowIndex;
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
            onPress={()=> this.navigateToAttackDetails(characterMoves[moveIndex], moveIndex)}>
            <View style={cellStyles.row}>
              {this.renderCells(this.props.move, rowIndex)}
            </View>
          </TouchableHighlight>
        );
      }
    }
}
const mapStateToProps = state => {
  return {
      character: state.character.data,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showAttackDetails: (move, index) =>  dispatch(showAttackDetails(move, index))
  }
}

FrameDataRow.propTypes = {
  move: PropTypes.object,
  clickHandler: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(FrameDataRow);

