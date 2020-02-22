import React from 'react';
import '../styles.css';
import { getMessage } from '../messages';
import Progress from './Progress';

const shuffleAnswers = array => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};
class MultipleChoiceQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionIndex: 0,
            checkAnswer: '',
            answerList: [],
            clicked: false,
            showSummary: false,
            encouragement: '',
            numOfQuestionsRight: 0,
            numOfQuestionsWrong: 0,
        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.quiz !== prevProps.quiz) {
            this.setState({
                questionIndex: 0,
                showSummary: false,
                numOfQuestionsRight: 0,
                numOfQuestionsWrong: 0,
                clicked: ''
            });
            this.getAnswers(0);
        }
    }
    componentDidMount() {
        this.getAnswers(0);
        this.setState({
            clicked: false,
        });
    }
    changeEncouragement = () => {
        let message = getMessage();
        this.setState({
            encouragement: message,
        });
    };
    changeQuestion = () => {
        const { quiz } = this.props;
        const { questionIndex } = this.state;
        if (questionIndex < quiz.questions.length - 1) {
            let newQuestion = questionIndex + 1;
            this.setState({
                questionIndex: newQuestion,
                clicked: false,
            });
            this.getAnswers(newQuestion);
        } else {
            this.setState({
                clicked: false,
            });
            this.getAnswers(0);
        }
        this.changeEncouragement();
    };

    getAnswers = questionIndex => {
        const { quiz } = this.props;
        let answers = [
            ...quiz.questions[questionIndex].incorrectAnswers,
            quiz.questions[questionIndex].correctAnswer,
        ];

        let correctAnswer = quiz.questions[questionIndex].correctAnswer;

        this.setState({
            correctAnswer: correctAnswer,
        });
        shuffleAnswers(answers);

        this.setState({
            answerList: answers,
        });
    };

    checkAnswer = e => {
        const { quiz } = this.props;
        const {
            questionIndex,
            numOfQuestionsRight,
            numOfQuestionsWrong,
        } = this.state;
        if (e.target.id === quiz.questions[questionIndex].correctAnswer) {
            e.target.style.border = '2px solid green';
            this.setState({
                answerType: 'Correct!',
                clicked: true,
                numOfQuestionsRight: numOfQuestionsRight + 1,
            });
        } else {
            e.target.style.textDecoration = 'line-through';
            e.target.style.border = '2px solid red';
            this.setState({
                answerType: 'Incorrect...',
                clicked: true,
                numOfQuestionsWrong: numOfQuestionsWrong + 1,
            });
        }
    };
    showSummary = () => {
        const { showSummary } = this.state;
        this.setState({
            showSummary: !showSummary,
            questionIndex: 0,
        });
    };

    render() {
        const { quiz, quizIndex } = this.props;
        const {
            answerList,
            questionIndex,
            showSummary,
            clicked,
            answerType,
            numOfQuestionsRight,
            numOfQuestionsWrong,
        } = this.state;
        let questionText = quiz.questions[questionIndex].text;
        let length = quiz.questions.length;
        if (showSummary) {
            return (
                <div>
                    <h4>{quiz.title}</h4>
                    <p>
                        You got <strong>{numOfQuestionsRight}</strong> out of{' '}
                        <strong>{quiz.questions.length}</strong>
                    </p>
                    <p>
                        <em>{this.state.encouragement}</em>
                    </p>
                    <button onClick={this.props.changeQuiz}>Next Quiz</button>
                    <br />

                    <Progress
                        right={numOfQuestionsRight}
                        wrong={numOfQuestionsWrong}
                        total={length}
                        clicked={clicked}
                    />
                </div>
            );
        } else {
            return (
                <div>
                    <h4>{quiz.title}</h4>
                    <p>{questionText}</p>
                    <ol type="A">
                        {answerList.map(answer => {
                            return (
                                <>
                                    <li key={answer} id={`${answer}`} onClick={this.checkAnswer}>
                                        {answer}
                                    </li>
                                    <br />
                                </>
                            );
                        })}
                    </ol>

                    {questionIndex === quiz.questions.length - 1 ? (
                        clicked ? (
                            <div className="button">
                                <p>
                                    <em>{answerType}</em>
                                </p>
                                <button onClick={this.showSummary}>Get Results</button>
                            </div>
                        ) : null
                    ) : clicked ? (
                        <div className="button">
                            <p>
                                <em>{answerType}</em>
                            </p>
                            <button onClick={this.changeQuestion}>Next Question</button>
                        </div>
                    ) : null}
                    <br />
                    <Progress
                        right={numOfQuestionsRight}
                        wrong={numOfQuestionsWrong}
                        total={length}
                        clicked={clicked}
                    />
                </div>
            );
        }
    }
}
export default MultipleChoiceQuiz;
