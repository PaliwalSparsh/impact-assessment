// @flow

import * as React from "react";
import { View, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";
import DSBanner from "../../components/DSBanner";

/* constants */

type HomeProps = {
  actions: typeof actions
};

const Home = (props: HomeProps) => {
  return (
    <View>
      <DSBanner style={{flex: 1, height: 100}}>
        You are currently offline go online to recieve more consultation.
      </DSBanner>
    </View>
  );
}

/* style */

const styles:Object = StyleSheet.create({
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
