import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from './CharacterSelectStyle';
import { Select, Option, OptionList, updatePosition } from 'react-native-dropdown';

import { fetchCharacterData } from '../../redux/actions/character-data-action';

/* TODO:
Get Character Names based on JSON Data from Api

 */

export default class CharacterSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ''
    }
  }

  componentDidMount() {
    updatePosition(this.refs['SELECT1']);
    updatePosition(this.refs['OPTIONLIST']);
  }

  renderOptions(names) {
  return  names.map((name, id) => {
    return (
      <Option
        styleText={Styles.select}
        key={id}>
        {name}
      </Option>
  )
    })
  }

  getOptionList() {
    return this.refs['OPTIONLIST'];
  }


  render() {
    return (
      <View>
        <Select
          width={200}
          ref="SELECT1"
          optionListRef={this.getOptionList.bind(this)}
          defaultValue="Select Character"
          onSelect={this.props.handleSelect}>
          {this.renderOptions(this.props.characters)}
        </Select>

      <OptionList ref="OPTIONLIST" />
      </View>
    )
  }
}
