import React from "react";
import {View, StyleSheet, Text, TouchableWithoutFeedback} from "react-native";

function AppButton({title, color, style, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.button, {backgroundColor: color}, style]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 130,
    height: 45,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    textTransform: "uppercase",
  },
});

export default AppButton;
