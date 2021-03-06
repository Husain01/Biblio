import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizQues } from "../../backend/DB/quizInfo";
import { useQuiz } from "../../context/QuizData/QuizDataContext";
import "./Questions.css";

export const Questions = () => {
  const [ques, setQues] = useState(0);
  const [optionToggle, setOptionToggle] = useState("");
  const [optionDisabled, setOptionDisabled] = useState(false);
  const [btnDisabled, setbtnDisabled] = useState(true);
  const quizId = sessionStorage.getItem("categoryId");
  const { quizState, quizDispatch } = useQuiz();
  const navigate = useNavigate();
  console.log(quizState);

  const categoryQues = quizQues.find(
    (eachCategory) => eachCategory.categoryId === quizId
  );

  const question = categoryQues.questions[ques].question;
  const options = categoryQues.questions[ques].options;
  const answer = categoryQues.questions[ques].answer;

  const quesInCategory = categoryQues.questions;

  const nextQuesHandler = () => {
    setQues(ques + 1);
    setOptionDisabled(false);
    setbtnDisabled(true);
  };

  useEffect(() => {
    quizDispatch({
      type: "RESET",
    });
  }, [quizDispatch]);

  const optionHandler = (optVal) => {
    setOptionToggle(optVal);
    console.log(optionToggle);
    setOptionDisabled(true);
    setbtnDisabled(false);
    quizDispatch({
      type: "RESULT",
      payload: {
        question,
        options,
        answer,
        selectedOption: optVal,
      },
    });
  };

  return (
    <div className="content-container">
      <div className="center-content">
        <div className="question-box normal-shadow">
          <div className="ques-no">
            <h5>{`Question ${ques + 1}/5`}</h5>
          </div>
          <h4 className="main-ques">{`${ques + 1}. ${
            quesInCategory[ques].question
          }`}</h4>
          <div className="q-options">
            {quesInCategory[ques].options.map((opt, index) => {
              return (
                <button
                  className={`options ${
                    optionToggle === opt.option ? "selecteOption" : "options"
                  }`}
                  key={index}
                  onClick={() => {
                    optionHandler(opt.option);
                  }}
                  disabled={optionDisabled}
                >
                  <p>{opt.option}</p>
                </button>
              );
            })}
          </div>
          <div className="quiz-btns">
            <button
              className="quiz-quit"
              onClick={() => {
                quizDispatch({
                  type: "RESET",
                });
                navigate("/");
              }}
            >
              Quit
            </button>
            {ques === 4 ? (
              <button
                className={
                  optionDisabled ? "quiz-submit" : "quiz-submit btn-disabled"
                }
                disabled={btnDisabled}
                onClick={() => navigate(`/results/${quizId}`)}
              >
                View Result
              </button>
            ) : (
              <button
                className={
                  optionDisabled ? "quiz-submit" : "quiz-submit btn-disabled"
                }
                onClick={nextQuesHandler}
                disabled={btnDisabled}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
