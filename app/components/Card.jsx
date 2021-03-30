import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";

function Card({title,mobileId, subtitle, onPress, imageUrl, CartOptions}) {
  return (
    <View style={{borderWidth: 1, borderColor: colors.white}}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            styles.container,
            CartOptions && {marginBottom: 0, marginTop: 15},
          ]}
        >
          <Image style={styles.image} source={{uri: imageUrl}} />
          <View style={[styles.details, {paddingLeft: styles.image.width}]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.feature}>${subtitle}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {CartOptions && <CartOptions mobileId={mobileId} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 15,
  },
  image: {
    overflow: "hidden",
    height: 150,
    width: 150,
    resizeMode: "cover",
  },
  title: {
    padding: 10,
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
  },
  feature: {
    padding: 10,
    fontSize: 20,
    color: "green",
  },
  details: {
    position: "absolute",
  },
});

export default Card;
