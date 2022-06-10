export const QuizReducer = (quizState, quizAction) => {
  switch (quizAction.type) {
    case "RESULT": {
      const { question, options, answer, selectedOption } = quizAction.payload;
      let score = quizState.totalScore + (answer === selectedOption ? 10 : 0);
      return {
        ...quizState,
        result: [
          ...quizState.result,
          { question, options, selectedOption, answer },
        ],
        totalScore: score,
      };
    }
    case "RESET" : {
        return {
            ...quizState,
            result: [],
            totalScore: 0,
        }
    }
    default:
      return quizState;
  }
};
