// import { createRouter } from '@exponent/ex-navigation';
import { StackNavigator } from 'react-navigation';
// components
import About from './About/About';
import InitialLoading from './InitialLoading';
import CharacterSelect from './CharacterSelect/';
import CharacterProfile from './CharacterProfile/';

const routes = {
  characterSelect: { screen: CharacterSelect },
  characterProfile: { screen: CharacterProfile },
	initialLoading: { screen: InitialLoading }
};

const config = {
	initialRouteName: "initialLoading"
};

export default routes;
