import AsyncStorage from "@react-native-async-storage/async-storage";
import { TogoPlaceModel } from "../models/TogoPlaceModel";

const DB_KEY = "TogoPlace";

export const getTogoModels = async (): Promise<TogoPlaceModel[]> => {
  const data = await AsyncStorage.getItem(DB_KEY);
  return data ? JSON.parse(data) : [];
};

export const addTogoModel = async (model: TogoPlaceModel): Promise<void> => {
  const models = await getTogoModels();
  models.push(model);
  await AsyncStorage.setItem(DB_KEY, JSON.stringify(models));
};

export const updateTogoModel = async (model: TogoPlaceModel): Promise<void> => {
  let models = await getTogoModels();
  models = models.map((m) => (m.id === model.id ? model : m));
  await AsyncStorage.setItem(DB_KEY, JSON.stringify(models));
};

export const deleteTogoModel = async (id: string): Promise<void> => {
  let models = await getTogoModels();
  models = models.filter((m) => m.id !== id);
  await AsyncStorage.setItem(DB_KEY, JSON.stringify(models));
};
