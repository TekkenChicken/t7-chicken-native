import React, { Component } from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { CommunityNavHeader } from '../../components/NavigationBar';
import CustomText from '../../components/CustomText/CustomText';
import Link from '../../components/Link/';

import content from './content.json';

import { Styles } from './styles';

const redPrimary = '#701825';
const redSecondary = '#320f1c';

//import content from './content.json';

class Community extends Component {
  static navigationOptions = ({navigation}) => {
    const headerLeft = [
      {
        key: "MenuButton",
        onPress: () => navigation.navigate('DrawerOpen')
      }
    ];
    return CommunityNavHeader(headerLeft);
  };

  renderHeader() {
    return (
      <View style={Styles.header}>
        <View style={Styles.headerBorder} />
      </View>
    );
  }

  /**
   *  @method renderCommunityGroups
   *  @param  {array} groups
   *  Renders all community groups and their respective links
   */
  renderCommunityGroups(groups) {
    return groups.map((group, i) => (
      <View style={Styles.header} key={i}>
        <CustomText textStyle={Styles.headerText}>
            {group.groupName}
        </CustomText>
        {this.renderLinks(group.links)}
      </View>
    ));
  }

  /**
   *  @method renderLinks
   *  @param  {array} links
   *  Renders all links of a community group
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
    const communityGroups = content.groups;
    return (
      <LinearGradient
        colors={[redPrimary, redSecondary]}
        start={{x: 0.5, y: 0.1}} end={{x: 1.0, y: 0.9}}
        style={Styles.container}>
          <ScrollView>
            {this.renderCommunityGroups(communityGroups)}
          </ScrollView>
        </LinearGradient>
    );
  }
}

export default Community;
