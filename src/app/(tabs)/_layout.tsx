import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // animation: "shift",
        tabBarActiveTintColor: Colors.tabIconActive,
        tabBarInactiveTintColor: Colors.tabIconInactive,
        headerShown: false,
        headerStyle: {},
        tabBarStyle: {
          backgroundColor: "#050B0E",
          borderTopWidth: 0.2,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: "Library",
          tabBarIcon: ({ color }) => (
            <Ionicons name="folder-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
