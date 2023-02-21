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
    b) a dependency array (an empty array []) so it's only called on first render unless something in the dependency array changes.

### App.js `return` statement
1. Define attributes `title` and `subtitle` to `<Title/>` component element as JSX
2. Use optional chaining so if `quiz` doesn't evaluate it returns undefined (see Project Learnings)
2. Map `quiz.content` (if `quiz` exists) array to render data to `<QuestionBlocks/>` and define `key` and `quizItem` attributes 
3. `key` keeps track of the order of items when mapped and between renders

### TitleBlock
1. Pass destrictured `props` of `{title, subtitle}` into `Title` component 
2. Return a `div` with an `h1` element of `{title}` and a `p` element of `{subtitle}` 

### QuestionsBlock
1. Pass `props` `{quizItem}` into `QuestionsBlock` component 
Return a `div` with an `h1` element of `{quizItem.text}` to display multiple choice question titles.
2. Map `quizItem.question` to display each indivdual multiple choice question in imported `<QuestionBlock/>`
3. Add `key`, `question`, and `id` attributes to  `<QuestionBlock/>`

### QuestionBlock
1. Pass destructured `props` `{id, question}` into `QuestionBlock` component 
2. Return `button` element containing clickable image `{question.image}`, text `{question.text}`,and linked image credit `{question.credit}`
3. set `tabIndex` to `"-1"` in `a` element so user can't tab inside of button 

### QuizContext
#### Part 1 - App.js
1. Import `{ createContext }` to `QuizContext` provider component to pass answer object (including `answers`and `setAnswers`) down the chain so it is accessible to all children (see Project Learnings)
2. Import `{ QuizContext }` into `App.js`
3. Call `useState()` hook to set `{answers, setAnswers}`
4. Wrap `App.js` `return` statement in `<QuizContext.Provider>` to pass down `answers` and `setAnswers()` as props to all children
#### Part 2 - QuestionBlock.js
1. Import `{ QuizContext }` into `QuestionBlock.jsx` to pass in `setAnswers` for `onClick` attribute
2. Destructure `QuizContext` by calling `useContext()` hook inside the QuestionBlock component to pull out `setAnswers()`
3. `onClick` `setAnswers()` is called and the new answer is added to existing `answers` object with an id
### Part 3 - App.js `useEffect()`
1. `answers` is passed to `App.js` by `QuizContext` for use in the `useEffect()` hook 
2. Call `useEffect()` hook and re-run when values in `quiz` or `answers` objects change
3. If `quiz` does not exist, return
4. Once `quiz` exists 
5. Map `quiz.content` to get `item.id`'s
6. Use `Object.keys()` to convert `answers` object to an array and get length. If it is greater than or equal to `questionIds` then `hasCompleted = true`
7. Once `hasCompleted = true` compute a numeric score for each travel suggestion based on the quiz responses. (see Project Learnings)
8. Call `useState()` hook to set `{travelSuggestions, setTravelSuggestions}` with an initial value of `null`
9. Map `quiz.travelSuggestions` and `reduce` `suggestions.weights` to get `answerId`
10. If the `answers` array includes the `answerId` `return total`
11. `scoredSuggestions` returns object containing numerical `score` and `suggestion` object
12. `sort` `scoredSuggestions` to determine top ranking `suggestion` 
13. call `setTravelSuggestion()` with top ranking suggestion in array
14. Add `<AnswerBlock/>` component element to return statement including attribute `travelSuggestion`
15. Display answer block only if `travelSuggestion` evaluates to `true`

### AnswerBlock
1. Pass in `{travelSuggestion}` as `props`  
2. Return `h1` element containing `{travelSuggestion.text}` and `img` element with `{travelSuggestion.image}`


## Project Learnings

### Importing JSON objects into App.js
This was my first experience with importing a JSON file into App.js. Here's how I did it: 
1. Add script to package.json `"start:backend": "npx json-server --watch db.json --port 8000"` 
2. Run command `$npm i json-server`
3. Wrap JSON object to make it a `value` to the `key` `"quiz"`
4. Run command `$npm run start:backend`
5. View JSON at http://localhost:8000/quiz 

### Optional Chaining `(?.)`
I initially didn't include the optional chaining operator and my code was throwing errors when I tried to `.map()` `quiz` before the promise returned. I learned that I needed to specify that `quiz` had returned using optional chaining `quiz?.` so that it only maps when the `quiz` promise is returned from the async function. Until it returns the function will now evaluate to `undefined` instead of throwing an error. 

A benefit of optional chaining is that is reduces the number of `if` statements we need. 

reference: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

### `CreateContext` 
I learned of `CreateContext` because I wanted to find a scalable solution to passing down data to a number of components. `CreateContext` allows us to pass down and use data in any component without using props. The providing component (called the `Provider`), in this case `QuizContext` passes variable down the chain so it is accessible to all children. This was useful as a number of components needed to access the `answers` object.

references: 
https://beta.reactjs.org/learn/passing-data-deeply-with-context
https://www.w3schools.com/react/react_usecontext.asp

### Weighted JSON objects 
I was looking for a scalable alternative to creating 60 separate `travelSuggestions` objects. I had considered setting a few combinations and then running a JavaScript to randomize the remaining suggestions, however, this wouldn't be an appropriate appraoch for a production-level app. Then I learned that if I gave each `suggestion` a key of `"weights"` whose value is an object containing `key: value` pairs assigning a numerical value to each potential answer, I could calculate the appropriate `suggestion` based on the score of the `answers` array.


## What's Next
1. Make site responsive 
2. Disable question after selection
3. Additional styling


