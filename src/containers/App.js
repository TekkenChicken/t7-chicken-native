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
    const menu = <FilterSideMenu
      navigator={navigator}
    />;
    return (
      <View style={{flex: 1, backgroundColor: 'rgb(65, 18, 18)'}}>
        <StatusBar
          barStyle="light-content"
        />
          <NavigationProvider context={navigationContext}>
            <SideMenu style={Styles.rightMenu}
              menu={menu}
              menuPosition={'right'}
              isOpen={true}>
              <Toolbar />
            <StackNavigation id="home" initialRoute={Router.getRoute('initialLoading')} />
           </SideMenu>
         </NavigationProvider>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  rightMenu: {
    backgroundColor: 'blue'
  }
})
export default App;
