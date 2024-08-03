import { useTogoContext } from "./TogoContext";
import { TogoModel } from "../models/togo-model";

export const useTogoActions = () => {
  const { dispatch } = useTogoContext();

  const addItem = (item: TogoModel) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const updateItem = (item: TogoModel) => {
    dispatch({ type: "UPDATE_ITEM", payload: item });
  };

  const deleteItem = (id: string) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  return { addItem, updateItem, deleteItem };
};
