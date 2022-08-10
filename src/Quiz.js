import React, {Component} from "react";

let quizData = require('./quiz_data.json');
console.log(typeof quizData);
class Quiz extends Component{
    render()
    {
        let quiz_questions = Object.values(quizData);
        let question1 = quiz_questions[0][0];
        return(
            <div>
                <div className="QuizQuestion">
                {question1["instruction_text"]}
                </div>
            </div>
        )      
    }

    constructor(props){
        super(props);
        this.state = {quiz_position: 1};
    }
}

export default Quiz;