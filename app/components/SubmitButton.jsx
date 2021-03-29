import React from "react";
import AppButton from "./forms/AppButton";
import {StyleSheet} from "react-native";
import {useFormikContext} from "formik";

function SubmitButton({title,color="red"}) {
  const {handleSubmit} = useFormikContext();

  return (
    <AppButton title={title} style={[styles.button,{backgroundColor:color}]} onPress={handleSubmit} />
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height:50,
    borderRadius: 25,
  },
});

export default SubmitButton;
