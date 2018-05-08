import HomeStackNav from './stackNavigators/HomeStackNav';
import MapsStackNav from './stackNavigators/MapsStackNav';
import ProfileStackNav from './stackNavigators/ProfileStackNav';

const Routes = {
  Home: { screen: HomeStackNav },
  Maps: { screen: MapsStackNav },
  Profile: { screen: ProfileStackNav },
};

export default Routes;
