import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Styles } from './styles';
import { SponsorsNavHeader } from '../../components/NavigationBar';
import CustomText from '../../components/CustomText/CustomText';
import LinearGradient from 'react-native-linear-gradient';
import SponsorItem from './sponsorItem';

import * as Colors from '../../style/vars/colors';

// Page and Sponsor Content
import content from './content.json';

class Sponsors extends React.Component {
  static navigationOptions = ({navigation}) => {
    const headerLeft = [
      {
        key: "MenuButton",
        onPress: () => navigation.navigate('DrawerOpen')
      }
    ];
    return SponsorsNavHeader(headerLeft);
  };

  /**
   * @method renderSponsors
   * @param {array} sponsors
   * @return {<SponsorItems/>}
   * Takes in sponsors array and renders out sponsor-item components
   */
  renderSponsors(sponsors) {
    return (<View>
      {
        sponsors.map((sponsor, i) => <SponsorItem key={i} {...sponsor} />)
      }
    </View>)
  }

  render() {
    const {page, sponsors} = content;

    return (
	<LinearGradient
        colors={[Colors.redPrimary, Colors.redSecondary]}
        start={{x: 0.5, y: 0.1}} end={{x: 1.0, y: 0.9}}
        style={Styles.container}>
        <ScrollView style={Styles.scrollContainer}>
          <CustomText textStyle={Styles.commonText}>{page.description}</CustomText>
          {this.renderSponsors(sponsors)}
          <CustomText textStyle={[Styles.commonText, {textAlign: 'center'}]}>___</CustomText>
        </ScrollView>
	</LinearGradient>
    )
  }
}

export default Sponsors;
