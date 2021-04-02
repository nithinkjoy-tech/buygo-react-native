import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";

import ProductsScreen from "./../screens/ProductsScreen";
import LoginScreen from "./../screens/LoginScreen";
import RegisterScreen from "./../screens/RegisterScreen";
import NavBar from "./../components/NavBar";
import CartScreen from './../screens/CartScreen';
import CartNavigator from './CartNavigator';

const Drawer = createDrawerNavigator();

const AuthNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="CartNavigator" component={CartNavigator} />
    <Drawer.Screen name="Login" component={LoginScreen} />
    <Drawer.Screen name="Register" component={RegisterScreen} />
  </Drawer.Navigator> 
);  

export default AuthNavigator;  
