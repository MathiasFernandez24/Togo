import AsyncStorage from "@react-native-async-storage/async-storage";
import { TogoCategoryModel } from "../models/TogoCategoryModel";

const DB_KEY = "TogoCategory";

export const getCategories = async (): Promise<TogoCategoryModel[]> => {
  const data = await AsyncStorage.getItem(DB_KEY);
  return data ? JSON.parse(data) : null;
};

export const addCategory = async (
  category: TogoCategoryModel
): Promise<void> => {
  const categories = await getCategories();
  categories.push(category);
  await AsyncStorage.setItem(DB_KEY, JSON.stringify(categories));
};

export const updateCategory = async (
  category: TogoCategoryModel
): Promise<void> => {
  let categories = await getCategories();
  categories = categories.map((cat) =>
    cat.id === category.id ? category : cat
  );
  await AsyncStorage.setItem(DB_KEY, JSON.stringify(categories));
};

export const deleteCategory = async (id: string): Promise<void> => {
  let categories = await getCategories();
  categories = categories.filter((cat) => cat.id !== id);
  await AsyncStorage.setItem(DB_KEY, JSON.stringify(categories));
};
