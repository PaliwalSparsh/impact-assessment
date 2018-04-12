import HomeStackNav from './stackNavigators/HomeStackNav';
import ConsultationsStackNav from './stackNavigators/ConsultationsStackNav';
import ProfileStackNav from './stackNavigators/ProfileStackNav';

const Routes = {
  Home: { screen: HomeStackNav },
  Consultations: { screen: ConsultationsStackNav },
  Profile: { screen: ProfileStackNav },
};

export default Routes;
