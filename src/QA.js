import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { CloseOutlined } from '@ant-design/icons';

function QA({ ques }) {
    const [answers, setAnswers] = useState([])
    const [check, setcheck] = useState(null)

    useEffect(() => {
        setAnswers(ques.choices)
    }, [])

    let deleteButton = (deletingAnswer) => {
        const newlistAnswers = answers.filter((answer) => answer !== deletingAnswer)
        setAnswers(newlistAnswers)
        ques.choices = newlistAnswers
    }

    const handleAddOptions = () => {
        const newAnswers = ([...answers, { id: uuidv4(), name: 'None of the above', }])
        setAnswers(newAnswers)
        ques.choices = newAnswers
    }

    const onChangeQuestion = (e) => {
        ques.question = e.target.value
    }

    const onChangeInput = (e) => {
        let answersCopy = [...answers]
        let objIndex = answersCopy.findIndex((obj => obj.id === e.target.id));
        answersCopy[objIndex].name = e.target.value
        setAnswers(answersCopy)
    }

    const handleChange = (i) => {
        setcheck((prev) => (i === prev ? null : i));
    }

    const [color, setColor] = useState('black')

    const colorList = ['red', 'green', 'blue', 'yellow', 'orange', 'purple']

    const handleColor = (item) => {
        setColor(item)
        ques.color = item
    }

    return (
        <div>
            <div style={{ margin: 'auto', width: '30%', padding:'5px', borderStyle: 'none', backgroundColor: color, textAlign: 'center', borderRadius: '8px', color: 'white' }}>Question {ques.id}</div>
            <div id={ques.id} className='list-holder' style={{
                borderStyle: 'solid', borderColor: color, width: 'max-content',
                marginBottom: '15px', borderRadius: '15px'
            }}>
                <input className='questions'
                    style={{ width: '600px', padding: '15px', margin: '15px', borderRadius: '15px', borderColor: color, borderStyle: 'solid' }}
                    name={ques.question}
                    type="text"
                    onChange={(e) => onChangeQuestion(e)}
                    defaultValue={ques.question}
                ></input>
                {answers.map((answer) => (
                    <div style={{ display: 'flex', marginBottom: '10px', gap: '10px', marginRight: '10px', marginLeft: '10px' }}>
                        <input type="checkbox" name='check' onChange={() => handleChange(answer.id)} checked={answer.id === check} />
                        <input className='questions'
                            style={{ width: '580px', padding: '15px', borderRadius: '15px', borderColor: color, borderStyle: 'solid' }}
                            id={answer.id}
                            name={ques.id + answer.id} //string
                            type="text"
                            onChange={(e) => onChangeInput(e)}
                            value={answer.name}
                        />
                        <button className="delete-button" onClick={() => deleteButton(answer)}>{<CloseOutlined style={{ margin: '10px' }} />}</button>
                    </div>
                ))}
                <button className="add-button" onClick={() => handleAddOptions()} >Add new option</button>
                <div className='color-buttons'>
                    <div className='color-list2'>
                        {colorList.map((item) =>
                            <button className='color-button' style={{ backgroundColor: item, borderRadius: '50%' }} onClick={() => handleColor(item)}></button>
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default QA