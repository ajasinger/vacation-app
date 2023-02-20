import { createContext } from 'react';

//use createContext to pass answer object to all children
const QuizContext= createContext({
    answers: {},
    setAnswers: () => {}
});
export default QuizContext;