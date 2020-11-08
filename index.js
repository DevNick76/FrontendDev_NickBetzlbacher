// index.js
import { askQuestion, answerQuestion } from './quiz.js'

const question = askQuestion()
console.log(question)

/**
 * {
 *  question: "Wie lautet der zweite Planet in unserem Sonnensystem?",
 *  correctAnswer: "b",
 *  a: "Jupiter",
 *  b: "Venus",
 *  c: "Erde",
 *  d: "Mars"
 * }
 */

const answer = answerQuestion(question, 'a')
console.log(answer ? 'correct' : 'incorrect')