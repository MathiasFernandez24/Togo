import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TogoModel } from "../models/togo-model";

type State = {
  togoItems: TogoModel[];
};

type Action =
  | { type: "ADD_ITEM"; payload: TogoModel }
  | { type: "UPDATE_ITEM"; payload: TogoModel }
  | { type: "DELETE_ITEM"; payload: string }
  | { type: "SET_ITEMS"; payload: TogoModel[] };

const initialState: State = {
  togoItems: [],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, togoItems: [...state.togoItems, action.payload] };
    case "UPDATE_ITEM":
      return {
        ...state,
        togoItems: state.togoItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case "DELETE_ITEM":
      return {
        ...state,
        togoItems: state.togoItems.filter((item) => item.id !== action.payload),
      };
    case "SET_ITEMS":
      return { ...state, togoItems: action.payload };
    default:
      return state;
  }
};

const TogoContext = createContext<
  { state: State; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

export const TogoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const DatabaseName = "TogoDatabase";
  useEffect(() => {
    const loadItems = async () => {
      try {
        const savedItems = await AsyncStorage.getItem(DatabaseName);
        if (savedItems) {
          dispatch({ type: "SET_ITEMS", payload: JSON.parse(savedItems) });
        }
      } catch (e) {
        console.error("Failed to load items from storage", e);
      }
    };

    loadItems();
  }, []);

  useEffect(() => {
    const saveItems = async () => {
      try {
        await AsyncStorage.setItem(
          DatabaseName,
          JSON.stringify(state.togoItems)
        );
      } catch (e) {
        console.error("Failed to save items to storage", e);
      }
    };

    saveItems();
  }, [state.togoItems]);

  return (
    <TogoContext.Provider value={{ state, dispatch }}>
      {children}
    </TogoContext.Provider>
  );
};

export const useTogoContext = () => {
  const context = useContext(TogoContext);
  if (!context) {
    throw new Error("useTogoContext must be used within a TogoProvider");
  }
  return context;
};
