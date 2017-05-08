import { createRouter } from '@exponent/ex-navigation';
import About from './About/About';
import InitialLoading from './InitialLoading';
import CharacterSelect from './CharacterSelect/';
import CharacterProfile from './CharacterProfile/';

export const Router = createRouter(() => ({
	characterSelect: () => CharacterSelect,
	characterProfile: () => CharacterProfile,
	initialLoading: () => InitialLoading
}));
