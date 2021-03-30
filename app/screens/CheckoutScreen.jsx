import React, {useEffect, useState} from "react";
import {View, StyleSheet, Text, Alert} from "react-native";
import Screen from "./../components/Screen";
import colors from "../config/colors";
import apiClient from "./../api/client";
import Card from "./../components/Card";
import AppButton from "../components/forms/AppButton";
import handleCheckout from './../hooks/handleCheckout';

function CheckoutScreen({
  name,
  address,
  productId = "5f7c13de8f3e5c55c0dfdb21",
}) {
  const [mobile, setMobile] = useState();

  const getMobile = async () => {
    const {data} = await apiClient.get(`/${productId}`);
    console.log(data);
    setMobile(data);
  };

  handlePress = item => {
    console.log(item, "pressed");
  };

  useEffect(() => {
    getMobile();
  }, []);

  

  return (
    <Screen style={styles.container}>
      <View style={styles.customerDetails}>
        <Text style={styles.name}>Nithin K Joy</Text>
        <Text style={styles.address}>my address</Text>
      </View>
      {mobile?<Card
        title={mobile?.mobileName}
        imageUrl={mobile?.imageUrl}
        subtitle={mobile?.price}
        onPress={() => handlePress(mobile?._id)}
      />:<Text>Loading...</Text>}
      <AppButton
        title="Checkout"
        color="green"
        style={{left: 20}}
        onPress={handleCheckout}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.light,
    flex: 1,
  },
  customerDetails: {
    height: "25%",
    backgroundColor: colors.white,
    marginBottom: 10,
  },
  productDetails: {
    marginVertical: 20,
    height: "20%",
    backgroundColor: colors.white,
  },
  name: {
    paddingTop: 10,
    fontSize: 20,
    paddingLeft: 10,
  },
  address: {
    paddingTop: 10,
    fontSize: 18,
    paddingLeft: 10,
  },
});

export default CheckoutScreen;
