import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import Main from "../Main";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // If token is found, set user as logged in
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      }, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Login successful:", response.data);
      localStorage.setItem("token", response.data.token); // Store token
      localStorage.setItem("user", JSON.stringify(response.data.user)); // Store user info
      setIsLoggedIn(true); // Set user as logged in
    } catch (error) {
      setError(error.response?.data?.error || "Login failed");
    }
  };

  if (isLoggedIn) {
    return (
      <div>
        <Header /> {/* Render your header when logged in */}
        <Main />   {/* Render your main content when logged in */}
      </div>
    );
  }

  return (
    <main>
      <div className="form-container">
        <h2>Welcome, please login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email:</label>
            <input
              className="input-text"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password:</label>
            <input
              className="input-text"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </main>
  );
}