import React from "react";
import {View, StyleSheet} from "react-native";
import ErrorMessage from "./ErrorMessage";
import AppTextInput from "../TextInput";
import {useFormikContext} from "formik";

function AppFormField({name,...otherProps}) {
  const {setFieldTouched, handleChange, errors, touched,values} = useFormikContext();

  return (
    <View>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        value={(values[name]).toString()}
        {...otherProps} 
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}


export default AppFormField;
