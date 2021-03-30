import { Alert} from "react-native";

export default handleCheckout = () => {
    Alert.alert("Confirm", "Are you sure want to checkout", [
      {
        text: "Yes",
        onPress: () => {
            
            Alert.alert("Successfully ordered this item")},
      },
      {
        text: "No",
        style: "cancel",
      },
    ]);
  };