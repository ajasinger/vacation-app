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
call useEffect() where first argument is callback function we want react to call each time the component renders 


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



### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## Conclusion ???

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


