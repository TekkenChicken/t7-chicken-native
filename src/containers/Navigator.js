import { Provider, connect } from 'react-redux';

// dependencies
import { StackNavigator } from 'react-navigation';

// redux setup
import createMainStore from '../redux/store';
import Routes from './Router';

const AppNavigator = StackNavigator(Routes, { initialRouteName: "initialLoading", headerMode: 'screen' });

const navReducer = (state, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppNavigator);
