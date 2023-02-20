import { createContext } from 'react';

const QuizContext= createContext({
    answers: {},
    setAnswers: () => {}
});
export default QuizContext;