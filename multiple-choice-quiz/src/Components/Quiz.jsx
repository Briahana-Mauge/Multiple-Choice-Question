import React from 'react';
import { quizzes } from '../quizzes';
import MultipleChoiceQuiz from './MultipleChoiceQuiz';

class Quiz extends React.Component {
    constructor() {
        super();
        this.state = {
            quizIndex: 0,
            quizOption: []
        };
    }
    componentDidMount() {
        this.populateSelect();
    }
    populateSelect = () => {
        let newQuizzes = [];
        for (let i = 0; i < quizzes.length; i++) {
            newQuizzes.push(
                <option value={quizzes[i].id} key={quizzes[i].id}>{quizzes[i].title}</option>
            )
        }

        this.setState({
            quizOption: newQuizzes
        })
    }
    changeQuiz = () => {
        const { quizIndex } = this.state;
        if (quizIndex === quizzes.length - 1) {
            let newIndex = 0;
            this.setState({
                quizIndex: newIndex,
            });
        } else {
            let newIndex = quizIndex + 1;
            this.setState({
                quizIndex: newIndex,
            });
        }
    };
    handleInput = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
           
        })
    }
    render() {
        const { quizIndex, quizOption } = this.state;
        return (
            <div>
                <select className='quiz' name='quizIndex' onChange={this.handleInput}>
                    {quizOption}
                </select>
                <MultipleChoiceQuiz
                    quiz={quizzes[quizIndex]}
                    changeQuiz={this.changeQuiz}
                />
                <div className='hello'>
                </div>
            </div>
        );
    }
}

export default Quiz;
