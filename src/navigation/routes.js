import ServicesStackNav from './stackNavigators/ServicesStackNav';
import MapsStackNav from './stackNavigators/MapsStackNav';
import CompareStackNav from './stackNavigators/CompareStackNav';

const Routes = {
  Services: { screen: ServicesStackNav },
  Maps: { screen: MapsStackNav },
  Compare: { screen: CompareStackNav },
};

export default Routes;
