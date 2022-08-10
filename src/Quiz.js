import React, {Component} from "react";
import QuizQuestion from  "./QuizQuestion.js"

let quizData = require('./quiz_data.json');

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {quiz_position: 1};
    }

    render()
    {
        let quiz_questions = Object.values(quizData);
        console.log(quizData.quiz_questions[0])
        return(
            <div>
                <QuizQuestion className="QuizQuestion" quiz_question ={quizData.quiz_questions[this.state.quiz_position - 1]}>
                </QuizQuestion>
            </div>
        )      
    }

    
}

export default Quiz;