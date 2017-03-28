import './ReactotronConfig';
import Reactotron from 'reactotron-react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './src/redux/actions/actionCreators';
import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';

import store from './src/redux/store';
import App from './src/containers/App';

const TekkenChicken = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('t7ChickenNative', () => (TekkenChicken));
