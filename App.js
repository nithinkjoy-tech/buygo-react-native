import {StatusBar} from "expo-status-bar";
import React, {useEffect,useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import ProductsScreen from "./app/screens/ProductsScreen";
import Screen from "./app/components/Screen";
import ProductDetails from "./app/screens/ProductDetails";
import CheckoutScreen from "./app/screens/CheckoutScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import CartOptions from "./app/components/CartOptions";
import CartScreen from "./app/screens/CartScreen";
import ProductEditandAddScreen from "./app/screens/ProductEditandAddScreen";
import AuthNavigator from "./app/navigation/AuthNavigation";
import {NavigationContainer} from "@react-navigation/native";
import CartContext from "./app/context/cartContext";
import storage from "./app/auth/storage";
import userApi from "./app/api/userApi";
import FlashMessage from "react-native-flash-message";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [noOfCartItems, setNoOfCartItems] = useState();

  const getIsLoggedIn = async () => {
    setIsLoggedIn(await storage.getUser());
  };

  useEffect(() => {
    getIsLoggedIn();
  }, []);

  return (
    <NavigationContainer>
      <CartContext.Provider value={{isLoggedIn,setIsLoggedIn,noOfCartItems,setNoOfCartItems,isAdmin,setIsAdmin}} >
        <AuthNavigator />
      </CartContext.Provider>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
