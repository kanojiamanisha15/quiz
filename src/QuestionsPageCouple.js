import React from 'react'
import { QuestionsListCouple } from './QuestionsListCouple'
import QACouple from './QACouple'

function QuestionsPageCouple() {
    const { questions } = QuestionsListCouple

    return (
        <div className="quiz-container">
            <h1>Quiz</h1>
            <div className='questions-holder'>
                {questions.map((question) => (
                    <QACouple ques={question} />
                ))}
            </div>

            <button>submit</button>
        </div>
    )
}

export default QuestionsPageCouple