import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigation";
import CartContext from "./app/context/cartContext";
import storage from "./app/auth/storage";
import FlashMessage from "react-native-flash-message";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [noOfCartItems, setNoOfCartItems] = useState();

  const getIsLoggedIn = async () => {
    setIsLoggedIn(await storage.getUser());
  };

  const getIsAdmin = async () => {
    setIsAdmin(await storage.getIsAdmin());
  };

  useEffect(() => {
    getIsLoggedIn();
    getIsAdmin()
  }, []);

  return (
    <NavigationContainer>
      <CartContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          noOfCartItems,
          setNoOfCartItems,
          isAdmin,
          setIsAdmin,
        }}
      >
        <AuthNavigator />
      </CartContext.Provider>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
