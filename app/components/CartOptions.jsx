import React from "react";
import {View, StyleSheet, Text} from "react-native";
import colors from "../config/colors";
import AppButton from "./forms/AppButton";

function CartOptions({onPressBuy,onPressRemove}) {
  return (
    <View style={styles.container}>
      <AppButton
        title="Buy Now"
        style={{borderRightWidth: 2, borderColor: colors.white, width: "50%"}}
        color="dodgerblue"
        onPress={onPressBuy}
        />
      <AppButton
        title="Remove"
        style={{position: "absolute", alignSelf: "flex-end", width: "50%"}}
        color="red"
        onPress={onPressRemove}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    backgroundColor: colors.light,
  },
});

export default CartOptions;
