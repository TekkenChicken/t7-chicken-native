// dependencies
import { StackNavigator } from 'react-navigation';
import Routes from '../../containers/Router';

const AppNavigator = StackNavigator(Routes);

const navigation = (state, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navigation;
