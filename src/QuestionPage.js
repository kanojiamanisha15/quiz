import React from 'react'
import { QuestionsCouple, QuestionsFriends } from './QuestionList'
import QA from './QA'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';
function QuestionPage() {       

    const location = useLocation();
    let { name } = useParams();
    let questions
 
 

if(name == 'friends') {
    questions = QuestionsFriends.questions
}else if (name == 'couples'){
    questions = QuestionsCouple.questions
}else{
    questions = QuestionsCouple.questions
}

// console.log(QuestionsFriends.questions, location.state.list);
const handleQuestionChange = (id ,value) => {
let newArr = questions.map(question => question.id === id ? {...question,question : value}: question)

questions = newArr
}

return (
    <div className="quiz-container">
        <h1>Quiz</h1>
        <div className='questions-holder'>
            
            {questions.map((question) => (
                    <QA ques={question} handleQuestionChange={handleQuestionChange} />
                ))}
              
            </div>
        <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
)
}

export default QuestionPage