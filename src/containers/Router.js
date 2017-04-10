import { createRouter } from '@exponent/ex-navigation';
import About from './About/About';
import CharacterSelect from './CharacterSelect/';
import Character from './Character/';

export const Router = createRouter(() => ({
	characterSelect: () => CharacterSelect,
	character: () => Character,
	about: () => About
}));
