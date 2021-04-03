import React, {useEffect, useState} from "react";
import {View, StyleSheet, FlatList} from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import CartOptions from "../components/CartOptions";
import userApi from "../api/userApi";
import MobileContext from "../context/mobileContext";

function CartScreen({navigation}) {
  const [mobiles, setMobiles] = useState(null);

  const getMobiles = async () => {
    let data = await userApi.getCartItems();
    setMobiles(data);
  };

  useEffect(() => {
    getMobiles();
  }, []);

  handlePress = mobileId => {
    navigation.navigate("ProductDetails", {mobileId});
  };

  return (
    <MobileContext.Provider value={{mobiles, setMobiles}}>
      <Screen style={styles.container}>
        <View style={{flex: 1, backgroundColor: "#f8f4f4"}}>
          <FlatList
            data={mobiles}
            keyExtractor={item => item._id.toString()}
            renderItem={({item}) => (
              <Card
                title={item.mobileName}
                imageUrl={item.imageUrl}
                subtitle={item.price}
                onPress={() => handlePress(item._id)}
                mobileId={item._id}
                CartOptions={CartOptions}
              />
            )}
          />
        </View>
      </Screen>
    </MobileContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default CartScreen;
