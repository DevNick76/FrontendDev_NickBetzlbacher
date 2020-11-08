// quiz.js
import { QuizQuestions } from './questions.js';

export function askQuestion() {
    var randomQuizItem = Math.floor(Math.random()*QuizQuestions.length);
    var randomQuestion = randomQuizItem.question;
    return randomQuestion;
}

export function answerQuestion(question, answer) {
    if(question == QuizQuestions[0].question){
        if(answer == 'b'){
            answer = true;
        }
        else { 
            answer = false;
        }
    }
    else if (question == QuizQuestions[1].question){
        if(answer == 'c'){
            answer = true;
        }
        else { 
            answer = false;
        }
    }
    else if (question == QuizQuestions[2].question){
        if(answer == 'a'){
            answer = true;
        }
        else { 
            answer = false;
        }
    }
}
