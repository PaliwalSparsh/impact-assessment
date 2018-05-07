import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DSColors from "../constants/DSColors";

type DSBannerProps = {
  children?: any,
  backgroundColor?: string,
  color?: string
};

const DSBanner = (props: DSBannerProps) => (
  <View style={[style.banner, { backgroundColor: props.backgroundColor }]}>
    <Text
      style={{
        color: props.color
      }}
    >
      {props.children}
    </Text>
  </View>
);

DSBanner.defaultProps = {
  children: undefined,
  backgroundColor: DSColors.bannerYellow,
  color: DSColors.black
};

const style: Object = StyleSheet.create({
  banner: {
    flex: 1
  }
});

export default DSBanner;
