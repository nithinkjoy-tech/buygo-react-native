import React, {useContext} from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Alert, View, StyleSheet, Button} from "react-native";
import ProductsScreen from "./../screens/ProductsScreen";
import LoginScreen from "./../screens/LoginScreen";
import RegisterScreen from "./../screens/RegisterScreen";
import NavBar from "./../components/NavBar";
import CartScreen from "./../screens/CartScreen";
import CartNavigator from "./CartNavigator";
import CartContext from "./../context/cartContext";
import storage from "../auth/storage";

const Drawer = createDrawerNavigator();
 
const AuthNavigator = () => {
  const {isLoggedIn,setIsLoggedIn, setIsAdmin} = useContext(CartContext);

  const handleLogout = ({navigation}) => {
    return (
      <View
        style={styles.container}
      >
        <Button
          title="Logout"
          onPress={async () => {
            await storage.removeToken();
            setIsLoggedIn(false);
            setIsAdmin(false)
            navigation.navigate("Products");
          }}
        />
      </View>
    );
  };

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={CartNavigator} />
      {isLoggedIn ? (
        <Drawer.Screen name="Logout" component={handleLogout} />
      ) : (
        <React.Fragment>
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Register" component={RegisterScreen} />
        </React.Fragment>
      )}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
})

export default AuthNavigator;
