//import logo from './logo.svg';
//import './App.css';
import Title from './components/TitleBlock';
import QuestionBlock from './components/QuestionBlock';
import QuestionsBlock from './components/QuestionsBlock';
import AnswerBlock from './components/AnswerBlock';
import {useState, useEffect} from 'react';

const App = () => {

  //set State to json response
  const [quiz, setQuiz] = useState(false);

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
      <Title title={quiz.title} subtitle={quiz.subtitle}/>
      {/* <Title title={quiz?.title} subtitle={quiz?.subtitle}/> */}
    
    </div>
  );
}

export default App;
