import React from 'react';
import {View, Text, ListView, Button } from 'react-native';
import Accordion from 'react-native-accordion';
import _ from 'lodash';
import { connect } from 'react-redux';

import { toggleFilter } from '../../redux/actions/filter-action';

import {
  hitLevelFilters
} from '../../util/filters';

function FilterButton({filterName, filterFn, toggleFilter, activeFilters}) {
	function filterFinder(f) {
		return f == filterFn
	}
	return (
		<Button title={filterName} onPress={() => toggleFilter(filterFn)}>{filterName} {activeFilters.find(filterFinder) ? 'active' : 'inactive'}</Button>
	)
}


const FilterButtonContainer = connect(() => ({}), { toggleFilter })(FilterButton);

class FilterAccordion extends React.Component {
  constructor(props) {
    super(props);
    let hitLevelSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

      this.state = {
        hitLevelSource: hitLevelSource.cloneWithRows(this.rows(hitLevelFilters))
    }
  }

  rows(filterObjects) {
    return Object.values(filterObjects).map((filter) => {
      return (
        <FilterButtonContainer
          key={filter.name}
          filterName={filter.name}
          filterFn={filter.function}
          activeFilters={this.props.attackFilters}
        />
      )
    })
  }

  renderRow = (filter) => {
    console.log(filter);
    let header = <Text>Click to expand</Text>

    return (
      <Accordion
        header={header}
        content={<Text>Stuff Inside</Text>}
      />
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.hitLevelSource}
        renderRow={()=> this.renderRow(hitLevelFilters)}
      />
    )
  }
}

const mapStateToProps = function(state) {
    let { frameData, character} = state.characterData;
    let { filter, searchFilter, attackFilters } = state;

    return {
				attackFilters
    }
}


const mapDispatchToProps = function(dispatch) {
	return {
		dispatch
	 };
}

export default connect( mapStateToProps, mapDispatchToProps )(FilterAccordion);
