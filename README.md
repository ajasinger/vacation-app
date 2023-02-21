# Vacation Quiz App

This React app is a quiz to help choose your next vacation destination. 


## Project Overview

My goal with this project was to practice building components, using props, and hooks including setState() and useEffect()


## App Structure & Process

### Components
The components are: 
1. A TitleBlock component to hold the title and subtitle
2. A QuestionsBlock component to hold all the multiple choice questions
3. A QuestionBlock component to hold each individual multiple choice question 
3. An AnswerBlock component to show the quiz results once all 3 questions are answered.

### JSON
1. Populate JSON objects 
2. set "weights" for each answer variant (see below in Project Learnings)  
3. import JSON objects into App.js 

### setState()
1. `import {useState, useEffect} from 'react'` into App.js so we can set initial state and `useEffect()` to render first mount to DOM and re-render when state changes. 
2. Write async function (so we don't wait for data to load to load rest of the site - "can be executed in parallel to other code that is already running without the need to wait for other code to finish before executing") called fetchData. ("a Promise is an object that represents the eventual outcome of an asynchronous operation"). Use awaut keyword so it returns a promise.
Once we get response we get the JSON version and store as json
"use try/catch for error handling -- we try await-ing async function then catch any errors in try block"

call useState() which gives us an array with two values 1. current state 2. state setter -- using array destructuring we set those to 1. Quiz 2. setQuiz
Then call setQuiz on the JSON response 
using setQuiz(json) to override false from useState(false) which had been set to Quiz in const [quiz, setQuiz] = useState(false); 
ie state is initilaized to equal false, when teh state setter (setQuiz) is called react uses the new value (json)

### useEffect()
call useEffect() where first argument is callback function (a function passed into another function as an argument) we want react to call each time the component renders, however  second argument of empty array [] (dependency array) means it's only called on first render unless something int eh dependaeny array changes.

### App.js return statement
1. Feed title and subtitle props into title element as JSX
2. Map quiz.content array to render data (as contentItem) to QuestionBlocks. 
3. Use Optional chaining — use the question mark before the period - add question mark if this thing dioesnt’ evaluate the return undefined — removes unneccsearry if statements so something happens
3. Pass in quizItem prop to <QuestionsBlock/> element
4. Add key to <QuestionsBlock/> element to keep track of items between renders, so mapped items remain in the same order
5. set State to array of chosen answers 

### TitleBlock
Pass props into title component 
Destructure props
Return a div with in h1 tag of {title} and a p tag of {subtitle} 

### QuestionsBlock
Pass destructured props into QuestionsBlock component 
Return a div with in h1 tag of {title} and a p tag of {subtitle} 
Display question titles with h1 tag of {quizItem.text}
Add id to each question text to scroll to each question
import QuestionBlock
Map quizItem.question to display each question option
Add key to mapped questions 

### QuestionBlock
Pass destructured props into QuestionsBlock component {id, question}
Return button containing clickable image, text,and linked image credit
use tabIndex so user can't use tab inside of button 

### CreateContext
(reference https://www.w3schools.com/react/react_usecontext.asp)
allows us to pass down and use data in any component without using props. Providing component (provider) passes variable (answers-- an empty array) down the chain so it is accessible to all children

Then import QuizContext into App.js, define state {answers, setAnswers} and wrap return statement in <QuizContext.Provider> passing in props answers, setAnswers

1. setAnswers is declared in QuizContext and then wraps the return statement in App.js (essentially passed as props to <QuestionBlock />
2. What exactly is happening here? const { setAnswers } = useContext(QuizContext);
3. Then onClick setAnswers() is called and the new answer is added to existing answers object with an id
4. Then answers is passed to App.js by QuizContext for use in the useEffect hook 

### useEffect() hook in App.js
useEffect hook defines what a component needs to do after render. Second argument of array measn it only carries out that action if a prop or state has changed. Empty array means it only runs once, otherwise it runs if a prop or state has changed, in this case if the quiz or answers objects change 
1. do not run useEffect until quiz returns 
2. and run it again if the answers object changes 
3. set variables to see when all 3 multiple choice questions have been answered:  
//map content array for id's
    const questionIds = quiz.content.map((item) => item.id);
    //Object.keys converts answers object to an array
    //if length is greater than or equal to questionIds length set 
    const hasCompleted = Object.keys(answers).length >= questionIds.length;
4. Now that we have confrimed all answers are in the object we can calculate weighted answers to return final travel recommendation
5. //set State for scoredSuggestions
  const [travelSuggestion, setTravelSuggestion] = useState(null);
6. Add weights to JSON to dteremine answer in scalable way (instead of listing 60 combinations)
7. ......

### AnswerBlock

in app.js  if travelSuggestion is false (no travelSuggestion set) don't show AnswerBlock 


## Project Learnings

### importing JSON objects into App.js

This was my first experience with importing a JSON file into App.js. Here's how I did it: 

add script to pakcage.json "start:backend": "npx json-server --watch db.json --port 8000" then run command $npm i json-server
put JSON object as value on new object with teh key: "quiz"
run command $npm run start:backend
can now view JSON at http://localhost:8000/quiz

I understand it should also work in the public folder, however,this isn't ideal for production builds. 

### Optional chaining `(?.)`

I initially didn't inlcude the optional chaining operator and my code was throwing errors when I tried to `.map()` `quiz` before the promise returned.

I learned that I needed to specify conditional (`quiz &&`) so that it is only mapping when the quiz promise is returned from the async function. Before it returns the function will now evaluate to `undefined` instead of throwing an error. 

A benefit of optional chaining, is reduces the number of if statements we need. 

reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

### Learning CreateContext 

### Learning about weighted JSON objects 

## Conclusion ???


## What's Next
1. Make site responsive 
2. Disable question after selection
3. Additional styling


