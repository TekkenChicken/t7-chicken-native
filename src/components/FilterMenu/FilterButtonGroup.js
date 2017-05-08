import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Button
} from 'react-native';
import CheckBox from 'react-native-checkbox';

// Filter Option Button
class FilterButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { active: [] };
  }

  resetButtonState() {
    this.setState({ active: [] });
  }

  updateButtonState(index, checked) {
    if (checked) {
      this.state.active.push(index);
    } else {
      this.state.active.splice( this.state.active.indexOf(index), 1);
    }
  }

  toggleCheck(filterKey, filterValue, checked, index) {
    this.props.onOptionSelectHandler(filterKey, filterValue, checked);
    this.updateButtonState(index, checked);
  }

  renderButtons(options, filterKey) {
    return (
      options.map((option, i) =>
        <View style={(this.state.active === i) ? Styles.activeOption : ''} key={i}>
          <CheckBox
            color="white"
            label={option.label}
            onChange={(checked) => this.toggleCheck(filterKey, option.value, !checked, i)}
          />
        </View>
      )
    );
  }

  render() {
    const { options, filterKey } = this.props;
    return (
      <View>
        {this.renderButtons(options, filterKey)}
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  activeOption: {
    backgroundColor: "black"
  }
});

FilterButtonGroup.propTypes = {
  options: PropTypes.array,
  onOptionSelectHandler: PropTypes.func,
};

export default FilterButtonGroup;
