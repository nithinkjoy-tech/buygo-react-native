import React, {useEffect, useState} from "react";
import {View, StyleSheet, FlatList, Text} from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import NavBar from "../components/NavBar";
import ListItemSeparator from "../components/ListItemSeperator";
import apiClient from "../api/client";
import FilterContext from "./../context/filterContext";
import CartOptions from "../components/CartOptions";

function CartScreen(props) {
  const [mobiles, setMobiles] = useState(null);
  const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(10000);
  const [search, setSearch] = useState(null);

  const getMobiles = async () => {
    let {data} = await apiClient.get("/mobiles");
    data = data.filter(
      value => value.price >= minValue && value.price <= maxValue
    );
    if (search)
      data = data.filter(item =>
        item.mobileName.toLowerCase().includes(search)
      );
    setMobiles(data);
  };

  useEffect(() => {
    getMobiles();
  }, [minValue, maxValue, search]);

  handlePress = item => {
    console.log(item, "pressed");
  };

  return (
    <FilterContext.Provider
      value={{minValue, setMinValue, maxValue, setMaxValue, setSearch}}
    >
      <Screen style={styles.container}>
        <NavBar />
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
                CartOptions={CartOptions}
              />
            )}
          />
        </View>
      </Screen>
    </FilterContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default CartScreen;
