import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

function Card({title, subtitle,onPress,imageUrl}) {
  return (
    <TouchableWithoutFeedback onPress={onPress} >
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: imageUrl}} />
        <View style={[styles.details,{paddingLeft:styles.image.width}]} >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.feature}>${subtitle}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom:15,
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
    fontSize:25,
    fontWeight:"bold"
  },
  feature: {
    padding: 10,
    fontSize:20,
    color: "green",
  },
  details: {
    position: "absolute",
  }
});

export default Card;
