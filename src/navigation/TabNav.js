
import * as React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Routes from './routes';

// Note: TabNavigator returns a component
export default TabNavigator(
  Routes ,
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let tabName:string;
        if (routeName === 'Home') {
          tabName = 'Home';
        } else if (routeName === 'Consultations') {
          tabName = 'Consult';
        } else if (routeName === 'Profile') {
          tabName = 'Profile';
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <View>
            <Text>{tabName}</Text>
          </View>
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
