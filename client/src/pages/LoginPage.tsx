// client/src/pages/LoginPage.tsx

import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const auth = useContext(AuthContext);
  const nav = useNavigate();

  if (!auth) throw new Error("AuthContext not found");
  const { login } = auth;

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login({ email, password });
      nav("/profile");
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.response?.data?.errorMessage || "Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <p>
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};
