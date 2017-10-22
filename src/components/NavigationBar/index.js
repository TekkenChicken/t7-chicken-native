import React from 'react';
import { Platform, View, Text } from 'react-native';

// components
import NavigationTitle from './Title';
import NavigationSide from './Side';
import Inputs from '../Inputs/Inputs';

/**
 *  Render's Header Title
 *  @param: title [string]
 */
const renderTitle = (title) => (
  <NavigationTitle text={title} />
);

const renderAttackDetailsTitle = title => (
  <View>
    <Text style={{color: 'white'}}>{title}</Text>
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
    backgroundColor: '#260309',
    borderBottomWidth: 0,
    shadowOpacity: 0,
    shadowOffset: {
    },
    shadowRadius: 0,
    elevation: 0
  },
  transparent: {
    backgroundColor: 'transparent',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0
  },
  black: {
    backgroundColor: '#111',
  },
  attackDetail: {
    backgroundColor: '#260309',
    borderBottomWidth: 0,
    shadowOpacity: 0,
    height: 100,
    shadowOffset: {
    },
    shadowRadius: 0,
    elevation: 0
  },
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
    title: "Tekken Chicken",
    mode: 'modal',
    headerTitle: renderTitle("Tekken Chicken"),
    headerLeft: renderSide(leftComponents, "left"),
    headerRight: renderSide(rightComponents, "right"),
    headerStyle: headerStyles.common,
    gesturesEnabled: false,
  };
};

// Character Profile Screen Header Config
export const charProfileNavHeader = (charName, leftComponents=[], rightComponents=[]) => {
  const transparentStyle = Object.assign({}, headerStyles.common, headerStyles.transparent);
  const blackStyle = Object.assign({}, headerStyles.common, headerStyles.black);
  return {
    title: null,
    headerTitle: (Platform.OS === 'ios') ? null : renderTitle(charName),
    headerStyle: (Platform.OS === 'ios') ? transparentStyle : blackStyle,
    headerLeft: renderSide(leftComponents, "left"),
    headerRight: renderSide(rightComponents, "right")
  };
};

//Attack Details Nav Header
export const attackDetailsNavHeader = (move, leftComponents=[]) => {
  const transparentStyle = Object.assign({}, headerStyles.attackDetail);
  const blackStyle = Object.assign({}, headerStyles.attackDetail, headerStyles.black);
  return {
    title: null,
    headerTitle: renderAttackDetailsTitle(move),
    headerStyle: (Platform.OS === 'ios') ? transparentStyle : blackStyle,
    //headerStyle: headerStyles.attackDetail,
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

export const CommunityNavHeader = (leftComponents = [], rightComponents = []) => {
  return {
    drawerLabel: 'Join the Community!',
    title: "Community",
    headerTitle: renderTitle("Join the Community!"),
    headerLeft: renderSide(leftComponents, "left"),
    headerRight: renderSide(rightComponents, "right"),
    headerStyle: headerStyles.common
  };
};

