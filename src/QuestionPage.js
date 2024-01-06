import React from 'react'
import { QuestionsCouple, QuestionsFriends } from './QuestionList'
import QA from './QA'
import { useLocation } from 'react-router-dom'

function QuestionPage() {

    const location = useLocation();

    let questions
    if (location.state.list == 'QuestionsFriends') {
        questions = QuestionsFriends.questions
    }
    if (location.state.list == 'QuestionsCouple') {
        questions = QuestionsCouple.questions
    }
    // console.log(QuestionsFriends.questions, location.state.list);

    return (
        <div className="quiz-container">
            <h1>Quiz</h1>
            <div className='questions-holder'>
                {questions.map((question) => (
                    <QA ques={question} />
                ))}
            </div>
            <button type='submit'>Submit</button>
        </div>
    )
}

export default QuestionPage