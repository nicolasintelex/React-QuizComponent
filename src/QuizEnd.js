import React, {Component} from "react";

class QuizEnd extends Component{

    handleResetClick(){
        this.props.handleResetClickHandler();
    }

    render(){
        return(
            <div>
                <p>Thanks for playing!</p>
                <a href=''>Reset Quiz onClick{this.handleResetClick.bind(this)}</a>
            </div>
        )
    }

}

export default QuizEnd;