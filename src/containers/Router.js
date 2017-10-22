// components
import About from './About/';
import Help from './Help/';
import InitialLoading from './InitialLoading/';
import CharacterSelect from './CharacterSelect/';
import CharacterProfile from './CharacterProfile/';
import AttackDetails from '../components/AttackDetails/';
import FrameDataFAQ from './FrameDataFAQ/';
import Community from './Community/';

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

const CommunityRoute = {
  community: { screen: Community}
}

export default { MainRoutes, AboutRoute, HelpRoute, FrameDataFAQRoute, CommunityRoute };
