import React from "react";
import {View, StyleSheet,Text} from "react-native";
import  AppReadMore from "react-native-read-more-text";

function ReadMore({children}) {
  _renderTruncatedFooter = handlePress => {
    return (
      <Text style={{color: "dodgerblue", marginTop: 5}} onPress={handlePress}>
        more
      </Text>
    );
  }; 

  _renderRevealedFooter = handlePress => {
    return (
      <Text style={{color: "dodgerblue", marginTop: 5}} onPress={handlePress}>
        less
      </Text>
    );
  };

  return (
    <View style={{marginLeft: 20, padding: 3}}>
      <AppReadMore
        numberOfLines={3}
        renderTruncatedFooter={_renderTruncatedFooter}
        renderRevealedFooter={_renderRevealedFooter}
      >
        <Text style={styles.description}>{children}</Text>
      </AppReadMore>
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: 20,
  },
});

export default ReadMore;
