// @flow

'use strict';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DSColors from "../../constants/DSColors";
/* constants */

type Props = {};

class Compare extends React.Component<Props, void> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Compare</Text>
      </View>
    );
  }
}

/* style */

const styles = StyleSheet.create({
  container: {
    backgroundColor: DSColors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default Compare;
