import React from 'react';
import { Platform, View, Text } from 'react-native';

// components
import NavigationTitle from './Title';
import NavigationSide from './Side';
import Inputs from '../Inputs/Inputs';

import * as Colors from '../../style/vars/colors';

/**
 *  Render's Header Title
 *  @param: title [string]
 */
const renderTitle = (title) => (
  <NavigationTitle text={title} />
);

const renderAttackDetailsTitle = title => (
  <View style={{ alignSelf: 'center'}}>
    <Text style={{color: 'white', textAlign: 'center'}}>{title}</Text>
    <Inputs isCard={false} inputs={title}/>
  </View>
)

/**
 *  Render's Group of possible components to use on sides of header
 *  @param: components [array] -- array of keys for components to render on the left
 *  each item in the array will be an object with props (including "key" correlates to component name)
 */
const renderSide = (components, side) => (
  <NavigationSide components={components} side={side} />
);


const headerStyles = {
  common: {
    backgroundColor: Colors.redSecondary,
    borderBottomWidth: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0
  },
  transparent: {
    backgroundColor: 'transparent',
    zIndex: -1,
    top: 0,
    left: 0,
    right: 0
  },
  black: {
    backgroundColor: '#111',
  },
  profile: {
    backgroundColor: Colors.redPrimary
  }
};

/**
 *  Header Config methods
 *  ---------------------
 *  meant to be used in static navigationOptions variable used to dynamically
 *  configure the header. (handled by react-navigation)
 */

// Character Select Screen Header Config
export const charSelectNavHeader = (leftComponents = [], rightComponents = []) => {
  return {
    drawerLabel: 'Characters',
    title: "T7 Chicken",
    mode: 'modal',
    headerTitle: renderTitle("T7 Chicken"),
    headerLeft: renderSide(leftComponents, "left"),
    headerRight: renderSide(rightComponents, "right"),
    headerStyle: headerStyles.common,
    gesturesEnabled: false,
  };
};

// Character Profile Screen Header Config
export const charProfileNavHeader = (charName, leftComponents=[], rightComponents=[], scrollState) => {
  const initialStyle = Object.assign({}, headerStyles.common);
  const scrollStyle = Object.assign({}, headerStyles.common);
  return {
    title: null,
    headerTitle: renderTitle(charName),
    headerStyle: initialStyle,
    headerLeft: renderSide(leftComponents, "left"),
    headerRight: renderSide(rightComponents, "right")
  };
};

//Attack Details Nav Header
export const attackDetailsNavHeader = (move, leftComponents=[]) => {
  return {
    title: null,
    headerTitle: renderTitle(move),
    headerStyle: headerStyles.common,
    headerLeft: renderSide(leftComponents, "left"),
  };
};

// About Screen Header Config
export const aboutNavHeader = (leftComponents = [], rightComponents = []) => {
  return {
    drawerLabel: 'About',
    title: "About",
    headerTitle: renderTitle("About"),
    headerLeft: renderSide(leftComponents, "left"),
    headerRight: renderSide(rightComponents, "right"),
    headerStyle: headerStyles.common
  };
};

export const helpNavHeader = (leftComponents = [], rightComponents = []) => {
  return {
    drawerLabel: 'Help Out!',
    title: "Help",
    headerTitle: renderTitle("Help Out!"),
    headerLeft: renderSide(leftComponents, "left"),
    headerRight: renderSide(rightComponents, "right"),
    headerStyle: headerStyles.common
  };
};

export const FAQNavHeader = (leftComponents = [], rightComponents = []) => {
  return {
    drawerLabel: 'What is frame data?',
    title: "FAQ",
    headerTitle: renderTitle("What is Frame Data?"),
    headerLeft: renderSide(leftComponents, "left"),
    headerRight: renderSide(rightComponents, "right"),
    headerStyle: headerStyles.common
  };
};

export const SupportNavHeader = (leftComponents = [], rightComponents = []) => {
  return {
    drawerLabel: 'Support Us!',
    title: "Support Us!",
    headerTitle: renderTitle("Support Us!"),
    headerLeft: renderSide(leftComponents, "left"),
    headerRight: renderSide(rightComponents, "right"),
    headerStyle: headerStyles.common
  };
};
