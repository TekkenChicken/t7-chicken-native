import React, { Component, PropTypes } from 'react';
import {
  View,
  Button
} from 'react-native';

// dependencies
import EStyleSheet from 'react-native-extended-stylesheet';

// components
import CheckBox from 'react-native-checkbox';


class FilterButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { active: [] };
  }

  resetButtonState() {
    this.setState({ active: [] });
  }

  updateButtonState(index, checked) {
    const active = this.state.active;
    if (checked) {
      active.push(index);
    } else {
      active.splice( active.indexOf(index), 1);
    }
    this.setState({ active });
  }

  toggleCheck(filterKey, filterValue, checked, index) {
    this.props.onOptionSelectHandler(filterKey, filterValue, checked);
    this.updateButtonState(index, checked);
  }

  renderButtons(options, filterKey) {
    return (
      options.map((option, i) =>
        <View key={i}>
          <CheckBox
            containerStyle={EStyleSheet.child(Styles, 'checkBox__container', i, options.length)}
            checkboxStyle={[Styles.checkBox__box, (this.state.active.indexOf(i) > -1) ? Styles.checkBox__boxchecked : ""]}
            labelStyle={Styles.checkBox__label}
            underlayColor={'#900a12'}
            uncheckedImage={null}
            label={option.label}
            onChange={(checked) => this.toggleCheck(filterKey, option.value, !checked, i)}
          />
        </View>
      )
    );
  }

  render() {
    const { options, filterKey } = this.props;
    // build stylesheet
    EStyleSheet.build(Styles);
    return (
      <View style={Styles.buttonContainer}>
        {this.renderButtons(options, filterKey)}
      </View>
    );
  }
}

const Styles = EStyleSheet.create({
  activeOption: {
    borderWidth: 1,
    borderColor: '#f0aa23'
  },
  buttonContainer: {
    backgroundColor: '#960b11',
  },
  checkBox__container: {
    paddingBottom: 10,
    paddingLeft: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: '#a7474d'
  },
  'checkBox__container:first-child': {
    borderTopWidth: 0
  },
  checkBox__label: {
    color: '#fff',
    fontWeight: '500',
    fontFamily: 'Exo2-Light',
    marginTop: -4
  },
  checkBox__box: {
    backgroundColor:'#58070a',
    borderWidth: 0
  },
  checkBox__boxchecked: {
    borderWidth: 1,
    borderColor: '#f0aa23'
  }
});

FilterButtonGroup.propTypes = {
  options: PropTypes.array,
  onOptionSelectHandler: PropTypes.func,
};

export default FilterButtonGroup;
