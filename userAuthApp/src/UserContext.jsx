// UserContext.jsx
import { createContext, useState } from "react";

// 1. Create context
export const UserContext = createContext();

// 2. Create provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
