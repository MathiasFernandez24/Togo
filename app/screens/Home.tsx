import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
// import useLocalDataBase from "../hooks/useLocalDataBase";
import { TogoModel } from "../models/togo-model";
import { useTogoActions } from "../context/TogoActions";
// import { useDataContext } from "../store/dataProvider";

const Home = () => {
  // const { data, initToGoDB, getToGoDB, addToGoDB, deleteDB } =
  //   useLocalDataBase();
  const [name, setName] = useState("");
  const { addItem, updateItem, deleteItem } = useTogoActions();
  // const valor = useDataContext();

  // console.log("valor");
  // console.log(valor);
  // console.log("valor FIN");

  // useEffect(() => {
  //   getToGoDB();
  // }, []);

  const onhandleAdd = () => {
    const itemNuevo: TogoModel = {
      id: name,
      category: {
        id: "002",
        color: "red",
        name: name,
      },
      createdAt: "ya",
      updatedAt: "ya",
      title: "Bendita locura",
      detail: "nice place....",
      latitude: 123,
      longitude: 456,
      photoPath: "no path",
    };

    addItem(itemNuevo);
    // addToGoDB({
    //   id: name,
    //   category: {
    //     id: "002",
    //     color: "red",
    //     name: name,
    //   },
    //   createdAt: "ya",
    //   updatedAt: "ya",
    //   title: "Bendita locura",
    //   detail: "nice place....",
    //   latitude: 123,
    //   longitude: 456,
    //   photoPath: "no path",
    // });
  };

  return (
    <View style={{ gap: 10 }}>
      <View style={{ height: 100 }} />
      <Text>Home</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={{ backgroundColor: "grey", fontSize: 30 }}
      />
      <Button title="DELETE DB" onPress={() => {}} />
      <Button title="OPEN DB" onPress={() => {}} />
      <Button title="READ DB" onPress={() => {}} />
      <Button title="ADD DB" onPress={onhandleAdd} />
      {/* <Button title="REFRESH" onPress={refresh} /> */}
      {/* {data.map((item) => {
        return (
          <View
            key={item.id}
            style={{
              height: 30,
              margin: 10,
              width: 100,
              backgroundColor: "red",
            }}
          >
            <Text>{item.id}</Text>
          </View>
        );
      })} */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
