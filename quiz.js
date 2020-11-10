// quiz.js
import { QuizQuestions } from './questions.js';

var randomQuizItem = Math.floor(Math.random()*QuizQuestions.length);

export function askQuestion() {
    var randomQuestion = QuizQuestions[randomQuizItem].question;
    var answerA = QuizQuestions[randomQuizItem].a;
    var answerB = QuizQuestions[randomQuizItem].b;
    var answerC = QuizQuestions[randomQuizItem].c;
    var answerD = QuizQuestions[randomQuizItem].d;
    
    return 'Frage: ' + randomQuestion + '\nA: ' + answerA + '\nB: ' + answerB + '\nC: ' + answerC + '\nD: ' + answerD;
}

export function answerQuestion(answer) {
        if(answer == QuizQuestions[randomQuizItem].correctAnswer){
            answer = true;
        }
        else { 
            answer = false;
        }
}
