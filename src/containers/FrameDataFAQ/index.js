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

  renderIntro() {
    return (
      <View>
        <CustomText textStyle={Styles.faqText}>{content.intro}</CustomText>
      </View>
    )
  }

  renderSpeed() {
    return (
      <View style={Styles.header}>
        <CustomText textStyle={Styles.headerText}>What is Speed?</CustomText>
        <CustomText textStyle={Styles.faqText}>{content.speed}</CustomText>
      </View>
    )
  }

  renderOnBlock() {
    return (
      <View style={Styles.header}>
        <CustomText textStyle={Styles.headerText}>What is On Block?</CustomText>
        <CustomText textStyle={Styles.faqText}>{content.onblock}</CustomText>
      </View>
    )
  }

  renderOnHit() {
    return (
      <View style={Styles.header}>
        <CustomText textStyle={Styles.headerText}>What is On Hit?</CustomText>
        <CustomText textStyle={Styles.faqText}>{content.onhit}</CustomText>
      </View>
    )
  }

  renderCounterHit() {
    return (
      <View style={Styles.header}>
        <CustomText textStyle={Styles.headerText}>What is Counter Hit?</CustomText>
        <CustomText textStyle={Styles.faqText}>{content.counterhit}</CustomText>
      </View>
    )
  }

  renderWrapUp() {
    return (
      <View style={Styles.header}>
        <CustomText textStyle={Styles.headerText}>Hope this helped!</CustomText>
        <CustomText textStyle={Styles.faqText}>{content.wrapup}</CustomText>
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
          {this.renderIntro()}
          {this.renderSpeed()}
          {this.renderOnBlock()}
          {this.renderOnHit()}
          {this.renderCounterHit()}
          {this.renderWrapUp()}
        </ScrollView>
      </LinearGradient>
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
