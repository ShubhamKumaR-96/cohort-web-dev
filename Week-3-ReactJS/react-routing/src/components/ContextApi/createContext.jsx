import { createContext, useState } from "react";

export const BulbContext = createContext();

export const BulbProvider = ({ children }) => {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <BulbContext.Provider value={{ bulbOn, setBulbOn }}>
      {children}
    </BulbContext.Provider>
  );
};
