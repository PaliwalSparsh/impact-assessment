// @flow

import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

/* constants */

type Props = {
  count: number,
  actions: typeof actions
};

class Home extends React.Component<Props, void> {
  // it's only necessary to pass props into the constructor if you intend on
  // using this.props inside the constructor. After the constructor is invoked,
  // React attaches the props to the component from the outside.
  
  increase() {
    this.props.actions.increaseCount();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Home</Text>
        <Text>{this.props.count}</Text>
        <Button
          onPress={this.props.actions.increaseCount}
          title="Increase"
          color="#841584"
        />
        <Button
          onPress={this.props.actions.decreaseCount}
          title="Decrease"
          color="grey"
        />
      </View>
    );
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

export default connect(
  state => ({
    count: state.counter.count
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(Home);
