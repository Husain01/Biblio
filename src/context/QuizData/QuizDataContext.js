import { createContext, useContext, useReducer } from "react";
import { QuizReducer } from "../../Reducer/QuizReducer/QuizReducer";

const quizContext = createContext();
const initialState = {
    totalScore: 0,
    questions: [],
    result: [],
}

const QuizProvider = ({children}) => {
    const [quizState, quizDispatch] = useReducer(QuizReducer, initialState)
    return (
        <quizContext.Provider value={{quizState, quizDispatch}}>{children}</quizContext.Provider>
    )
}


const useQuiz = () => useContext(quizContext)

export {useQuiz, QuizProvider}