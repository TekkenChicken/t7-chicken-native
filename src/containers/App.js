import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar } from 'react-native';

import {
 NavigationContext,
 NavigationProvider,
 StackNavigation
} from '@exponent/ex-navigation';

import store from '../redux/store';

import { Router } from './Router';

const navigationContext = new NavigationContext({
  router: Router,
  store
});

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
        />
        <NavigationProvider context={navigationContext}>
          <StackNavigation id="home" initialRoute={Router.getRoute('characterProfileScreen')} />
        </NavigationProvider>
      </View>
    );
  }
}

export default App;
