import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from './styles';
import { aboutNavHeader } from '../../components/NavigationBar';

class About extends React.Component {
  static navigationOptions = ({navigation}) => {
    const headerLeft = [
      {
        key: "MenuButton",
        onPress: () => navigation.navigate('DrawerOpen')
      }
    ];
    return aboutNavHeader(headerLeft);
  };

	goBack = () => {
		this.props.navigator.pop();
	}

	render() {
		return (
			<View style={Styles.container}>
				<Text>About tho</Text>
				<Text onPress={this.goBack}> Back </Text>
			</View>
			)
	}
}

export default About;
