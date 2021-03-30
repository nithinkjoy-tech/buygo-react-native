import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import Screen from "./../components/Screen";
import * as Yup from "yup";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/forms/AppForm";
import colors from "../config/colors";
import apiClient from "./../api/client";
import Storage from "../auth/storage"

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const [error, setError] = useState();

  const loginUser = async data => {
    const response = await apiClient.post("/users/login", data);
    if (!response.ok) {
      return setError(response.data);
    }
    Storage.storeToken(response.data)
    console.log("login success")
  };

  return (
    <Screen>
      <AppForm
        initialValues={{email: "", password: ""}}
        onSubmit={values => loginUser(values)}
        validationSchema={validationSchema}
      >
        <Text style={{color: "red", padding: 5, fontSize: 24}}>{error}</Text>

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
