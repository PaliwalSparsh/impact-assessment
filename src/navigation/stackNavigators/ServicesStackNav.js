import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import Services from '../../containers/Services/Services';
import DSColors from '../../constants/DSColors';

export default StackNavigator(
  {
    Services: {
      screen: Services,
    },
  },
  {
    initialRouteName: 'Services',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: DSColors.primary,
        elevation: 0,
      },
      headerTintColor: DSColors.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
