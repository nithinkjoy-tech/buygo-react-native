import React, {useState,useContext} from "react";
import { Text} from "react-native";
import Screen from "./../components/Screen";
import * as Yup from "yup";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/forms/AppForm";
import colors from "../config/colors";
import apiClient from "./../api/client";
import storage from "../auth/storage"
import CartContext from "../context/cartContext";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({navigation}) {
  const [error, setError] = useState();

  const {setIsLoggedIn, setIsAdmin}= useContext(CartContext)

  const loginUser = async data => {
    const response = await apiClient.post("/users/login", data);
    if (!response.ok) {
      return setError(response.data);
    }
    await storage.storeToken(response.data)
    setIsLoggedIn(true)
    setIsAdmin(await storage.getIsAdmin());
    navigation.navigate("Products")
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
