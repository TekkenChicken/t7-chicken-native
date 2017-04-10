import { createRouter } from '@exponent/ex-navigation';
import About from './About/About';
import CharacterSelect from './CharacterSelect/';
import CharacterProfileScreen from './CharacterProfile';

export const Router = createRouter(() => ({
	characterSelect: () => CharacterSelect,
	characterProfileScreen: () => CharacterProfileScreen,
	about: () => About
}));
