import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import Maps from '../../containers/Maps/Maps';

export default StackNavigator(
  {
    Maps: {
      screen: Maps,
    },
  },
  {
    headerMode: 'none'
  },
);
