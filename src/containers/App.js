import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { View, StatusBar, Text, StyleSheet, Platform } from 'react-native';

// dependencies
import { StackNavigator } from 'react-navigation';

// redux setup
import Store from '../redux/store';

// components
import Toolbar from '../components/Toolbar/Toolbar';
import AppNavigator from './Navigator.js';

class App extends Component {
  render() {
    const background = (Platform.OS === 'ios') ? 'transparent' : 'black';
    return (
      <Provider store={Store}>
        <View style={{flex: 1, backgroundColor: '#111'}}>
          <StatusBar barStyle="light-content" backgroundColor={background} />
          <AppNavigator style={{flex: 1, backgroundColor: '#111', shadowColor: '#111'}} />
        </View>
      </Provider>
    );
  }
}

export default App;
