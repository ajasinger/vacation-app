import QuestionBlock from './QuestionBlock';

const QuestionsBlock = ({quizItem}) => {
    // console.log(quizItem);
    
    return (
        <>
            {/* add id to scroll to each question */}
            {/* why is this not displaying ?????????????????????? */}
            <h2 id={quizItem.id} className="question-title">{quizItem.text}</h2>
            <div className="questions-container"></div>
            {/* map quizItem.question to display each question option */}
            {quizItem.questions.map((question, index) => {
                <QuestionBlock key={index} question={question}/>
            })
            }
        </>
    )
}

export default QuestionsBlock;