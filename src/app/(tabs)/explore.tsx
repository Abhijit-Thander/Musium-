import Colors from "@/constants/Colors";
import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("@assets/images/musium.png")}
          style={styles.img}
        />
        <Text style={styles.title}>Search</Text>
      </View>

      <TextInput
        placeholder=" songs, artist, album, & more"
        placeholderTextColor="#d7d7d7"
        autoCapitalize="none"
        style={styles.input}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.background,
  },
  img: {
    width: 40,
    height: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.accent,
  },
  input: {
    color: "#000",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 50,
    marginVertical: 16,
    backgroundColor: "#fff",
  },
});
