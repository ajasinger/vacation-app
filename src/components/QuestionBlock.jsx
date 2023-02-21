import { useContext } from 'react';
import QuizContext from "../QuizContext";

const QuestionBlock = ({id, question}) => {

    //allows QuestionBlock to read QuizContext and use setAnswers as attribute 
    const { setAnswers } = useContext(QuizContext);

    return (
        <button
            className="question-block"
            //on click new answer is added to existing answers object with an id
            onClick={
                () => setAnswers((answers) => ({...answers,[id]: question.text}))
            }
        >
            <img src={question.image} alt={question.alt}/>
            <h3>{question.text}</h3>
            <p>
                <a tabIndex="-1" href="https://www.unsplash.com">{question.credit}</a>
            </p>
        </button>
    );
}

export default QuestionBlock;