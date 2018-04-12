import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import Consultations from '../../containers/Consultations/Consultations';

export default StackNavigator(
  {
    Consultations: {
      screen: Consultations,
    },
  },
  {
    initialRouteName: 'Consultations',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'gray',
        elevation: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
