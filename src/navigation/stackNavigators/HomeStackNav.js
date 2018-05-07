import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../../containers/Home/Home';

export default StackNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#242730',
        elevation: 2,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
