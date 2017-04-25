import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar, Text, StyleSheet } from 'react-native';

import {
 NavigationContext,
 NavigationProvider,
 StackNavigation
} from '@exponent/ex-navigation';

import SideMenu from 'react-native-side-menu';

import store from '../redux/store';

import { Router } from './Router';

import Toolbar from '../components/Toolbar/Toolbar';
import FilterSideMenu from './FilterSideMenu/FilterSideMenu';

const navigationContext = new NavigationContext({
  router: Router,
  store
});

class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'rgb(65, 18, 18)'}}>
        <StatusBar
          barStyle="light-content"
        />
          <NavigationProvider context={navigationContext}>
              <Toolbar />
            <StackNavigation id="home" initialRoute={Router.getRoute('initialLoading')} />
         </NavigationProvider>
      </View>
    );
  }
}

export default App;
