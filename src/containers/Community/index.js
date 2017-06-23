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

  handleURL(url) {
    console.log(url);
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
  }

  renderHeader() {
    return (
      <View style={Styles.header}>
        <CustomText textStyle={Styles.headerText}>Join us!</CustomText>
        <View style={Styles.headerBorder} />
      </View>
    );
  }

render() {

  return (
    <LinearGradient
      colors={[redPrimary, redSecondary]}
      start={{x: 0.5, y: 0.1}} end={{x: 1.0, y: 0.9}}
      style={Styles.container}>
        <ScrollView>
          {this.renderHeader()}
          <Text>
            Links to Facebook pages and other communites will go here
          </Text>
        </ScrollView>
      </LinearGradient>
  )
}
}

export default Community;
