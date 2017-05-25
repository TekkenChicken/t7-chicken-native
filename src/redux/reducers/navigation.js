// dependencies
import { DrawerNavigator } from 'react-navigation';
import Router from '../../containers/Router';

const AppNavigator = DrawerNavigator(Router.MainRoutes);

const navigation = (state, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navigation;
