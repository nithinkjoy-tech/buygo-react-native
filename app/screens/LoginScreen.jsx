import React from "react";
import {View, StyleSheet} from "react-native";
import Screen from "./../components/Screen";
import * as Yup from "yup"
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/forms/AppForm";
import colors from "../config/colors";

const validationSchema=Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{email: "", password: ""}}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              name="email"
              keyboardType="email-address"
              placeholder="Email"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <SubmitButton title="Login" color={colors.primary} />
      </AppForm>
    </Screen>
  );
}

export default LoginScreen;
