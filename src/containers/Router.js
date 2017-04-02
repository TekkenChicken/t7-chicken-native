import { createRouter } from '@exponent/ex-navigation';
import About from './About/About';
import CharacterSelect from './CharacterSelect/';

export const Router = createRouter(() => ({
	characterSelect: () => CharacterSelect,
	about: () => About
}));
