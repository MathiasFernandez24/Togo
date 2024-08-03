import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
// import useLocalDataBase from "../hooks/useLocalDataBase";
import { useTogoActions } from "../context/TogoActions";
import { useTogoContext } from "../context/TogoContext";

const ToGo = () => {
  // const { data } = useLocalDataBase();
  // console.log(data);
  const { state } = useTogoContext();
  const { addItem, updateItem, deleteItem } = useTogoActions();

  return (
    <View style={{ flex: 1, backgroundColor: "pink" }}>
      {state.togoItems.map((item) => {
        return (
          <TouchableOpacity
            onPress={() => {
              deleteItem(item.id);
            }}
            key={item.id}
            style={{
              height: 30,
              margin: 10,
              width: 100,
              backgroundColor: "red",
            }}
          >
            <Text>{item.id}hola</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ToGo;

const styles = StyleSheet.create({});
