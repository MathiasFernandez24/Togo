import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useTogoActions } from "../context/TogoActions";
import { useTogoContext } from "../context/TogoContext";
import { TogoModel } from "../models/togo-model";

const Home = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const { addItem, updateItem, deleteItem } = useTogoActions();

  const { state } = useTogoContext();

  const itemNuevo: TogoModel = {
    id: id,
    categoryId: "0",
    createdAt: "ya",
    updatedAt: "ya",
    title: name,
    detail: "nice place....",
    latitude: 123,
    longitude: 456,
    photoPath: "no path",
  };
  const onhandleAdd = () => {
    addItem(itemNuevo);
  };
  const onhandleUpdate = () => {
    updateItem(itemNuevo);
  };

  return (
    <View style={{ gap: 10 }}>
      <View style={{ height: 100 }} />
      <Text>Home</Text>
      <TextInput
        value={id}
        onChangeText={setId}
        style={{ backgroundColor: "grey", fontSize: 30 }}
        placeholder="id"
      />
      <TextInput
        value={name}
        onChangeText={setName}
        style={{ backgroundColor: "grey", fontSize: 30 }}
        placeholder="name"
      />
      <Button title="Crear nuevo" onPress={onhandleAdd} />
      <Button title="Actualizar" onPress={onhandleUpdate} />
      {state.togoItems.map((item) => {
        return (
          <TouchableOpacity
            onPress={() => {
              deleteItem(item.id);
            }}
            key={item.id}
            style={{
              margin: 10,
              width: 100,
              backgroundColor: "red",
            }}
          >
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
