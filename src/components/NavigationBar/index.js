import React from 'react';

// components
import NavigationTitle from './Title';
import NavigationSide from './Side';

/**
 *  Render's Header Title
 *  @param: title [string]
 */
const renderTitle = (title) => (
  <NavigationTitle text={title} />
);

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
    //backgroundColor: '#111',
    borderBottomWidth: 0,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0,
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
export const charProfileNavHeader = (charName, leftComponents=[], rightComponents=[], scrollState) => {
  const transparentStyle = Object.assign({}, headerStyles.common, headerStyles.transparent);
  return {
    title: null,
    headerTitle: (scrollState) ? renderTitle(charName) : null,
    headerStyle: transparentStyle,
    headerLeft: renderSide(leftComponents, "left"),
    headerRight: renderSide(rightComponents, "right")
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
