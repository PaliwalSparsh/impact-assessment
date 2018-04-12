import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import Profile from '../../containers/Profile/Profile';

export default StackNavigator(
  {
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'Profile',
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
