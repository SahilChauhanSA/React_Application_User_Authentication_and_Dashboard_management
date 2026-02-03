import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  // Get all users
  const getUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
  };

  // Save all users
  const saveUsers = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const login = ({ email, password }) => {
    const users = getUsers();
    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (!existingUser) return false;
    setUser(existingUser);
    localStorage.setItem("currentUser", JSON.stringify(existingUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  const register = ({ name, email, mobile, password }) => {
    const users = getUsers();
    const existing = users.find((u) => u.email === email);
    if (existing) return false; // Email already exists
    const newUser = { name, email, mobile, password, photo: "" };
    users.push(newUser);
    saveUsers(users);
    setUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    return true;
  };

  const updateProfile = (data) => {
    setUser(data);
    localStorage.setItem("currentUser", JSON.stringify(data));

    const users = getUsers();
    const updatedUsers = users.map((u) =>
      u.email === data.email ? data : u
    );
    saveUsers(updatedUsers);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
