import React, { useState } from "react";
import { createContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export const CategoryContext = createContext({});

const CategoryProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  const [subCat, setSubCat] = useState<any>([]);
  const [categoriesData, setCategoriesData] = useState<any>();
  return (
    <CategoryContext.Provider
      value={{
        subCat,
        setSubCat,
        open,
        setOpen,
        categoriesData,
        setCategoriesData,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;

//test
