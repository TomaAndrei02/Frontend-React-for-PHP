import { useState, useEffect } from "react";
import imgHeader from "./images/kids_rock.png";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // If token is found, user is logged in
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token
    localStorage.removeItem("user");  // Remove user info
    setIsLoggedIn(false); // Update the state to reflect logout
    window.location.reload();
  };

  return (
    <header className="header">
      <h1 className="header_title">CLASS LIST</h1>
      <img src={imgHeader} className="img_header" alt="kids-rocker" />
      
      {/* Conditionally render Login/Logout based on isLoggedIn */}
      {isLoggedIn &&
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      }
    </header>
  );
}
