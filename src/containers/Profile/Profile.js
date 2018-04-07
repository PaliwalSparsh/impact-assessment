// @flow

"use strict"
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

/* constants */

type Props = {};

class Profile extends React.Component<Props, void> {
  constructor(props: Props) {
    super(props);
  };

  render(){
    return(
      <View style={styles.container}>
        <Text>Welcome to Profile</Text>
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

export default Profile;
