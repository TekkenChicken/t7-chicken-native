import React, { Component } from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { SupportNavHeader } from '../../components/NavigationBar';
import CustomText from '../../components/CustomText/CustomText';
import Link from '../../components/Link/';

import content from './content.json';

import { Styles } from './styles';

const redPrimary = '#701825';
const redSecondary = '#320f1c';

//import content from './content.json';

class Support extends Component {
  static navigationOptions = ({navigation}) => {
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
        start={{x: 0.5, y: 0.1}} end={{x: 1.0, y: 0.9}}
        style={Styles.container}>
          <ScrollView>
          <CustomText>{content.support.intro}</CustomText>
          {this.renderLinkSection(content.links)}
          </ScrollView>
        </LinearGradient>
    );
  }
}

export default Support;
