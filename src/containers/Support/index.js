import React, { Component } from 'react';
import { View, Text, ScrollView, Linking, Image, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { SupportNavHeader } from '../../components/NavigationBar';
import CustomText from '../../components/CustomText/CustomText';
import Link from '../../components/Link/';

import icons from '../../img/icons/';

import content from './content.json';

import { Styles } from './styles';

const redPrimary = '#9D1018';
const redSecondary = '#320f1c';

//import content from './content.json';

const LinkButton = ({ text, icon, url }) => (
  <TouchableHighlight onPress={() => Linking.openURL(url)}>
    <LinearGradient
      colors={[redPrimary, redSecondary]}
      start={{ x: -1, y: 0.0 }} end={{ x: 1.0, y: 0.9 }}
      style={Styles.linkButton}>
      <CustomText textStyle={Styles.buttonText}>{text}</CustomText>
      <Image style={Styles.linkIcon} source={icon} />
    </LinearGradient>
  </TouchableHighlight>
)

class Support extends Component {
  static navigationOptions = ({ navigation }) => {
    const headerLeft = [
      {
        key: "MenuButton",
        onPress: () => navigation.navigate('DrawerOpen')
      }
    ];
    return SupportNavHeader(headerLeft);
  };


  render() {
    return (
      <View
        style={Styles.container}>
        <ScrollView>
          <CustomText textStyle={Styles.description}>
            Since the release of Tekken 7, the T7 Chicken Task Force has been inspired by the feeback from the Tekken Community.
              We've been working really hard in our spare time to keep you all happy. You can support us by doing any of the following:
          </CustomText>
          <LinkButton text={'Check us out on Twitch!'} icon={icons.twitch} url={'https://www.twitch.tv/T7chicken'} />
          <CustomText textStyle={Styles.text}>
            Come hang out with the guy who started T7 Chicken, OffInBed. Ask questions, give feedback, chat, and watch him get salty in rank mode!
          </CustomText>
          <LinkButton text={'Follow us on Twitter!'} icon={icons.twitter} url={'https://twitter.com/t7chicken'} />
          <LinkButton text={'Take our survey!'} icon={icons.survey} url={'https://goo.gl/forms/XtGwoSwT4HgZaZz32'} />
          <CustomText textStyle={Styles.text}>
            We're constantly collecting feedback to ensure that we make the app that the Tekken community wants and deserves.
          </CustomText>
          <LinkButton text={'Donate!'} icon={icons.paypal} url={'https://www.paypal.me/T7Chicken'} />
        </ScrollView>
      </View>
    );
  }
}

export default Support;
