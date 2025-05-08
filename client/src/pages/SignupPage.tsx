// client/src/pages/SignupPage.tsx

import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const auth = useContext(AuthContext);
  const nav = useNavigate();

  if (!auth) throw new Error("AuthContext not found");
  const { signup, login } = auth;

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup({ username, email, password });
      await login({ email, password }); // auto-login after signup
      nav("/profile");
    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
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
        <button type="submit">Signup</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};
