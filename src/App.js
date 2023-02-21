//import logo from './logo.svg';
//import './App.css';
import Title from './components/TitleBlock';
import QuestionsBlock from './components/QuestionsBlock';
import AnswerBlock from './components/AnswerBlock';
import { useState, useEffect } from 'react';
import QuizContext from './QuizContext';

const App = () => {

  //set State to json response
  const [quiz, setQuiz] = useState(null);
  //set State for QuizContext
  const [answers, setAnswers] = useState({});
  //set State for scoredSuggestions
  const [travelSuggestion, setTravelSuggestion] = useState(null);

  console.log({
    quiz, 
    answers,
  })

  useEffect(() => {
    //if quiz doesn't exist, return
    if (!quiz) {
      return;
    }

    //map content array for id's
    const questionIds = quiz.content.map((item) => item.id);
    //Object.keys converts answers object to an array
    //if length is greater than or equal to questionIds length set 
    const hasCompleted = Object.keys(answers).length >= questionIds.length;

    if (!hasCompleted) {
      return;
    }

    const scoredSuggestions = 


  }, [
    quiz, answers
  ]);


  //async function to get json object
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/quiz');
      const json = await response.json();
      //console.log(json) (check json displays in console)
      setQuiz(json);
    } catch(err) {
      console.log(err);
    }
  }

  //run fetch data until it returns json object on only first render
  useEffect(() => {
    fetchData();
  }, [])

  console.log(quiz);

  return (
    //wrap return in QuizContext component so all children have access to answer object
    <QuizContext.Provider value={{ answers, setAnswers }}>
      <div className="app">
      
      {/* pass props title and subtitle to Title component */}
      {/* optional chaining so if it quiz doesn't evaluate it returns undefined */}
      <Title title={quiz?.title} subtitle={quiz?.subtitle}/>
      
      {/* map quiz content to populate QuestionsBlock */}
      {/* add key to items*/}
      {quiz && quiz?.content.map((contentItem) => (
        <QuestionsBlock 
          key={contentItem.id}
          quizItem={contentItem}
        />
      ))}
    
    </div>
    </QuizContext.Provider>
  );
}

export default App;
