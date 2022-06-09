import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/QuizData/QuizDataContext";
import "./Results.css";

export const Results = () => {
  const {
    quizState: { result, totalScore },
    quizDispatch
  } = useQuiz();
  const category = sessionStorage.getItem("category");
  const navigate = useNavigate();
  const goBackHandler = () => {
      quizDispatch({
        type: "RESET"
      })
      navigate("/")
  }
  return (
    <div className="content-container">
      <div className="center-content">
        <div className="results-box normal-shadow">
          <div className="results-header">
            <h4>{category}</h4>
            <h3>Final Score : {totalScore}/50</h3>
          </div>
          {console.log(result)}
          {result.map((ques, index) => {
            return (
              <>
                <div className="ques-set">
                  <h4 className="main-ques">
                    {`${index + 1}. ${ques.question}`}
                  </h4>
                  <div className="q-options">
                    {ques.options.map((e, i) => {
                      return (
                        <button
                          className={`options ${
                            e.option === ques.answer
                              ? "correct-option"
                              : e.option === ques.selectedOption
                              ? "wrong-option"
                              : ""
                          }`}
                          key={i}
                        >
                          <p>{e.option}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
          <button className="go-back" onClick={goBackHandler}>Go Back</button>
        </div>
      </div>
    </div>
  );
};
