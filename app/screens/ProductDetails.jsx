import React, {useEffect, useState,useContext} from "react";
import {View, StyleSheet, Text, Image, ScrollView} from "react-native";
import Screen from "./../components/Screen";
import ReadMore from "../components/ReadMore";
import AppButton from "../components/forms/AppButton";
import productApi from "../api/productApi";
import handleCheckout from "../hooks/handleCheckout";
import userApi from "../api/userApi";
import storage from "../auth/storage";
import CartContext from "../context/cartContext";

function ProductDetails({navigation, route}) {
  const [mobile, setMobile] = useState(null);
  const [isAlreadyInCart, setIsAlreadyInCart] = useState(false);
  const [cartItems, setCartItems] = useState(null);
  const {mobileId} = route.params;

  const {setNoOfCartItems,noOfCartItems} = useContext(CartContext);

  handleBuy = () => {
    handleCheckout();
  };

  addToCart = async (mobileId, userId) => {
    const {status} = await userApi.addItemToCart(mobileId, userId);
    if(status ===200) setNoOfCartItems(noOfCartItems+1)
  };

  getMobileDetails = async () => {
    const mobile = await productApi.getMobileById(mobileId);
    setMobile(mobile);
  };

  getCartItems = async () => {
    const data = await userApi.getCartItems();
    setCartItems(data);
  };

  checkIfAlreadyInCart = () => {
    if (!cartItems) return
    const data = cartItems.filter(mobile => mobile._id === mobileId);
    if (data[0]) setIsAlreadyInCart(true);
  };

  useEffect(() => {
    getMobileDetails();
    getCartItems();
  }, []);

  useEffect(() => {
    checkIfAlreadyInCart();
  }, [mobile, cartItems]);

  if (!mobile) return null;

  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={{uri: mobile.imageUrl}} />
        <View style={{flex: 1}}>
          <Text style={styles.title}>{mobile.mobileName}</Text>
          <Text style={styles.feature}>{mobile.feature1}</Text>
          <Text style={styles.feature}>{mobile.feature2}</Text>
          <Text style={styles.feature}>{mobile.feature3}</Text>
          <Text style={styles.feature}>{mobile.feature4}</Text>
          <Text style={styles.price}>{mobile.price}</Text>
          <ReadMore>{mobile.description}</ReadMore>
          <View style={styles.buttonContainer}>
            <AppButton
              title="buy now"
              color="orangered"
              style={styles.button1Style}
              onPress={() => handleBuy()}
            />
            {isAlreadyInCart ? (
              <AppButton
                title="go to cart"
                color="orange"
                style={styles.button2Style}
                onPress={() => navigation.navigate("Cart")}
              />
            ) : (
              <AppButton
                title="add to cart"
                color="orange"
                style={styles.button2Style}
                onPress={async () => {
                  await addToCart(mobile._id, await storage.getUserId());
                  setIsAlreadyInCart(true)
                }}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
    marginVertical: 10,
  },
  feature: {
    marginLeft: 20,
    padding: 3,
    fontSize: 20,
  },
  price: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
  button1Style: {
    left: 15,
  },
  button2Style: {
    position: "absolute",
    alignSelf: "flex-end",
    right: 15,
  },
});

export default ProductDetails;
