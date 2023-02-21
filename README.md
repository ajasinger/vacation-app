# Vacation Quiz App

This React app is a quiz to help choose your next vacation destination. 


## Project Overview

My goal with this project was to practice building components, using props, and hooks including setState() and useEffect()


## App Structure & Process

### Components
The main components are: 
1. A TitleBlock component to hold the title and subtitle
2. A QuestionsBlock component to hold all the multiple choice questions
3. A QuestionBlock component to hold each individual multiple choice question 
3. An AnswerBlock component to show the quiz results once all 3 questions are answered.

### JSON
1. Populate JSON objects 
2. set "weights" for each answer variant (see below in Project Learnings)  
3. import JSON objects into App.js 

### App.js `setState()`
1. import `useState` into App.js to set initial state and `useEffect()` to render first mount to DOM and re-render when state changes. 
2. Write async function (that can be executed in parallel to other code that is already running) called `fetchData` using `await` keyword to return a promise.
3. Use `try/catch` for error handling
4. Store response as `json` variable
5. Call `useState` which gives us an array with 2 values: a) current state b) state setter. Using array destructuring we set them to `quiz` and `setQuiz()`
6. Call `setQuiz()` on the JSON response to override `null` (the state is initalized to `null`, when the state setter `setQuiz()` is called react uses the new value `json`)

### App.js `useEffect()`
1. Call `useEffect()` with 2 arguments: 
    a) a callback function (a function passed into another function as an argument) we want react to call each time the component renders, 
    b) a dependency array (anempty array []) so it's only called on first render unless something in the dependency array changes.

### App.js `return` statement
1. Define attributes `title` and `subtitle` to <Title/> component element as JSX
2. Use optional chaining so if `quiz` doesn't evaluate it returns undefined (see Project Learnings)
2. Map `quiz.content` (if `quiz` exists) array to render data to <QuestionBlocks/> and define `key` and `quizItem` attributes 
3. `key` keeps track of the order of items when mapped and between renders

### TitleBlock
1. Pass destrictured `props` of `{title, subtitle}` into `Title` component 
2. Return a <div> with an <h1> element of `{title}` and a <p> elents of `{subtitle}` 

### QuestionsBlock
1. Pass `props` `{quizItem}` into `QuestionsBlock` component 
Return a <div> with an <h1> element of `{quizItem.text}` to display multiple choice question titles.
2. Map `quizItem.question` to display each indivdual multiple choice question in imported <QuestionBlock/>
3. Add `key`, `question`, and `id` attributes to  <QuestionBlock/>

### QuestionBlock
1. Pass destructured `props` `{id, question}` into `QuestionBlock` component 
2. Return <button> element containing clickable image `{question.image}`, text `{question.text}`,and linked image credit `{question.credit}`
3. set `tabIndex` to `"-1"` in <a> element so user can't tab inside of button 

### QuizContext
#### Part 1 - App.js
1. Import `{ createContext }` to `QuizContext` provider component to pass answer object (including `answers`and `setAnswers`) down the chain so it is accessible to all children
2. Import `{ QuizContext }` into `App.js`
3. Call `useState()` hook to set `{answers, setAnswers}`
4. Wrap `App.js` `return` statement in <QuizContext.Provider> to pass down `answers` and `setAnswers()` as props to all children
#### Part 2 - QuestionBlock.js
1. Import `{ QuizContext }` into `QuestionBlock.jsx` to pass in `setAnswers` for `onClick` attribute
2. Destructure `QuizContext` with `useEffect()` hook (`useContext()`) to pull out `setAnswers()`
3. `onClick` `setAnswers()` is called and the new answer is added to existing `answers` object with an id
### Part 3 - App.js `useEffect()`
1. `answers` is passed to `App.js` by `QuizContext` for use in the `useEffect()` hook 
2. Call `useEffect()` hook to `setTravelSuggestion` adn re-run when values in `quiz` or `answers` objects change

?????

3. If `quiz` does not exist, return
4. Once `quiz` exists 


### useEffect() hook in App.js

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

### Importing JSON objects into App.js

This was my first experience with importing a JSON file into App.js. Here's how I did it: 

add script to pakcage.json "start:backend": "npx json-server --watch db.json --port 8000" then run command $npm i json-server
put JSON object as value on new object with teh key: "quiz"
run command $npm run start:backend
can now view JSON at http://localhost:8000/quiz

I understand it should also work in the public folder, however,this isn't ideal for production builds. 

### Learning Optional Chaining `(?.)`

I initially didn't include the optional chaining operator and my code was throwing errors when I tried to `.map()` `quiz` before the promise returned.

I learned that I needed to specify conditional (`quiz &&`) so that it is only mapping when the quiz promise is returned from the async function. Before it returns the function will now evaluate to `undefined` instead of throwing an error. 

A benefit of optional chaining, is reduces the number of if statements we need. 

reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

### Learning `CreateContext` 
(reference https://www.w3schools.com/react/react_usecontext.asp)
allows us to pass down and use data in any component without using props. Providing component (provider) passes variable (answers-- an empty array) down the chain so it is accessible to all children

### Learning about weighted JSON objects 

## Conclusion ???


## What's Next
1. Make site responsive 
2. Disable question after selection
3. Additional styling


