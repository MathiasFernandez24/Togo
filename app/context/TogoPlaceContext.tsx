import React, { createContext, useContext, useEffect, useState } from "react";
import { TogoPlaceModel } from "../models/TogoPlaceModel";
import {
  addTogoModel,
  deleteTogoModel,
  getTogoModels,
  updateTogoModel,
} from "../services/TogoPlaceService";

interface TogoPlaceContextType {
  togoPlaces: TogoPlaceModel[];
  addTogoPlace: (model: TogoPlaceModel) => Promise<void>;
  updateTogoPlace: (model: TogoPlaceModel) => Promise<void>;
  deleteTogoPlace: (id: string) => Promise<void>;
}

const TogoPlaceContext = createContext<TogoPlaceContextType | undefined>(
  undefined
);

export const useTogoPlace = () => {
  const context = useContext(TogoPlaceContext);
  if (!context) {
    throw new Error("useTogoModel must be used within a TogoModelProvider");
  }
  return context;
};

export const TogoPlaceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [togoPlace, setTogoPlace] = useState<TogoPlaceModel[]>([]);

  useEffect(() => {
    const loadTogos = async () => {
      const models = await getTogoModels();
      setTogoPlace(models);
    };
    loadTogos();
  }, []);

  const add = async (model: TogoPlaceModel) => {
    await addTogoModel(model);
    setTogoPlace([...togoPlace, model]);
  };

  const update = async (model: TogoPlaceModel) => {
    await updateTogoModel(model);
    setTogoPlace(togoPlace.map((m) => (m.id === model.id ? model : m)));
  };

  const remove = async (id: string) => {
    await deleteTogoModel(id);
    setTogoPlace(togoPlace.filter((m) => m.id !== id));
  };

  return (
    <TogoPlaceContext.Provider
      value={{
        togoPlaces: togoPlace,
        addTogoPlace: add,
        updateTogoPlace: update,
        deleteTogoPlace: remove,
      }}
    >
      {children}
    </TogoPlaceContext.Provider>
  );
};
