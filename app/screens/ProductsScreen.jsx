import React, {useEffect, useState, useContext} from "react";
import {View, StyleSheet, FlatList, Text,RefreshControl} from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import NavBar from "../components/NavBar";
import apiClient from "../api/client";
import FilterContext from "./../context/filterContext";
import AppButton from "../components/forms/AppButton";
import colors from "../config/colors";
import storage from "../auth/storage";
import CartContext from "../context/cartContext";

function ProductsScreen({navigation}) {
  const [mobiles, setMobiles] = useState(null);
  const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(10000);
  const [search, setSearch] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const {isAdmin}=useContext(CartContext)

  const getMobiles = async () => {
    let {data} = await apiClient.get("/mobiles");
    if (!data) return console.log("error fetching data");
    data = data.filter(
      value => value.price >= minValue && value.price <= maxValue
    );
    if (search)
      data = data.filter(item =>
        item.mobileName.toLowerCase().includes(search)
      );
    setMobiles(data);
    setRefreshing(false)
  };

  useEffect(() => {
    getMobiles();
  }, [minValue, maxValue, search]);

  handlePress = mobileId => {
    if(isAdmin) return navigation.navigate("ProductEdit", {mobileId});
    navigation.navigate("ProductDetails", {mobileId});
  };

  return (
    <FilterContext.Provider
      value={{
        minValue,
        setMinValue,
        maxValue,
        setMaxValue,
        setSearch,
        mobiles,
        setMobiles,
      }}
    >
      <Screen style={styles.container}>
        <NavBar navigation={navigation} />
        {isAdmin && (
          <AppButton
            title="Add Mobile"
            color={colors.secondary}
            style={{width: "100%", marginVertical: 5}}
            onPress={() =>navigation.navigate("ProductEdit")}
          />
        )}
        <View style={{flex: 1, backgroundColor: "#f8f4f4"}}>
          <FlatList
            data={mobiles}
            keyExtractor={item => item._id.toString()}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={()=>{
              setRefreshing(true)
              getMobiles()
            }} />}
            renderItem={({item}) => (
              <Card
                title={item.mobileName}
                imageUrl={item.imageUrl}
                subtitle={item.price}
                onPress={() => handlePress(item._id)}
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

export default ProductsScreen;
