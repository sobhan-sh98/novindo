import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post('https://reqres.in/api/login', { email, password });
      setToken(response.data.token);
    } catch (err) {
      throw new Error('Login failed. Check your credentials.');
    }
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}