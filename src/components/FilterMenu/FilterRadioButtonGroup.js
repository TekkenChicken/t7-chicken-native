import React, { Component, PropTypes } from 'react';
import {
  View,
  StyleSheet,
  Button
} from 'react-native';

// Filter Option Button
class FilterRadioButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { active: null };
  }

  onButtonToggle(value, filterKey, btnIndex) {
    this.setState({ active: (this.state.active !== btnIndex) ? btnIndex : null }, () => {
      const filterValue = (this.state.active) ? value : null;
      // trigger sending up value selection to menu component
      this.props.onOptionSelectHandler( filterKey, filterValue );
    });
  }

  renderButtons(options, filterKey) {
    return (
      options.map((option, i) =>
        <View style={(this.state.active === i) ? Styles.activeOption : ''}>
          <Button
            key={i}
            color="white"
            title={option.label}
            onPress={() => this.onButtonToggle(option.value, filterKey, i)}
          >
            {option.label}
          </Button>
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

FilterRadioButtonGroup.propTypes = {
  options: PropTypes.array,
  onOptionSelectHandler: PropTypes.func,
};

export default FilterRadioButtonGroup;
