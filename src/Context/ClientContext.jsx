import React, { createContext, useContext, useState } from 'react';

// Create a context for the admin state
const ClientContext = createContext();

// Create a provider component
export const ClientProvider = ({ children }) => {
    const [client, setClient] = useState(""); // You can set the initial state based on sessionStorage or other criteria

    return (
        <ClientContext.Provider value={{ client, setClient }}>
            {children}
        </ClientContext.Provider>
    );
};

// Custom hook to use the admin context
export const useClient = () => {
    return useContext(ClientContext);
};
