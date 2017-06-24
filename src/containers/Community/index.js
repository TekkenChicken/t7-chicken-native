import React, { Component } from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { Styles } from './styles';
import { CommunityNavHeader } from '../../components/NavigationBar';
import CustomText from '../../components/CustomText/CustomText';

import LinearGradient from 'react-native-linear-gradient';

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

  handleLink(url) {
    Linking.openURL(url);
  }
  renderHeader() {
    return (
      <View style={Styles.header}>
        <CustomText textStyle={Styles.headerText}>Join us!</CustomText>
        <View style={Styles.headerBorder} />
      </View>
    );
  }

  renderKTA() {
    return (
      <View style={Styles.header}>
        <CustomText
          textStyle={Styles.headerText}>
            Facebook Groups
        </CustomText>
        <Text
          onPress={()=> this.handleLink('https://www.facebook.com/groups/TekkenAcademy')}>
            Kor's Tekken Academy
        </Text>
      </View>
    )
  }

  renderTOM() {
    return (
      <View style={Styles.header}>
        <Text
          onPress={()=> this.handleLink('https://www.facebook.com/groups/TekkenOnlineMatchmaking/')}>
            Tekken Online Match Making
        </Text>
      </View>
    )
  }

  renderLTT() {
    return (
      <View style={Styles.header}>
        <Text
          onPress={()=> this.handleLink('https://www.facebook.com/groups/677277462355281/')}>
            Let's Talk Tekken!
        </Text>
      </View>
    )
  }

  renderReddit() {
    return (
      <View style={Styles.header}>
        <CustomText
          textStyle={Styles.headerText}>
            Reddit
        </CustomText>
        <Text
          onPress={()=> this.handleLink('https://www.reddit.com/r/tekken/')}>
            /r/Tekken
        </Text>
      </View>
    )
  }

  renderRedditTC() {
    return (
      <View style={Styles.header}>
        <Text
          onPress={()=> this.handleLink('https://www.reddit.com/r/tekkenchicken/')}>
            /r/Tekkenchicken
        </Text>
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
          {this.renderKTA()}
          {this.renderTOM()}
          {this.renderLTT()}
          {this.renderReddit()}
          {this.renderRedditTC()}
        </ScrollView>
      </LinearGradient>
  )
}
}

export default Community;
