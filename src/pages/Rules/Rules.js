import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/QuizData/QuizDataContext";
import "./Rules.css";

export const Rules = () => {
  const navigate = useNavigate();
  const {quizDispatch} = useQuiz();
  const startQuizHandler = () => {
    const quizId = sessionStorage.getItem("categoryId")
    navigate(`/quiz/${quizId}`)
    quizDispatch({type: "RESET"})
  }
  return (
    <div className="content-container">
      <div className="center-content">
        <div className="rules-content normal-shadow">
          <h1 className="rules-header">Rules</h1>
          <p>1. There are 5 questions in total.</p>
          <p>2. Each question carries ten mark.</p>
          <p>3. There won't be negative marking for wrong answer.</p>
          <p>
            4. You won't be able to go back to previous questions after
            attempting so please choose carefully.
          </p>
          <p>5. Click Submit to complete the quiz.</p>
          <button className="btn btn-primary btn-rules" onClick={startQuizHandler}>Continue</button>
        </div>
      </div>
    </div>
  );
};
