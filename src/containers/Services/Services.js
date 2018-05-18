// @flow

import * as React from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import DSColors from "../../constants/DSColors";

/* constants */

type ServicesProps = {
  actions: typeof actions
};

class Services extends React.Component<ServicesProps, void> {
  constructor(props: ServicesProps) {
    super(props);
  }

  _onPressButton() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.servicesHeader}>SERVICES</Text>
        <TouchableHighlight onPress={this._onPressButton}>
          <Text style={styles.servicesContent}>GET SAWLOG PRICES</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

/* style */

const styles:Object = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DSColors.white
  },
  servicesContent:{
    fontSize: 15,
    color: DSColors.black
  },
  servicesHeader: {
    fontSize: 40,
    color: DSColors.secondary,
    margin: 10,
    fontWeight: "800"
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
)(Services);
