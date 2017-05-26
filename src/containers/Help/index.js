import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Styles } from './styles';
import { helpNavHeader } from '../../components/NavigationBar';

class Help extends Component {
  static navigationOptions = ({navigation}) => {
    const headerLeft = [
      {
        key: "MenuButton",
        onPress: () => navigation.navigate('DrawerOpen')
      }
    ];
    return helpNavHeader(headerLeft);
  };

	goBack = () => {
		this.props.navigator.pop();
	}

	render() {
		return (
			<View style={Styles.container}>
				<Text>Help tho</Text>
				<Text onPress={this.goBack}> Back </Text>
			</View>
			)
	}
}

export default Help;
