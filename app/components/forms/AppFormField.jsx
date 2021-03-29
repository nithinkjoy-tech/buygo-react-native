import React from "react";
import {View, StyleSheet} from "react-native";
import ErrorMessage from "./ErrorMessage";
import AppTextInput from "../TextInput";
import {useFormikContext} from "formik";

function AppFormField({name,...otherProps}) {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

  return (
    <View style={styles.container}>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppFormField;
