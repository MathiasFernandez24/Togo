import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useTogoActions } from "../context/TogoActions";
import { useTogoContext } from "../context/TogoContext";
import { TogoModel } from "../models/togo-model";

const Home = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const { addItem, updateItem } = useTogoActions();

  const { state } = useTogoContext();

  const itemNuevo: TogoModel = {
    id: Date.now().toString(),
    title: title,
    detail: "nice place....",
    latitude: 123,
    longitude: 456,
    photoPath: "no path",
    createdAt: "ya",
    updatedAt: "ya",
    orderNumber: "1",
    categoryId: "0",
  };
  const onhandleAdd = () => {
    addItem(itemNuevo);
  };
  const onhandleUpdate = () => {
    updateItem(itemNuevo);
  };
  const onHandleCategotyButton = () => {};

  return (
    <View style={{ gap: 10, flex: 1 }}>
      <View style={{ height: 50 }} />
      <Text>Home</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={{ backgroundColor: "grey", fontSize: 30 }}
        placeholder="Nombre del lugar"
        numberOfLines={1}
      />
      <TextInput
        value={details}
        onChangeText={setDetails}
        style={{
          backgroundColor: "grey",
          fontSize: 20,
          width: 200,
          height: 200,
          textAlign: "left",
          textAlignVertical: "top",
        }}
        placeholder="id"
        multiline
        maxLength={100}
      />
      <Text>categoria:</Text>
      <Button
        title="(Nombre categoria default)"
        onPress={onHandleCategotyButton}
      />
      <View style={{ flex: 1 }} />
      <Button title="Crear nuevo" onPress={onhandleAdd} />
      <Button title="Actualizar" onPress={onhandleUpdate} />
      {/* {state.togoItems.map((item) => {
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
      })} */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
