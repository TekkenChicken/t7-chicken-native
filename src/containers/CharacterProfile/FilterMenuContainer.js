import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// dependencies
import {
  View
} from 'react-native';

// components
import FilterMenu from '../../components/CharacterProfile/FilterMenu/FilterMenu';

// dispatch actions
import { queueCharacterMoveFilters, resetCharacterMoveFilters } from '../../redux/actions/character';

class FilterMenuContainer extends Component {
  render() {
    return (
      <View>
        <FilterMenu
          onFilterSelectHandler={(key, value, addFlag) => this.props.triggerFilterQueue(key, value, addFlag)}
          onFilterResetHandler={this.props.triggerFilterReset}
        />
      </View>
    );
  }
}

FilterMenuContainer.propTypes = {
  onFilterSelectHandler: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerFilterQueue: (key, value, addFlag) => dispatch(queueCharacterMoveFilters(key, value, addFlag)),
    triggerFilterReset: () => dispatch(resetCharacterMoveFilters())
  }
};

export default connect(null, mapDispatchToProps)(FilterMenuContainer);
