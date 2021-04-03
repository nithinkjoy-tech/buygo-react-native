import React, {useEffect, useState} from "react";
import { Text} from "react-native";
import Screen from "./../components/Screen";
import * as Yup from "yup";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/forms/AppForm";
import colors from "../config/colors";
import apiClient from "./../api/client";
import { showMessage } from "react-native-flash-message";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
  name: Yup.string().required().label("Name"),
  address: Yup.string().required().label("Address"),
});

function RegisterScreen({navigation}) {
  const [error, setError] = useState();

  const registerUser = async data => {
    const response = await apiClient.post("/users/register", data);
    if (!response.ok) {
      return setError(response.data);
    }
    showMessage({
      message: "You have successfully Registerd, You can now login",
      type: "info",
    })
    navigation.navigate("Login")
  };

  return (
    <Screen>
      <AppForm
        initialValues={{email: "", password: "", name: "", address: ""}}
        onSubmit={values => registerUser(values)}
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
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="home"
          name="address"
          placeholder="Address"
        />
        <SubmitButton title="Register" color={colors.secondary} />
      </AppForm>
    </Screen>
  );
}

export default RegisterScreen;
