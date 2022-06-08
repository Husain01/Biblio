import { createContext, useContext, useReducer } from "react";
import { QuizReducer } from "../../Reducer/QuizReducer/QuizReducer";

const quizContext = createContext();
const initialState = {
    score: 0,
    selectedQuestion: [],
}

const QuizProvider = ({children}) => {
    const [quizState, quizDispatch] = useReducer(QuizReducer, initialState)
    return (
        <quizContext.Provider value={{quizState, quizDispatch}}>{children}</quizContext.Provider>
    )
}


const useQuiz = () => useContext(quizContext)

export {useQuiz, QuizProvider}