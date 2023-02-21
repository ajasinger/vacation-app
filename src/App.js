//import logo from './logo.svg';
//import './App.css';
import Title from './components/TitleBlock';
import QuestionsBlock from './components/QuestionsBlock';
import AnswerBlock from './components/AnswerBlock';
import { useState, useEffect } from 'react';
import QuizContext from './QuizContext';

const App = () => {

  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [travelSuggestion, setTravelSuggestion] = useState(null);

  console.log({
    quiz, 
    answers,
    travelSuggestion
  })

  useEffect(() => {
    if (!quiz) {
      return;
    }

    //compare length of arrays to determine if all questions have been answered
    const questionIds = quiz.content.map((item) => item.id);
    const hasCompleted = Object.keys(answers).length >= questionIds.length;

    if (!hasCompleted) {
      return;
    }

    //Compute a numeric score for each travel suggestion based on the quiz responses. 
    //Sum the weights of each travel suggestion based on which were answered in the quiz. 
    //Sort the travel suggestions based on score, and pick the highest score.
    const scoredSuggestions = quiz.travelSuggestions.map((suggestion) => {
      const score = Object.keys(suggestion.weights).reduce((total, answerId) => {
        if (!Object.values(answers).includes(answerId)) {
          return total;
        }

      
        return (
          total + (suggestion.weights[answerId] || 0)
        );
      }, 0);

      return {
        score,
        suggestion
      };
    });

    //sort scores to calculate top score
    const sortedSuggestions = scoredSuggestions.sort((a,b) => {
      return b.score - a.score;
    });

    setTravelSuggestion(sortedSuggestions[0].suggestion);


  }, [
    quiz, answers
  ]);


  //async function to get json object
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/quiz');
      const json = await response.json();
      //console.log(json) 
      setQuiz(json);
    } catch(err) {
      console.log(err);
    }
  }

  //run fetch data until it returns json object on first render or dependency array changes
  useEffect(() => {
    fetchData();
  }, [])

  //console.log(quiz);

  return (
    //wrap return statement in QuizContext component 
    <QuizContext.Provider value={{ answers, setAnswers }}>
      <div className="app">
      
      <Title title={quiz?.title} subtitle={quiz?.subtitle}/>
      
      {/* map quiz content to populate QuestionsBlock */}
      {quiz && quiz?.content.map((contentItem) => (
        <QuestionsBlock 
          key={contentItem.id}
          quizItem={contentItem}
        />
      ))}
      {/* if travelSuggestion is false (no travelSuggestion set) don't show AnswerBlock  */}
      {!!travelSuggestion && (
          <AnswerBlock travelSuggestion={travelSuggestion} />
        )}
    </div>
    </QuizContext.Provider>
  );
}

export default App;
