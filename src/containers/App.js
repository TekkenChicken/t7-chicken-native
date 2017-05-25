import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { View, StatusBar, Text, StyleSheet } from 'react-native';

// dependencies
import { StackNavigator } from 'react-navigation';

// redux setup
import Store from '../redux/store';

// components
import Toolbar from '../components/Toolbar/Toolbar';
import AppNavigator from './Navigator.js';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={{flex: 1, backgroundColor: '#111'}}>
          <StatusBar barStyle="light-content" backgroundColor="transparent" />
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

export default App;
