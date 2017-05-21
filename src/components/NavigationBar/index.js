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
const renderSide = (components) => (
  <NavigationSide components={components} />
);


const headerStyles = {
  common: {
    //backgroundColor: '#380b12',
    backgroundColor: '#111',
    borderBottomWidth: 0,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0,
    },
    shadowRadius: 0,
    elevation: 0
  },
  transparent: {
    position: 'absolute',
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
    title: "Tekken Chicken",
    headerTitle: renderTitle("Tekken Chicken"),
    headerRight: renderSide(rightComponents),
    headerStyle: headerStyles.common
  };
};

// Character Profile Screen Header Config
export const charProfileNavHeader = (title, leftComponents=[], rightComponents=[]) => {
  const profileStyle = Object.assign({}, headerStyles.common, headerStyles.transparent);
  return {
    title: null,
    headerTitle: null,
    headerStyle: profileStyle
  };
};
