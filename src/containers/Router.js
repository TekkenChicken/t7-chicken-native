// components
import About from './About/';
import Help from './Help/';
import InitialLoading from './InitialLoading/';
import CharacterSelect from './CharacterSelect/';
import CharacterProfile from './CharacterProfile/';
import AttackDetails from './AttackDetails/';
import FrameDataFAQ from './FrameDataFAQ/';
import Support from './Support/';

const MainRoutes = {
  characterSelect: { screen: CharacterSelect },
  characterProfile: { screen: CharacterProfile },
  initialLoading: { screen: InitialLoading },
  attackDetails: { screen: AttackDetails }
};

const AboutRoute = {
  about: { screen: About }
};

const HelpRoute = {
  help: { screen: Help }
};

const FrameDataFAQRoute = {
  faq: { screen: FrameDataFAQ }
}

const SupportRoute = {
  support: { screen: Support}
}

export default { MainRoutes, AboutRoute, HelpRoute, FrameDataFAQRoute, SupportRoute };
