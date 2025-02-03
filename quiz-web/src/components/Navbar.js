import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>React Quiz</h1>
      <button onClick={handleSignOut} style={styles.signOutButton}>
        Sign Out
      </button>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    background: "linear-gradient(135deg, #a4d8e1, #e0c3fc)",
    color: "#333",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontSize: "1.1rem",
    fontFamily: "Montserrat, sans-serif",
    position: "sticky",
    top: "0",
    zIndex: "100",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#3b3b3b", 
    cursor: "pointer",
  },

  signOutButton: {
    padding: "0.5rem 1rem",
    fontSize: "1.1rem",
    fontWeight: "600",
    background: "linear-gradient(90deg,rgb(237, 22, 22),rgb(199, 159, 129))",  
    color: "#ffffff",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "background 0.3s ease, transform 0.2s ease", 
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", 
    outline: "none",
    
  },
  link: {
    color: "#3b82f6",
    fontSize: "1.1rem",
    textDecoration: "none",
    "&:hover": {
      color: "#2a3b5c",
    },
  },
};
export default Navbar;
