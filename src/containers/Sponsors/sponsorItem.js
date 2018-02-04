import React, { Component, PropTypes } from 'react';
// dependencies
import { View, Image, StyleSheet } from 'react-native';
import CustomText from '../../components/CustomText/CustomText';
import CopyTextButton from '../../components/CopyTextButton/';
import Link from '../../components/Link/';

import * as Colors from '../../style/vars/colors';
import SponsorImages from '../../img/sponsors';
import InputIcons from '../../img/inputs/';

const SponsorItem = ({name, description, url, discountCode, image_id}) => {
  
  const renderDiscountCode = (discountCode) => { 
    return (
      <View style={Styles.discountContainer}>
        <CustomText textStyle={Styles.discountDesc}>Tap the discount code below to copy it.</CustomText>
        <CopyTextButton text={discountCode} />
      </View>
    );
  }

  return (
    <View style={Styles.container}>
      <CustomText textStyle={Styles.sponsorName}>{name}</CustomText>
      <Image
        style={Styles.sponsorLogo}
        source={SponsorImages[image_id]}
      />
      <View style={Styles.textContainer}>
        <CustomText>{description}</CustomText>
        {(discountCode) ? renderDiscountCode(discountCode) : null}
      </View>
      <Link 
        url={url} 
        textStyle={Styles.link}>
        {"Visit " + name + "'s Website"}
        <Image style={Styles.linkIcon} source={InputIcons.F} />
      </Link>
    </View>
  );
};

// styles
const Styles = StyleSheet.create({
  container: {
    paddingBottom: 40
  },
  textContainer: {
    padding: 18,
    paddingTop: 15,
  },
  discountContainer: {
    paddingTop: 20,
    paddingBottom: 25
  },
  discountDesc: {
    marginBottom: 10
  },
  sponsorLogo: {
    width: '100%',
    height: 125,
    resizeMode: 'contain'
  },
  sponsorName: {
    color: Colors.yellow,
    fontWeight: '600',
    padding: 10,
    paddingLeft: 18,
    backgroundColor: '#601921'
  },
  link: {
    flex: 1,
    fontSize: 14,
    padding: 10,
    paddingRight: 18,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'right',
    textDecorationLine: 'none'
  },
  linkIcon: {
    marginTop: 13,
    marginLeft: -10,
    height: 15,
    width: 15,
    resizeMode: 'contain',
    alignSelf: 'center'
  }
});

SponsorItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  discountCode: PropTypes.string,
};

export default SponsorItem;
