const QuestionBlock = ({question}) => {
    const handleClick = () => {
        
    }

    return (
        // make entire question option a button containing image, text, links 
        <button
            className="question-block"
        >
            <img src={question.image} alt={question.alt}/>
            <h3>{question.text}</h3>
            <p>
                <a href="https://www.unsplash.com">{question.credit}</a>
            </p>
        </button>
    );
}

export default QuestionBlock;