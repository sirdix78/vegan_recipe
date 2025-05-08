// client/src/context/AuthContext.tsx

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

interface AuthContextType {
  authToken: string | null;
  user: User | null; // Adjusted to use the User type
  login: (credentials: { email: string; password: string }) => Promise<void>;
  signup: (credentials: {
    username: string;
    email: string;
    password: string;
  }) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState<string | null>(
    localStorage.getItem("authToken")
  );
  const [user, setUser] = useState(null);

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`, {
      email,
      password,
    });
    localStorage.setItem("authToken", res.data.authToken);
    setAuthToken(res.data.authToken);
    await authenticateUser();
  };

  const signup = async ({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) => {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/signup`, {
      username,
      email,
      password,
    });
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setAuthToken(null);
    setUser(null);
  };

  const authenticateUser = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) return;

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/auth/verify`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setUser(res.data.payload);
    } catch (err) {
      logout();
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
