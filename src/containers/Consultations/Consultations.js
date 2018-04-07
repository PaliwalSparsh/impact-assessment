// @flow

"use strict"
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

/* constants */

type Props = {};

class Consultations extends React.Component<Props, void> {
  constructor(props: Props) {
    super(props);
  };

  render() {
    return(
      <View style={styles.container}>
        <Text>Welcome to Consultations</Text>
      </View>
    )
  }
}

/* style */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20
  }
});

export default Consultations;
