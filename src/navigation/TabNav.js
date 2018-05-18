import * as React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Routes from './routes';
import { Icon } from 'react-native-elements';
import DSColors from '../constants/DSColors';

// Note: TabNavigator returns a component
export default TabNavigator(Routes, {
	navigationOptions: ({ navigation }) => ({
		tabBarIcon: ({ focused, tintColor }) => {
			const { routeName } = navigation.state;
			let tabName: string;
			if (routeName === 'Services') {
				tabName = <Icon name="dashboard" />;
			} else if (routeName === 'Maps') {
				tabName = <Icon name="map" />;
			} else if (routeName === 'Compare') {
				tabName = <Icon name="reorder" />;
			}
			// You can return any component that you like here! We usually use an
			// icon component from react-native-vector-icons
			return <View>{tabName}</View>;
		},
	}),
	tabBarOptions: {
		activeTintColor: DSColors.secondary,
		inactiveTintColor: 'gray',
	},
	tabBarComponent: TabBarBottom,
	tabBarPosition: 'bottom',
	animationEnabled: false,
	swipeEnabled: false,
});
