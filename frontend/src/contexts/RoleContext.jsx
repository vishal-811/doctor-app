import React, { createContext, useState, useContext } from "react";

// Create Context
const RoleContext = createContext();

// Role Provider Component
export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState("");

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

// Custom Hook to use Role Context
export const useRole = () => {
  return useContext(RoleContext);
};
