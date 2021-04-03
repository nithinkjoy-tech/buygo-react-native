import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import CartScreen from './../screens/CartScreen';
import ProductsScreen from './../screens/ProductsScreen';
import ProductDetails from './../screens/ProductDetails';
import LoginScreen from "../screens/LoginScreen";
import ProductEditandAddScreen from './../screens/ProductEditandAddScreen';
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();

const CartNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Products" component={ProductsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />
    <Stack.Screen name="ProductEdit" component={ProductEditandAddScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator> 
);  

export default CartNavigator;   
 