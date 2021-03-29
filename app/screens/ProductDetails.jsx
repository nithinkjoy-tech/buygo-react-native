import React from "react";
import {View, StyleSheet, Text, Image, ScrollView} from "react-native";
import Screen from "./../components/Screen";
import ReadMore from "../components/ReadMore";
import AppButton from "../components/forms/AppButton";

function ProductDetails(props) {

  handleBuy=()=>{

  }

  return (
    <Screen style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={require("../assets/mosh.jpg")} />
        <View style={{flex: 1}}>
          <Text style={styles.title}>hello</Text>
          <Text style={styles.feature}>new feature</Text>
          <Text style={styles.feature}>new feature</Text>
          <Text style={styles.feature}>new feature</Text>
          <Text style={styles.feature}>new feature</Text>
          <Text style={styles.price}>$100 </Text>
          <ReadMore>
            If you are a travel blogger, gamer, entertainment seeker, or a
            person who loves a high-end personal device, then the Redmi 8 has
            been created to meet your needs. This smartphone features a 15.8-cm
            (6.22) Dot Notch Display, a 12 MP + 2 MP AI Dual Camera, and a 5000
            mAh High-capacity Battery to offer detailed views of the stunning
            photos that you can click all day long without running out of
            battery life.
          </ReadMore>
          <View style={styles.buttonContainer}>
            <AppButton
              title="buy now"
              color="orangered"
              style={styles.button1Style}
              onPress={()=>handleBuy()}
            />
            <AppButton
              title="add to cart"
              color="orange"
              style={styles.button2Style}
            />
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
