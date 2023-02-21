const AnswerBlock = ({ travelSuggestion }) => {
    return (
        <div>
            <h1>{travelSuggestion.text}</h1>
            <img src={travelSuggestion.image} alt={travelSuggestion.alt}/>
        </div>
    );
}

export default AnswerBlock;