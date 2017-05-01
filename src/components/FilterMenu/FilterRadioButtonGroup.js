import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Button
} from 'react-native';

// Filter Option Button
class FilterRadioButtonGroup extends Component {
  constructor() {
    super(props);
    this.state = { active: null };
  }

  onButtonToggle(value, filterkey, btnIndex) {
    this.setState({ active: (this.state.active !== btnIndex) ? btnIndex : null }, () => {
      const filterValue = (this.state.active) ? value : null;
      // trigger sending up value selection to menu component
      this.props.onOptionSelectHandler( filterKey, filterValue );
    });
  }

  renderButtons(options, filterKey) {
    return {
      options.map((option, i) => (
        <Button
          key={i}
          color="white"
          title={label}
          onPress={() => onButtonToggle(option.value, filterKey, i)}
          style={[ (this.state.active === key) ? 'activeOption' : '' ]}
        >
          {label}
        </Button>
      ))
    }
  }

  render() {
    const { options, filterKey } = this.props;
    return (
      <View>
        {this.renderButtons(options)}
      </View>
    );
  }
}

FilterRadioButtonGroup.propTypes = {
  options: PropTypes.array,
  onOptionSelectHandler: PropTypes.func,
};

export default FilterRadioButtonGroup;
