import QuestionBlock from './QuestionBlock';

const QuestionsBlock = ({quizItem}) => {
    // console.log(quizItem);
    
    return (
        <>
            <h2 id={quizItem.id} className="question-title">{quizItem.text}</h2>
            <div className="questions-container"></div>
            {/* map quizItem.question to display each question option */}
            {quizItem.questions.map((question, _index) => (
                <QuestionBlock key={_index} question={question}/>
            ))
            }
        </>
    )
}

export default QuestionsBlock;