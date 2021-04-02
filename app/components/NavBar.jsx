import React, {useState, useContext, useEffect} from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { EvilIcons } from '@expo/vector-icons'; 
import {Badge} from "react-native-elements";
import {Ionicons} from "@expo/vector-icons";
import {Modal} from "react-native";
import {Button} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {Text} from "react-native";
import FilterContext from "./../context/filterContext";
import userApi from "../api/userApi";
import AppButton from "./forms/AppButton";
import storage from "../auth/storage";
import CartContext from './../context/cartContext';

function NavBar({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  const {minValue, setMinValue, maxValue, setMaxValue, setSearch,} = useContext(
    FilterContext
  );

  const {isLoggedIn,noOfCartItems,setNoOfCartItems}= useContext(CartContext)

  const getNoOfCartItems = async () => {
    if (!isLoggedIn) return console.log("returned") ;
    const data = await userApi.getCartItems();
    setNoOfCartItems(data.length);
  };
  
  useEffect(() => {
    getNoOfCartItems(); 
  }, [isLoggedIn]);
  


  return (
    <View style={styles.navbar}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          onChangeText={value => setSearch(value)}
        />
        <Ionicons
          style={[styles.search, {marginLeft: styles.input.width}]}
          name="search"
          size={30}
          color="white"
        />
      </View>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <Ionicons
          style={[styles.search, {marginLeft: styles.input.width + 50}]}
          name="filter"
          size={30}
          color="white"
        >
          Filter
        </Ionicons>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <>
          {isLoggedIn?<Ionicons 
            name="cart"
            color="white"
            size={30}
            style={[styles.search, {marginLeft: "83%"}]}
            onPress={()=>navigation.navigate("Cart")}
          >
            <Badge value={noOfCartItems} status="error" />
          </Ionicons>:<EvilIcons 
            name="navicon" 
            color="white"
            size={40}
            style={[styles.search, {marginLeft: "83%"}]}
            onPress={()=>navigation.openDrawer()} 
          >
          </EvilIcons>}
        </>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button
        title="close"
          onPress={() => {
            setMinValue(1000);
            setMaxValue(10000);
            setModalVisible(false);
          }}
        />
        <Text style={{marginBottom: 10}}>Select minimum and maximum price</Text>

        <Button
          style={{marginBottom: 10}}
          title="Apply"
          onPress={() => setModalVisible(false)}
        />

        <DropDownPicker
          items={[
            {label: "1000", value: 1000},
            {label: "3000", value: 3000},
            {label: "6000", value: 6000},
            {label: "9000", value: 9000},
            {label: "10000", value: 10000},
          ]}
          defaultValue={minValue}
          containerStyle={{height: 40, marginVertical: 20}}
          style={{backgroundColor: "#fafafa"}}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{backgroundColor: "#fafafa"}}
          onChangeItem={item => setMinValue(item.value)}
        />
        <DropDownPicker 
          items={[
            {label: "1000", value: 1000},
            {label: "3000", value: 3000},
            {label: "6000", value: 6000},
            {label: "9000", value: 9000},
            {label: "10000", value: 10000},
          ]}
          defaultValue={maxValue}
          containerStyle={{height: 40, marginBottom: 15}}
          style={{backgroundColor: "#fafafa"}}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{backgroundColor: "#fafafa"}}
          onChangeItem={item => setMaxValue(item.value)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 40,
    backgroundColor: "dodgerblue",
  },
  input: {
    backgroundColor: "dodgerblue",
    width: 114,
    height: 40,
    fontSize: 20,
    paddingLeft: 10,
  },
  search: {
    position: "absolute",
    backgroundColor: "dodgerblue",
    height: "100%",
    padding: 3,
  },
  modal: {
    position: "relative",
  },
});

export default NavBar;
