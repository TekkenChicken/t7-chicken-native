import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Styles } from './styles';
import { helpNavHeader } from '../../components/NavigationBar';
import CustomText from '../../components/CustomText/CustomText';

import LinearGradient from 'react-native-linear-gradient';

const redPrimary = '#701825';
const redSecondary = '#320f1c';

import content from './content.json';

class Help extends React.Component {
  static navigationOptions = ({navigation}) => {
    const headerLeft = [
      {
        key: "MenuButton",
        onPress: () => navigation.navigate('DrawerOpen')
      }
    ];
    return helpNavHeader(headerLeft);
  };

  renderHeader() {
    return (
      <View style={Styles.header}>
        <CustomText textStyle={Styles.headerText}>Let Us Know How You Feel!</CustomText>
        <View style={Styles.headerBorder} />
      </View>
    );
  }

  renderDescription() {
    return (
      <CustomText textStyle={Styles.description}>{content.description}</CustomText>
    );
  }

  renderContactInfo() {
    return (
      <View style={Styles.contactContainer}>
        {
          content.contactInfo.map((info, i) => {
            return (<CustomText key={i} textStyle={Styles.contactInfo}>{info}</CustomText>);
          })
        }
      </View>
    )
  }

	render() {
		return (
			<LinearGradient
        colors={[redPrimary, redSecondary]}
        start={{x: 0.5, y: 0.1}} end={{x: 1.0, y: 0.9}}
        style={Styles.container}>
        <ScrollView>
          {this.renderHeader()}
          {this.renderDescription()}
          {this.renderContactInfo()}
        </ScrollView>
			</LinearGradient>
			)
	}
}

export default Help;
