// index.js
import { askQuestion, answerQuestion } from './quiz.js'

const question = askQuestion()
console.log(question)

const answer = answerQuestion('a')
console.log(answer ? 'correct' : 'incorrect')