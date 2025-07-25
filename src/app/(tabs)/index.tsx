import ContinueListening from "@/components/ContinueListening";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { continueListening } from "@assets/data/continue";
import { topMixes } from "@assets/data/TopMixes";

import Colors from "@/constants/Colors";
import TopMixCard from "@/components/TopMixCard";

export default function HomePageScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.background }}
      edges={["top"]}
    >
      <View style={styles.container}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          {/* Left side: profile image and name */}
          <View style={styles.left}>
            <View style={styles.imgBox}>
              {/* Optional: use real image */}
              <Image
                source={require("@assets/images/avatar.avif")}
                style={styles.avatar}
              />
            </View>
            <View style={styles.greeting}>
              <Text style={styles.subtitle}>Welcome back !</Text>
              <Text style={styles.title}>Puchki</Text>
            </View>
          </View>

          {/* Right side: icons */}
          <View style={styles.right}>
            <Ionicons name="stats-chart" size={22} color="#ffffff" />
            <Ionicons name="settings-outline" size={24} color="#ffffff" />
          </View>
        </View>
        <Text style={styles.continuetitle}>Continue Listening</Text>
        <View style={styles.continueBox}>
          <FlatList
            data={continueListening}
            renderItem={({ item }) => <ContinueListening item={item} />}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
            contentContainerStyle={{ gap: 10, marginTop: 6 }}
          />
        </View>

        <View>
          <Text style={styles.continuetitle}>Your Top Mixes</Text>
          <FlatList
            data={topMixes}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TopMixCard item={item} />}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 14, marginTop: 8 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    // backgroundColor: Colors.background,
    paddingTop: 6,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  imgBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: "hidden",
    marginRight: 12,
    backgroundColor: "#14CF93",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  greeting: {
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.textSecondary,
  },
  subtitle: {
    fontSize: 13,
    color: Colors.textPrimary,

    marginBottom: 2,
    fontWeight: "bold",
  },
  continuetitle: {
    fontSize: 22,
    marginTop: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  continueBox: {
    marginTop: 10,
    // marginBottom: 10,
    height: 200,
    // backgroundColor: Colors.card,
  },

  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 12,
  },
});
