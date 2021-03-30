import React, {useEffect, useState} from "react";
import {View, StyleSheet, FlatList, Text} from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import CartOptions from "../components/CartOptions";
import userApi from '../api/userApi';

function CartScreen(props) {
  const [mobiles, setMobiles] = useState(null);

  const getMobiles = async () => {
    let data = await userApi.getCartItems();
    console.log("ff",data)
    setMobiles(data);
  };

  useEffect(() => { 
    getMobiles();
  }, []);

  handlePress = item => {
    console.log(item, "pressed");
  };

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default CartScreen;
