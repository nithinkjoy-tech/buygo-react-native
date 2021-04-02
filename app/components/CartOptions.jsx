import React, {useContext} from "react";
import {View, StyleSheet} from "react-native";
import colors from "../config/colors";
import AppButton from "./forms/AppButton";
import handleCheckout from "./../hooks/handleCheckout";
import userApi from "../api/userApi";
import CartContext from "../context/cartContext";
import MobileContext from "../context/mobileContext";

function CartOptions({mobileId}) {
  const {mobiles, setMobiles} = useContext(MobileContext);

  const {setNoOfCartItems} = useContext(CartContext);

  return (
    <View style={styles.container}>
      <AppButton
        title="Buy Now"
        style={{borderRightWidth: 2, borderColor: colors.white, width: "50%"}}
        color="dodgerblue"
        onPress={handleCheckout}
      />
      <AppButton
        title="Remove"
        style={{position: "absolute", alignSelf: "flex-end", width: "50%"}}
        color="red"
        onPress={async () => {
          await userApi.removeCartItem(mobileId);
          const data = mobiles.filter(mobile => mobile._id !== mobileId);
          setMobiles(data);
          console.log("zz", data);
          setNoOfCartItems(data.length);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    backgroundColor: colors.light,
  },
});

export default CartOptions;
