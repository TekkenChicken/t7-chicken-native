import React, { Component } from 'react';
import { View, Text, ScrollView, Linking, StyleSheet } from 'react-native';

import { yellow, redSecondary } from '../../style/vars/colors';

// Link component
const Link = ({url, name, textStyle, children}) => (
  <Text
    style={[Styles.link, textStyle]}
    onPress={()=> Linking.openURL(url)}>
    {name}
    {children}
  </Text>
);

const Styles = StyleSheet.create({
  link: {
		color: yellow,
		fontSize: 18,
		fontFamily: 'Exo2-Regular',
    textDecorationLine: "underline"
	}
});

export default Link;
