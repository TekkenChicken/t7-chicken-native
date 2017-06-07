import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Styles } from './styles';
import { FAQNavHeader } from '../../components/NavigationBar';
import CustomText from '../../components/CustomText/CustomText';

import LinearGradient from 'react-native-linear-gradient';

const redPrimary = '#701825';
const redSecondary = '#320f1c';

import content from './content.json';

class FrameDataFAQ extends React.Component {
  static navigationOptions = ({navigation}) => {
    const headerLeft = [
      {
        key: "MenuButton",
        onPress: () => navigation.navigate('DrawerOpen')
      }
    ];
    return FAQNavHeader(headerLeft);
  };

  renderHeader() {
    return (
      <View style={Styles.header}>
        <CustomText textStyle={Styles.headerText}>What is frame data?</CustomText>
        <View style={Styles.headerBorder} />
      </View>
    );
  }

  renderDescription() {
    return (
      <CustomText textStyle={Styles.description}>{content.description}</CustomText>
    );
  }

  renderTeam() {
    return (
      <View>
        <CustomText textStyle={Styles.teamText}>{content.team.text}</CustomText>
        {
          content.team.members.map((member, i) => {
            return (<CustomText key={i} textStyle={Styles.teamMember}>{member}</CustomText>);
          })
        }
      </View>
    )
  }

render() {
  return (
    <Text>Test</Text>
  )
}
	// render() {
	// 	return (
	// 		<LinearGradient
  //       colors={[redPrimary, redSecondary]}
  //       start={{x: 0.5, y: 0.1}} end={{x: 1.0, y: 0.9}}
  //       style={Styles.container}>
  //       <ScrollView>
  //         {this.renderHeader()}
  //         {this.renderDescription()}
  //         {this.renderTeam()}
  //       </ScrollView>
	// 		</LinearGradient>
	// 		)
	// }
}

export default FrameDataFAQ;
