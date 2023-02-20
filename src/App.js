//import logo from './logo.svg';
//import './App.css';
import Title from './components/TitleBlock';
import QuestionsBlock from './components/QuestionsBlock';
import AnswerBlock from './components/AnswerBlock';
import {useState, useEffect} from 'react';

const App = () => {

  //set State to json response
  const [quiz, setQuiz] = useState(null);
  //set State to array of chosen answers 
  //const [chosenAnswerItems, setChosenAnswerItems] = useState(null);


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
    <div className="app">
      
      {/* pass props title and subtitle to Title component */}
      {/* optional chaining so if it quiz doesn't evaluate it returns undefined */}
      <Title title={quiz?.title} subtitle={quiz?.subtitle}/>
      
      {/* map quiz content to populate QuestionsBlock */}
      {/* add key to items*/}
      {quiz && quiz?.content.map((contentItem) => {
        <QuestionsBlock 
          key={contentItem.id}
          quizItem={contentItem}
        />
      })}
    
    </div>
  );
}

export default App;
