import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { TogoCategoryModel } from "../models/TogoCategoryModel";
import { TogoPlaceModel } from "../models/TogoPlaceModel";
import { useTogoCategory } from "../context/TogoCategoryContext";
import { useTogoPlace } from "../context/TogoPlaceContext";

const Home = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const { addTogoCategory, updateTogoCategory } = useTogoCategory();
  const { addTogoPlace, updateTogoPlace } = useTogoPlace();

  const newTogoPlace: TogoPlaceModel = {
    id: Date.now().toString(),
    title: title,
    detail: details,
    latitude: 123,
    longitude: 456,
    photoPath: "no path",
    createdAt: "ya",
    updatedAt: "ya",
    orderNumber: "1",
    categoryId: "0",
  };

  const newTogoCategory: TogoCategoryModel = {
    id: Date.now().toString(),
    title: title,
    color: "red",
    createdAt: "ya",
    updatedAt: "ya",
    orderNumber: "0",
  };
  const createPlace = () => {
    addTogoPlace(newTogoPlace);
  };
  const updatePlace = () => {
    updateTogoPlace(newTogoPlace);
  };
  const createCategory = () => {
    addTogoCategory(newTogoCategory);
  };
  const updateCategory = () => {
    updateTogoCategory(newTogoCategory);
  };

  return (
    <View style={{ gap: 10, flex: 1, padding: 30 }}>
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
        // onPress={onHandleCategotyButton}
      />
      <View style={{ flex: 1 }} />
      <Button title="Crear Category" onPress={createCategory} />
      <Button title="Actualizar Category" onPress={updateCategory} />
      <Button title="Crear Place" onPress={createPlace} />
      <Button title="Actualizar Place" onPress={updatePlace} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
