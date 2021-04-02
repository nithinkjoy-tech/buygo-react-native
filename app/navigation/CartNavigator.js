import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import CartScreen from './../screens/CartScreen';
import ProductsScreen from './../screens/ProductsScreen';
import ProductDetails from './../screens/ProductDetails';

const Stack = createStackNavigator();

const CartNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Products" component={ProductsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />
    <Stack.Screen name="Cart" component={CartScreen} />
  </Stack.Navigator> 
);  

export default CartNavigator;   
 