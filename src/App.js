//import logo from './logo.svg';
//import './App.css';
import Title from './components/TitleBlock';
import QuestionBlock from './components/QuestionBlock';
import QuestionsBlock from './components/QuestionsBlock';
import AnswerBlock from './components/AnswerBlock';
import {useState, useEffect} from 'react';

const App = () => {

  const [quiz, setQuiz] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/quiz');
      const json = await response.json();
      console.log(json)
      setQuiz(json);
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Title />
    
    </div>
  );
}

export default App;
