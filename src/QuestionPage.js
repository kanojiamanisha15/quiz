import React from 'react'
import { useState } from 'react'
import { QuestionsCouple, QuestionsFriends } from './QuestionList'
import QA from './QA'
import { useParams } from 'react-router-dom'
import { Flex } from 'antd'

function QuestionPage() {

    let questions

    const { name } = useParams()
    if (name === 'friends') {
        questions = QuestionsFriends.questions
    }
    if (name === 'couples') {
        questions = QuestionsCouple.questions
    }

    const handleSubmit = () => {
        console.log(questions);
    }

    return (
        <div className="quiz-container">
            <div className='questions-holder'>
                {questions.map((question) => (
                    <QA ques={question} />
                ))}
            </div>
            <button type='submit' onClick={handleSubmit} >Submit</button>
        </div>
    )
}

export default QuestionPage