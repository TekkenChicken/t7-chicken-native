import React from 'react';
import { View, Text } from 'react-native';
import { Select, Option, OptionList, updatePosition } from 'react-native-dropdown';

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
    return  <Option key={id}>{name}</Option>
    })
  }

  getOptionList() {
    return this.refs['OPTIONLIST'];
  }

  handleSelect(name) {
    console.log(name);
    this.setState({
      selected: name
    });
  }

  render() {
    return (
      <View>
        <Select
          width={250}
          ref="SELECT1"
          optionListRef={this.getOptionList.bind(this)}
          defaultValue="Select Character"
          onSelect={this.handleSelect.bind(this)}>
          {this.renderOptions(this.props.characters)}
        </Select>
        <Text>Selected Character: {this.state.selected}</Text>

      <OptionList ref="OPTIONLIST" />
      </View>
    )
  }
}
