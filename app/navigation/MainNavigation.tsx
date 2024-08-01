import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import Home from "../screens/Home";
import ToGo from "../screens/ToGo";

const MainNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ToGo" component={ToGo} />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
