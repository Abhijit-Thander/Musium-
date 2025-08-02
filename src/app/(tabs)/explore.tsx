// import Colors from "@/constants/Colors";
// import { StyleSheet, Text, TextInput, View, Image } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function TabTwoScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//         }}
//       >
//         <Image
//           source={require("@assets/images/musium.png")}
//           style={styles.img}
//         />
//         <Text style={styles.title}>Search</Text>
//       </View>
//       <TextInput
//         placeholder=" songs, artist, album, & more"
//         placeholderTextColor="#d7d7d7"
//         autoCapitalize="none"
//         style={styles.input}
//       />

//       <Text style={styles.genresTitle}>Your Top Genres</Text>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: Colors.background,
//   },
//   img: {
//     width: 40,
//     height: 30,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: Colors.accent,
//   },
//   input: {
//     color: "#000",
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     borderRadius: 18,
//     marginVertical: 16,
//     backgroundColor: "#fff",
//   },
//   genresTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: Colors.textSecondary,
//     marginBottom: 8,
//   },
// });

// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Image,
//   FlatList,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import React, { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Colors from "@/constants/Colors";

// const genres = [
//   { id: "1", name: "Pop", color: "#FF7F50" },
//   { id: "2", name: "Hip-Hop", color: "#6A5ACD" },
//   { id: "3", name: "Lo-fi", color: "#00CED1" },
//   { id: "4", name: "Classical", color: "#FFA07A" },
// ];

// const trending = [
//   { id: "1", title: "Blinding Lights", artist: "The Weeknd" },
//   { id: "2", title: "Watermelon Sugar", artist: "Harry Styles" },
//   { id: "3", title: "Stay", artist: "Justin Bieber" },
// ];

// const artists = [
//   { id: "1", name: "Arijit Singh", img: require("@assets/images/arijit.jpeg") },
//   {
//     id: "2",
//     name: "Shreya Ghoshal",
//     img: require("@assets/images/shreya.jpeg"),
//   },
//   { id: "3", name: "KK", img: require("@assets/images/kk.jpeg") },
// ];

// export default function ExploreScreen() {
//   const [search, setSearch] = useState("");

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Header & Search */}
//         <View style={styles.header}>
//           <Text style={styles.title}>Explore</Text>
//           <TextInput
//             placeholder="Search songs, artists, genres..."
//             placeholderTextColor="#ccc"
//             value={search}
//             onChangeText={setSearch}
//             style={styles.searchInput}
//           />
//         </View>

//         {/* Genres */}
//         <Text style={styles.sectionTitle}>Genres</Text>
//         <FlatList
//           horizontal
//           data={genres}
//           showsHorizontalScrollIndicator={false}
//           keyExtractor={(item) => item.id}
//           contentContainerStyle={{ gap: 12 }}
//           renderItem={({ item }) => (
//             <View style={[styles.genreBox, { backgroundColor: item.color }]}>
//               <Text style={styles.genreText}>{item.name}</Text>
//             </View>
//           )}
//         />

//         {/* Trending Songs */}
//         <Text style={styles.sectionTitle}>Trending Now</Text>
//         {trending.map((item) => (
//           <View key={item.id} style={styles.songCard}>
//             <Text style={styles.songTitle}>{item.title}</Text>
//             <Text style={styles.songArtist}>{item.artist}</Text>
//           </View>
//         ))}

//         {/* Top Artists */}
//         <Text style={styles.sectionTitle}>Top Artists</Text>
//         <FlatList
//           horizontal
//           data={artists}
//           showsHorizontalScrollIndicator={false}
//           keyExtractor={(item) => item.id}
//           contentContainerStyle={{ gap: 16 }}
//           renderItem={({ item }) => (
//             <TouchableOpacity style={styles.artistCard}>
//               <Image source={item.img} style={styles.artistImage} />
//               <Text style={styles.artistName}>{item.name}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.background,
//     paddingHorizontal: 16,
//   },
//   header: {
//     marginTop: 12,
//     marginBottom: 16,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: Colors.accent,
//     marginBottom: 12,
//   },
//   searchInput: {
//     backgroundColor: "#fff",
//     borderRadius: 16,
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     fontSize: 16,
//     color: "#000",
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: "600",
//     color: "#fff",
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   genreBox: {
//     borderRadius: 14,
//     paddingVertical: 20,
//     paddingHorizontal: 24,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   genreText: {
//     color: "#fff",
//     fontWeight: "600",
//     fontSize: 16,
//   },
//   songCard: {
//     backgroundColor: "#1a1a1a",
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 12,
//   },
//   songTitle: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#fff",
//   },
//   songArtist: {
//     fontSize: 14,
//     color: "#ccc",
//   },
//   artistCard: {
//     alignItems: "center",
//   },
//   artistImage: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     marginBottom: 6,
//   },
//   artistName: {
//     color: "#fff",
//     fontSize: 14,
//     fontWeight: "500",
//   },
// });

import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 48) / 2; // 2 columns + 16px padding + 8px gap

const topGenres = [
  {
    id: "1",
    title: "Kpop",
    color: "#A2FF86",
    image: require("@assets/images/kpop.jpeg"),
  },
  {
    id: "2",
    title: "Indie",
    color: "#FF80C0",
    // image: require("@assets/images/india.jpg"),
  },
  {
    id: "3",
    title: "R&B",
    color: "#7BD3EA",
    // image: require("@assets/images/rnb.jpg"),
  },
  {
    id: "4",
    title: "Pop",
    color: "#FF914D",
    // image: require("@assets/images/pop.jpg"),
  },
];

const browseAll = [
  {
    id: "1",
    title: "Made for You",
    color: "#00DFA2",
    // image: require("@assets/images/made.jpg"),
  },
  {
    id: "2",
    title: "RELEASED",
    color: "#C084FC",
    // image: require("@assets/images/released.jpg"),
  },
  {
    id: "3",
    title: "Music Charts",
    color: "#FEC260",
    // image: require("@assets/images/chart.jpg"),
  },
  {
    id: "4",
    title: "Podcasts",
    color: "#FF6D60",
    // image: require("@assets/images/podcast.jpg"),
  },
  {
    id: "5",
    title: "Bollywood",
    color: "#FFC94A",
    // image: require("@assets/images/bollywood.jpg"),
  },
  {
    id: "6",
    title: "Pop Fusion",
    color: "#3AB0FF",
    // image: require("@assets/images/fusion.jpg"),
  },
];

export default function ExploreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
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
          placeholder=" Songs, Artists, Podcasts & More"
          placeholderTextColor="#888"
          style={styles.searchInput}
        />

        {/* Top Genres */}
        <Text style={styles.sectionTitle}>Your Top Genres</Text>
        <View style={styles.grid}>
          {topGenres.map((item) => (
            <View
              key={item.id}
              style={[styles.card, { backgroundColor: item.color }]}
            >
              <Image source={item.image} style={styles.cardImage} />
              <Text style={styles.cardText}>{item.title}</Text>
            </View>
          ))}
        </View>

        {/* Browse All */}
        <Text style={styles.sectionTitle}>Browse All</Text>
        <View style={styles.grid}>
          {browseAll.map((item) => (
            <View
              key={item.id}
              style={[styles.card, { backgroundColor: item.color }]}
            >
              {/* <Image source={item.image} style={styles.cardImage} /> */}
              <Text style={styles.cardText}>{item.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
  },
  searchInput: {
    marginTop: 16,
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#2A2A2A",
    color: "#fff",
    fontSize: 16,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
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
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  card: {
    width: CARD_WIDTH,
    borderRadius: 14,
    padding: 12,
    marginBottom: 16,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  cardText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    marginTop: 8,
  },
  cardImage: {
    width: "100%",
    height: 80,
    borderRadius: 12,
  },
});
