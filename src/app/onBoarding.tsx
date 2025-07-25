import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function Onboarding() {
  const handleGetStarted = async () => {
    await AsyncStorage.setItem("hasLaunched", "true");
    router.replace("/(tabs)");
  };

  return (
    <View style={styles.container}>
      <Image source={require("@assets/images/ball2.png")} style={styles.ball} />

      <View style={styles.imageBox}>
        <Image
          source={require("@assets/images/img_girl.png")}
          style={styles.mainImage}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          From the <Text style={styles.highlight}>latest</Text> to the
        </Text>
        <Text style={styles.text}>
          <Text style={styles.highlight}>greatest </Text>hits, play your
        </Text>
        <Text style={styles.text}>
          favorite tracks on <Text style={styles.highlight}>Musium</Text>
        </Text>
        <Text style={styles.text}>now!</Text>

        <View style={styles.line}>
          <View style={styles.line1} />
          <View style={styles.line2} />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={handleGetStarted}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#39C0D4",
  },
  ball: {
    position: "absolute",
    top: height * 0.1,
    right: 10,
    resizeMode: "contain",
    zIndex: 1,
    opacity: 0.2,
    width: 100,
    height: 100,
  },
  imageBox: {
    marginTop: "26%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  mainImage: {
    // width: width * 0.9,
    // height: height * 0.7,
    resizeMode: "cover",
  },
  textContainer: {
    backgroundColor: "#000",
    position: "absolute",
    bottom: 0,
    paddingVertical: 24,
    alignItems: "center",
    width: "100%",
    height: 320,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    zIndex: 2,
  },
  text: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 2,
  },
  highlight: {
    color: "#39C0D4",
    fontWeight: "700",
  },
  line: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    gap: 10,
  },
  line1: {
    height: 4,
    width: 50,
    backgroundColor: "#39C0D4",
    borderRadius: 50,
  },
  line2: {
    height: 4,
    width: 50,
    backgroundColor: "#ffffff",
    borderRadius: 50,
  },
  button: {
    backgroundColor: "#39C0D4",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 50,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
