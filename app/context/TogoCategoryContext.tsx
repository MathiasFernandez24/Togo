import React, { createContext, useContext, useEffect, useState } from "react";
import { TogoCategoryModel } from "../models/TogoCategoryModel";
import {
  addCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../services/TogoCategoryService";

interface TogoCategoryContextType {
  togoCategories: TogoCategoryModel[];
  addTogoCategory: (category: TogoCategoryModel) => Promise<void>;
  updateTogoCategory: (category: TogoCategoryModel) => Promise<void>;
  deleteTogoCategory: (id: string) => Promise<void>;
}

const TogoCategoryContext = createContext<TogoCategoryContextType | undefined>(
  undefined
);

export const useTogoCategory = () => {
  const context = useContext(TogoCategoryContext);
  if (!context) {
    throw new Error(
      "useTogoCategory must be used within a TogoCategoryProvider"
    );
  }
  return context;
};

export const TogoCategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [togoCategory, setTogoCategory] = useState<TogoCategoryModel[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      const categories = await getCategories();
      setTogoCategory(categories);
    };
    loadCategories();
  }, []);

  const add = async (category: TogoCategoryModel) => {
    await addCategory(category);
    setTogoCategory([...togoCategory, category]);
  };

  const update = async (category: TogoCategoryModel) => {
    await updateCategory(category);
    setTogoCategory(
      togoCategory.map((cat) => (cat.id === category.id ? category : cat))
    );
  };

  const remove = async (id: string) => {
    await deleteCategory(id);
    setTogoCategory(togoCategory.filter((cat) => cat.id !== id));
  };

  return (
    <TogoCategoryContext.Provider
      value={{
        togoCategories: togoCategory,
        addTogoCategory: add,
        updateTogoCategory: update,
        deleteTogoCategory: remove,
      }}
    >
      {children}
    </TogoCategoryContext.Provider>
  );
};
