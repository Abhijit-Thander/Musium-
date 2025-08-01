import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const ContinueListening = ({ item }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.artwork }}
        style={{ width: 60, height: 60 }}
        resizeMode="cover"
      />
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {item.title}
      </Text>
    </View>
  );
};

export default ContinueListening;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    borderRadius: 6,
    overflow: "hidden",
    width: "48%",
    backgroundColor: Colors.card,
    paddingRight: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    marginTop: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    flex: 1,
  },
});
