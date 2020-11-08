// index.js
import { askQuestion, answerQuestion } from './quiz.js'

const randomQuestion = askQuestion()
console.log(randomQuestion)

const answer = answerQuestion(question, 'b')
console.log(answer ? 'correct' : 'incorrect')