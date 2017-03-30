import { createRouter } from '@exponent/ex-navigation';
import HomeScreen from './HomeScreen/HomeScreen';
import About from './About/About';
import CharacterSelect from './CharacterSelect/';

export const Router = createRouter(() => ({
	home: () => HomeScreen,
	about: () => About
}));
