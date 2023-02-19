const QuestionsBlock = ({quizItem}) => {
    // console.log(quizItem);
    
    return (
        <>
            {/* add id to scroll to each question */}
            <h2 id={quizItem.id} className="question-title">{quizItem.text}</h2>
            <div className="questions-container"></div>
        </>
    )
}

export default QuestionsBlock;