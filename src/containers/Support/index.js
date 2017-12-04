import React, { Component } from 'react';
import { View, Text, ScrollView, Linking, Image } from 'react-native';
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

const LinkButton = ({ text, icon }) => (
  <LinearGradient
    colors={[redPrimary, redSecondary]}
    start={{ x: -1, y: 0.0 }} end={{ x: 1.0, y: 0.9 }}
    style={Styles.linkButton}>
    <CustomText textStyle={Styles.buttonText}>{text}</CustomText>
    <Image source={icon} />
  </LinearGradient>
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

  renderHeader() {
    return (
      <View style={Styles.header}>
        <View style={Styles.headerBorder} />
      </View>
    );
  }

  /**
   *  @method renderSupportGroups
   *  @param  {array} groups
   *  Renders all Support groups and their respective links
   */
  renderLinkSection(linkSection) {
    console.log('what is link section', linkSection)
    return linkSection.map((link, i) => (
      <View style={Styles.header} key={i}>
        <CustomText textStyle={Styles.headerText}>
          {link.header}
        </CustomText>
        {this.renderLinks(link.links)}
      </View>
    ));
  }

  /**
   *  @method renderLinks
   *  @param  {array} links
   *  Renders all links of a support group
   */
  renderLinks(links) {
    return links.map((link, i) => (
      <Link
        url={link.url}
        name={link.name}
        textStyle={Styles.link}
        key={i} />
    ));
  }

  render() {
    const supportGroups = content.groups;
    console.log(content.links[0])
    return (
      <LinearGradient
        colors={[redPrimary, redSecondary]}
        start={{ x: 0.5, y: 0.1 }} end={{ x: 1.0, y: 0.9 }}
        style={Styles.container}>
        <ScrollView>
          <CustomText textStyle={Styles.description}>
            Since the release of Tekken 7, the T7 Chicken Task Force has been inspired by the feeback from the Tekken Community.
              We've been working really hard in our spare time to keep you all happy. You can support us by doing any of the following:
          </CustomText>
          <LinkButton text={'Check us out on Twitch!'} icon={icons.twitch} />
          <CustomText textStyle={Styles.text}>
            Come hang out with the guy who started T7 Chicken, OffInBed. Ask questions, give feedback, chat, and watch him get salty in rank mode!
          </CustomText>
          <LinkButton text={'Follow us on Twitter!'} icon={icons.twitter} />
          <LinkButton text={'Take our survey!'} icon={icons.survey} />
          <CustomText textStyle={Styles.text}>
            We're constantly collecting feedback to ensure that we make the app that the Tekken community wants and deserves.
          </CustomText>
          <LinkButton text={'Donate!'} icon={icons.paypal} />

        </ScrollView>
      </LinearGradient>
    );
  }
}

export default Support;
