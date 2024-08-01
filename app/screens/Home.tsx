import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import useLocalDataBase from "../hooks/useLocalDataBase";
import { TogoModel } from "../models/togo-model";

const Home = () => {
  const { initToGoDB, getToGoDB, addToGoDB, deleteDB } = useLocalDataBase();
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const onhandleAdd = () => {
    addToGoDB({
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
    });
  };

  const refresh = async () => {
    const data = await getToGoDB();
    setData(data);
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
      <Button title="DELETE DB" onPress={deleteDB} />
      <Button title="OPEN DB" onPress={initToGoDB} />
      <Button title="READ DB" onPress={getToGoDB} />
      <Button title="ADD DB" onPress={onhandleAdd} />
      <Button title="REFRESH" onPress={refresh} />
      {data.map((item) => {
        return (
          <View
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
      })}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
