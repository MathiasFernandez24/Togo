import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ModalDropdownBase from "../components/modalDropdown/modalDropdownBase/modalDropdownBase";
import { useTogoCategory } from "../context/TogoCategoryContext";
import { useTogoPlace } from "../context/TogoPlaceContext";
import { TogoCategoryModel } from "../models/TogoCategoryModel";
import { TogoPlaceModel } from "../models/TogoPlaceModel";

const Home = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleTogoCategory, setTitleTogoCategory] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [categorySelected, setCategorySelected] = useState<TogoCategoryModel>();
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
    title: titleTogoCategory,
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
    if (titleTogoCategory !== "") {
      addTogoCategory(newTogoCategory);
      setTitleTogoCategory("");
    }
  };
  const updateCategory = () => {
    updateTogoCategory(newTogoCategory);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const { togoCategories, deleteTogoCategory } = useTogoCategory();
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
        title={`Categoria: ${categorySelected?.title}`}
        onPress={() => setModalVisible(true)}
      />
      <View style={{ flex: 1 }} />
      <Button title="Crear Category" onPress={createCategory} />
      <Button title="Actualizar Category" onPress={updateCategory} />
      <Button title="Crear Place" onPress={createPlace} />
      <Button title="Actualizar Place" onPress={updatePlace} />
      <ModalDropdownBase visibility={modalVisible} onClose={closeModal}>
        <View style={{ flexDirection: "row", margin: 20 }}>
          <TextInput
            value={titleTogoCategory}
            onChangeText={setTitleTogoCategory}
            style={{ backgroundColor: "lightblue", fontSize: 30, flex: 1 }}
            placeholder="Categoria nueva"
            numberOfLines={1}
          />
          <TouchableOpacity
            style={{ padding: 10, backgroundColor: "red" }}
            onPress={createCategory}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        {togoCategories.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setCategorySelected(item);
                closeModal();
              }}
              onLongPress={() => {
                deleteTogoCategory(item.id);
              }}
              key={item.id}
              style={{
                margin: 10,
                backgroundColor:
                  item.id === categorySelected?.id ? "red" : "pink",
              }}
            >
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ModalDropdownBase>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
