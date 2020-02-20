import React from 'react';
import { quizzes } from '../quizzes';
import MultipleChoiceQuiz from './MultipleChoiceQuiz';

class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      quizIndex: 0,
    };
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
  
  render() {
    const { quizIndex } = this.state;
    return (
      <div>
        <MultipleChoiceQuiz
          quiz={quizzes[quizIndex]}
          changeQuiz={this.changeQuiz}
        />
        <div className = 'hello'>
        </div>
      </div>
    );
  }
}

export default Quiz;
