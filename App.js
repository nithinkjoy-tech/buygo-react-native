import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View} from "react-native";
import ProductsScreen from "./app/screens/ProductsScreen";
import Screen from "./app/components/Screen";
import ProductDetails from "./app/screens/ProductDetails";
import CheckoutScreen from "./app/screens/CheckoutScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import CartOptions from "./app/components/CartOptions";
import CartScreen from './app/screens/CartScreen';

export default function App() {
  return (
    <View style={styles.container}> 
      <ProductsScreen /> 
    </View>
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
