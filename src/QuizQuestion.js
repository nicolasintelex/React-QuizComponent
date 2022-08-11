import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";


class QuizQuestion extends Component{
    constructor(props){
        super(props);
        this.state = {incorrectAnswer: false};
    }

    handleClick (buttonText){
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
            this.setState({incorrectAnswer: false})
        }
        else { 
            this.setState({incorrectAnswer: true})
        }
    }
    
    render() {
        return(<div>
            <main>
                <section>
                <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                {this.state.incorrectAnswer? <p className='error'> sorry, that's not right</p> : null}
                <section className="buttons">
                <ul> 
                    {this.props.quiz_question.answer_options.map( 
                        (answer, index) => 
                        <QuizQuestionButton 
                            clickHandler= {this.handleClick.bind(this)} 
                            key={index} 
                            button_text= {answer}
                        />)
                    }                  
                </ul>
                </section>
        </main>
        </div>
        )
    }
}
export default QuizQuestion;