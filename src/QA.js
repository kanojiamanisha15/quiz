import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

function QA({ ques ,handleQuestionChange}) {
    const [loadedQuestion, setLoadedQuestion] = useState(ques.question)
    const [answers, setAnswers] = useState([])
    const [check, setcheck] = useState(null)

    useEffect(() => {
        setAnswers(ques.choices)
        // console.log(ques.choices, "tttttest")
    }, [])

    let deleteButton = (deletingAnswer) => {
        const newlistAnswers = answers.filter((answer) => answer !== deletingAnswer)
        setAnswers(newlistAnswers)
    }

    const onChangeQuestion = (e,id) => {
        setLoadedQuestion(e.target.value)
        handleQuestionChange(id , e.target.value)
        // console.log(e.target.value, 'manisha');
    }

    const onChangeInput = (e) => {

        let answersCopy = [...answers]
        let objIndex = answersCopy.findIndex((obj => obj.id == e.target.id));
        // console.log(answersCopy[objIndex], 'test');
        answersCopy[objIndex].name = e.target.value
        setAnswers(answersCopy)
    }

    const handleChange = (i) => {
        setcheck((prev) => (i === prev ? null : i));
    }

    const [color, setColor] = useState('black')

    return (

        <div id={ques.id} className='list-holder' style={{ borderStyle: 'solid', borderColor: color, width: 'max-content' }}>
            <input
                style={{ width: '600px' }}
                name={ques.question}
                type="text"
                onChange={(e) => onChangeQuestion(e,ques.id)}
                defaultValue={ques.question}
            ></input>
            <ul>
                {answers.map((answer, i) => (
                    <li key={i}>
                        <input type="checkbox" name='check' onChange={() => handleChange(i)} checked={i === check} />
                        <input
                            id={answer.id}
                            name={ques.id + answer.id} //string
                            type="text"
                            onChange={(e) => onChangeInput(e)}
                            value={answer.name}
                        />
                        <button onClick={() => deleteButton(answer)}>Delete</button>
                    </li>
                ))}
            </ul>

            <button onClick={() =>
                setAnswers([...answers, { id: uuidv4(), name: 'None of the above', }])
            }>Add new option</button>

            <div className='color-buttons'>
                <div className='color-list'>
                    <button style={{ backgroundColor: 'red', borderRadius: '50%' }} onClick={() => setColor('red')}>red</button>
                    <button style={{ backgroundColor: 'green', borderRadius: '50%' }} onClick={() => setColor('green')}>green</button>
                    <button style={{ backgroundColor: 'blue', borderRadius: '50%' }} onClick={() => setColor('blue')}>blue</button>
                    <button style={{ backgroundColor: 'yellow', borderRadius: '50%' }} onClick={() => setColor('yellow')}>yellow</button>
                    <button style={{ backgroundColor: 'orange', borderRadius: '50%' }} onClick={() => setColor('orange')}>orange</button>
                    <button style={{ backgroundColor: 'purple', borderRadius: '50%' }} onClick={() => setColor('purple')}>purple</button>
                </div>
                {/* <div className='color-list2'>
          {colorList.map((item) => {
            <button style={{ backgroundColor: {item}, borderRadius: '50%'}} onClick={()=>setColor(colorList)}>{item}</button>
          })}
        </div> */}

            </div>
        </div>

    )
}

export default QA