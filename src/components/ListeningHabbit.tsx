import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const TopMixCard = ({ item }: any) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.artwork }} style={styles.image} />
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.subtitle} numberOfLines={1}>
        {item.description}
      </Text>
    </View>
  );
};

export default TopMixCard;

const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: Colors.card,
    borderRadius: 8,
    overflow: "hidden",
    paddingBottom: 10,
  },
  image: {
    width: "100%",
    height: 160,
    marginBottom: 10,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 4,
  },
  subtitle: {
    color: "#B0B0B0",
    fontSize: 12,
  },
});
