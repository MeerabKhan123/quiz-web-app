import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Welcome, {user.email}</h2>
        <p style={styles.text}>Roll Number: {user.rollNumber}</p>
        <button onClick={handleStartQuiz} style={styles.button}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f3f4f6",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    marginBottom: "1.5rem",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    background: "linear-gradient(135deg, #a4d8e1, #e0c3fc)",
    color: "#3b3b3b", 
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default Dashboard;