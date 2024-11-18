import React from "react";
import { useState } from "react";
const LoginUseState = () => {
  const [username, setUserName] = useState("");
  const [usepassword, setUsePassword] = useState("");
  const [ilLoading, setIsLooading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setLoggedIs] = useState(false);

  const login = ({ username, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin" && password === "admin") {
          resolve();
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 2000);
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLooading(true);
    try {
      await login({ username, password: usepassword });
      setLoggedIs(true);
      setIsLooading(false);
    } catch (error) {
      setError(`Invalid Username or Password: ${error.message}`);
      setIsLooading(false);
      setUserName("");
      setUsePassword("");
    }
  };

  const Logout = () => {
    setLoggedIs(false);
    setIsLooading(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {username}</h1>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={submit}>
          {error && <p style={{ color: "tomato" }}>{error}</p>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUserName(e.currentTarget.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={usepassword}
            onChange={(e) => setUsePassword(e.currentTarget.value)}
          />
          <button type="submit" disabled={ilLoading}>
            {ilLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginUseState;
