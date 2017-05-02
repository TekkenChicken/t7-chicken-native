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

  renderButtons(options, filterKey, callback) {
    return (
      options.map((option, i) =>
        <View style={(this.state.active === i) ? Styles.activeOption : ''} key={i}>
          <CheckBox
            color="white"
            label={option.label}
            onChange={(checked) => callback(filterKey, option.value, !checked)}
          />
        </View>
      )
    );
  }

  render() {
    const { options, filterKey } = this.props;
    return (
      <View>
        {this.renderButtons(options, filterKey, this.props.onOptionSelectHandler)}
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
