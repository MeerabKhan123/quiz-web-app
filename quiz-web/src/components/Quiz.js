import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const quizQuestions = [
  {
    question: "What is React?",
    options: [
      "A JavaScript library for building user interfaces",
      "A CSS framework",
      "A database management system",
      "A programming language",
    ],
    answer: "A JavaScript library for building user interfaces",
  },
  {
    question :"Who developed React?",
    options :[
        "Google" ,
        " Facebook (Meta)",
        "Microsoft",
        "Twitter",  
    ],
    answer:"Facebook (Meta)",
  },
  {
    question :"What is the latest stable version of React as of 2024?",
    options :[
        "15" ,
        "16",
        "17",
        "18",  
    ],
    answer:"18",
  },
  {
    question :"*What is JSX in React?",
    options :[
        "JavaScript Extension" ,
        "Java XML",
        " A templating language",
        "A CSS preprocessor",  
    ],
    answer:"JavaScript Extension",
  },
  {
    question :"Which method is used to create a new React component?",
    options :[
        "React.createClass() " ,
        "React.createComponent() ",
        "React.Component",
        " React.createElement()  ",  
    ],
    answer:" React.createElement()  ",
  },
  {
    question :"React is based on which architecture?",
    options :[
        "MVC" ,
        "MVVM  ",
        "Component-based architecture ",
        "Monolithic architecture  ",  
    ],
    answer:"Component-based architecture ",
  },
  {
    question :"Which function component syntax is correct?",
    options :[
        "function MyComponent() { return <h1>Hello</h1>; }  " ,
        " const MyComponent = () => <h1>Hello</h1>;  ",
        "Both a and b ",
        "None of the above  ",  
    ],
    answer:"Both a and b ",
  },
  {
    question :"What is the primary purpose of props in React?",
    options :[
        "To store local component state " ,
        "To pass data from parent to child component ",
        " To manage side effects  ",
        "To handle HTTP requests",  
    ],
    answer:"To pass data from parent to child component  ",
  },
  {
    question :"How are props passed in a React component?",
    options :[
        "<Component props=' value' /> " ,
        "<Component {props} />",
        "<Component propName='value' />  ",
        " <Component.propName = 'value'/>",  
    ],
    answer:"<Component propName='value' />  ",
  },
  {
    question :"Can props be modified inside a child component?",
    options :[
        "YES" ,
        "NO",
        
    ],
    answer:"NO",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
        alert(`Quiz finished! Your score is ${score + 1}/${quizQuestions.length}`);
      navigate("/dashboard");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Question {currentQuestion + 1}</h2>
        <p style={styles.question}>{quizQuestions[currentQuestion].question}</p>
        <div style={styles.options}>
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(option)}
              style={{
                ...styles.optionButton,
                backgroundColor:
                  selectedOption === option ? "#3b82f6" : "#f3f4f6",
                color: selectedOption === option ? "#ffffff" : "#000000",
              }}
            >
              {option}
            </button>
          ))}
        </div>
        <button onClick={handleNext} style={styles.nextButton}>
          {currentQuestion < quizQuestions.length - 1 ? "Next" : "Finish"}
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
    maxWidth: "600px",
  },
  heading: {
    color: "#3b 3b3b",
    fontSize: "1.9rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  question: {
    fontSize: "1.25rem",
    marginBottom: "1.5rem",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  optionButton: {
    padding: "0.75rem",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
    textAlign: "left",
  },
  nextButton: {
    width: "100%",
    padding: "0.75rem",
    background: "linear-gradient(135deg, #a4d8e1, #e0c3fc)",
    color: "#3b 3b3b",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "1.5rem",
  },
};

export default Quiz;