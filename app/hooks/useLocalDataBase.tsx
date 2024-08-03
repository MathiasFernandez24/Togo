// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useState } from "react";
// import { TogoModel } from "../models/togo-model";

// const dataBaseName = "ToGo_database";

// /**
//  * @readonly This Hook uptade localDB and Context data
//  */

// // const [data, setData] = useState<TogoModel[]>([]);

// // const DataContext = createContext([]);
// // type DataProviderType = {
// //   children: ReactNode;
// // };
// // export const DataProvider = (props: DataProviderType) => {
// //   const { children } = props;
// //   return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
// // };

// const useLocalDataBase = () => {
//   const [data, setData] = useState([]);

//   const initToGoDB = async () => {
//     console.log("");
//     try {
//       const isDataBaseCreated = await AsyncStorage.getItem(dataBaseName);
//       if (isDataBaseCreated === null) {
//         const togoData: TogoModel[] = [];
//         console.log("#-creating new DB");
//         await AsyncStorage.setItem(dataBaseName, JSON.stringify(togoData));
//         console.log("#-new DB is already");
//       } else {
//         console.log("#-DB exist");
//       }
//     } catch (error: any) {
//       console.log(error.message);
//     }
//   };

//   const getToGoDB = async () => {
//     console.log("");
//     try {
//       const ToGoDB = await AsyncStorage.getItem(dataBaseName);
//       if (ToGoDB !== null) {
//         const ToGoDB_Parsed = JSON.parse(ToGoDB);
//         console.log("#-get DB whit data");
//         console.log(ToGoDB_Parsed);
//         console.log("#-get DB whit data END");
//         setData(ToGoDB_Parsed);
//       }
//       console.log("#-get DB NO DATA");
//     } catch (error: any) {
//       console.log(error.message);
//     }
//   };

//   const addToGoDB = async (toGoItem: TogoModel) => {
//     console.log("");
//     try {
//       console.log("#- DATA", data);
//       const newData = [...data, toGoItem];
//       await AsyncStorage.setItem(dataBaseName, JSON.stringify(newData));
//       console.log("#-add item new DB is already");
//       setData(newData);
//     } catch (error: any) {
//       console.log(error.message + "---");
//     }
//   };

//   const deleteDB = () => {
//     console.log("");
//     AsyncStorage.removeItem(dataBaseName);
//     setData([]);
//     console.log("#- DELETE DB");
//   };
//   return { initToGoDB, getToGoDB, addToGoDB, deleteDB, data };
// };

// export default useLocalDataBase;
