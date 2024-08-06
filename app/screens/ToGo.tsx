import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useTogoPlace } from "../context/TogoPlaceContext";
import { useTogoCategory } from "../context/TogoCategoryContext";

const ToGo = () => {
  // const { data } = useLocalDataBase();
  // console.log(data);
  const { togoPlaces, deleteTogoPlace } = useTogoPlace();
  const { togoCategories, deleteTogoCategory } = useTogoCategory();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "pink",
        paddingTop: 30,
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1, backgroundColor: "green" }}>
        {togoPlaces.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => {
                deleteTogoPlace(item.id);
              }}
              key={item.id}
              style={{
                margin: 10,
                backgroundColor: "red",
              }}
            >
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
              <Text>{item.detail}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{ flex: 1, backgroundColor: "yellow" }}>
        {togoCategories.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => {
                deleteTogoCategory(item.id);
              }}
              key={item.id}
              style={{
                margin: 10,
                backgroundColor: "red",
              }}
            >
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default ToGo;

const styles = StyleSheet.create({});
