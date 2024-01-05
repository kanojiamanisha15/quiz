import React from 'react'
import { QuestionsListFriends } from './QuestionsListFriends'
import QAFriends from './QAFriends'

const QuestionsPageFriends = () => {

  const { questions } = QuestionsListFriends

  // const handleSubmit = () => {
  //   {questions.map((questionList) => (
  //     console.log(questionList)
  //   ))}
  // }

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      <div className='questions-holder'>
        {questions.map((questionList) => (
          <QAFriends ques={questionList} />
        ))}
      </div>
      <button type='submit'>submit</button>
    </div>

  )
}
export default QuestionsPageFriends