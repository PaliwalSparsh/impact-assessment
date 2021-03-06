// @flow

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapView } from 'expo';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
/* constants */

type Props = {};

class Maps extends React.Component<Props, void> {
	constructor(props: Props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					initialRegion={{
						latitude: 61.92,
						longitude:  25.74,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
				>
          <MapView.UrlTile
            urlTemplate={'http://859e061a.ngrok.io/{z}/{x}/{y}.png'}
          />
        </MapView>
				<Button
					icon={<Icon name="code" color="#ffffff" />}
					backgroundColor="#03A9F4"
					buttonStyle={styles.button}
					title="Freeze"
				/>
			</View>
		);
	}
}

/* style */

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
	},
	card: {
		borderRadius: 10,
	},
	map: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	button: {
		borderRadius: 10,
		marginLeft: 0,
		marginRight: 0,
		marginBottom: 15,
	},
});

export default Maps;
