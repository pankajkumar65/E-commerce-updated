import React, { createContext, useContext, useState } from 'react';

// Create a context for the admin state
const AdminContext = createContext();

// Create a provider component
export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(""); // You can set the initial state based on sessionStorage or other criteria

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

// Custom hook to use the admin context
export const useAdmin = () => {
  return useContext(AdminContext);
};
