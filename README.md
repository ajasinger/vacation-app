# Vacation Quiz App

This React app is a quiz to help choose your next vacation destination. 

## Project Overview

My goal with this project was to practice various ?? in React including components, hooks ???

I installed npx create-react-app to build from and ????? from there.

The ??? in wrote include: 

## Key Topics

## App Build Process

### Components
The components are: 
1. A title
2. A questions component to hold all the multiple choice questions
3. Individual multiple choice question compnents
3. A results component 

### JSON
Populate JSON objects 

import JSON objects into App.js (see below in issues)

### setState()
import {useState, useEffect} from 'react' into App.js so we can set initial state and useEffect to render first mount tot DOM and re-render when state changes 

write async function (so we don't wait for data to load to load rest of the site - "can be executed in parallel to other code that is already running without the need to wait for other code to finish before executing") called fetchData. ("a Promise is an object that represents the eventual outcome of an asynchronous operation"). Use awaut keyword so it returns a promise.
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
Pass destructured props into QuestionsBlock component {question}
Return button containing clickable image, text,and linked image credit


## Project Challenges

A few challenges I faced were: 

### `export function`

I initally exported my functions using 
`export const QuestionsBlock = () => {
}`
but learned the the it must be exported as a defualt function.


### importing JSON objects into App.js

This was new for me so I had to do some research. I had prevously placed it int eh src folder but now know this is not best practice becasue ???? I learned two ways to do this: 

add script to pakcage.json "start:backend": "npx json-server --watch db.json --port 8000" then run command $npm i json-server
put JSON object as value on new object with teh key: "quiz"
run command $npm run start:backend
can now view JSON at http://localhost:8000/quiz

### App.js useState() hook
used null instead of false -- why didn't this work?
const [quiz, setQuiz] = useState(false);

### `mapping quiz.content`

{/* map quiz content to populate QuestionsBlock */}
      {quiz.content.map(contentItem => 
        <QuestionsBlock quizItem={contentItem}/>
        )}
thought I needed to separate out each item???

ALSO 

{quiz && quiz.content.map(contentItem => {
        <QuestionsBlock quizItem={contentItem}/>
      })}
needed to specify conditional (`quiz &&`) so that it is only maping when quiz exists (when promise is returned from async function so quiz is no longer false)

## Conclusion ???


## What's Next
make site responsive 
images responsive


