import AsyncStorage from "@react-native-async-storage/async-storage";
import { TogoModel } from "../models/togo-model";

const dataBaseName = "ToGo_database";

/**
 * @readonly This Hook uptade localDB and Context data
 */
const useLocalDataBase = () => {
  const initToGoDB = async () => {
    console.log("");
    try {
      const isDataBaseCreated = await AsyncStorage.getItem(dataBaseName);
      if (isDataBaseCreated === null) {
        const togoData: TogoModel[] = [];
        console.log("#-creating new DB");
        await AsyncStorage.setItem(dataBaseName, JSON.stringify(togoData));
        console.log("#-new DB is already");
      } else {
        console.log("#-DB exist");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const getToGoDB = async (): Promise<TogoModel[]> => {
    console.log("");
    try {
      const ToGoDB = await AsyncStorage.getItem(dataBaseName);
      if (ToGoDB !== null) {
        const ToGoDB_Parsed = JSON.parse(ToGoDB);
        console.log("#-get DB whit data");
        console.log(ToGoDB_Parsed);
        console.log(Array.isArray(ToGoDB_Parsed));
        console.log("#-get DB whit data END");
        return ToGoDB_Parsed;
      }
      console.log("#-get DB NO DATA");
      return [];
    } catch (error: any) {
      console.log(error.message);
    }
  };
  const addToGoDB = async (toGoItem: TogoModel) => {
    console.log("");
    try {
      const data = await getToGoDB();
      console.log("#- DATA", data);
      const newData = [...data, toGoItem];
      await AsyncStorage.setItem(dataBaseName, JSON.stringify(newData));

      console.log("#-add item new DB is already");
    } catch (error: any) {
      console.log(error.message + "---");
    }
  };
  const deleteDB = () => {
    console.log("");
    AsyncStorage.removeItem(dataBaseName);
    console.log("#- DELETE DB");
  };
  return { initToGoDB, getToGoDB, addToGoDB, deleteDB };
};

export default useLocalDataBase;
