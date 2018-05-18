import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import Compare from '../../containers/Compare/Compare';
import DSColors from '../../constants/DSColors';

export default StackNavigator(
  {
    Compare: {
      screen: Compare,
    },
  },
  {
    initialRouteName: 'Compare',
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
