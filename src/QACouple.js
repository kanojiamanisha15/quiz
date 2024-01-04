import { useState, useEffect } from 'react'

function QA({ ques }) {
    const [answers, setAnswers] = useState([])
    const [check, setcheck] = useState(null)

    useEffect(() => {
        setAnswers(ques.choices)
      
    }, [])

    let deleteButton = (deletingAnswer) => {
        const newlistAnswers = answers.filter((answer)=>answer!==deletingAnswer)
        setAnswers(newlistAnswers)
        console.log(newlistAnswers)
    }

    const handleChange = (i) => {
        setcheck((prev) => (i === prev ? null : i));
    }

    const onChangeInput = (e) => {
        const { name, value } = e.target

        const editData = answers.map((item) =>
            item === name ? { item, [name]: value } : item
        )
        setAnswers(editData)
    }

    const [color, setColor] = useState('black')

    return (
        <div id={ques.id} className='list-holder' style={{ borderStyle: 'solid', borderColor: color, width: 'max-content' }}>
            <h2><input
                style={{ width: '600px' }}
                name={ques.question}
                type="text"
                onChange={(e) => onChangeInput(e)}
                defaultValue={ques.question}
            ></input></h2>
            <ul>
                {answers.map((answer, i) => (
                    <li key={i}><input type="checkbox" name='check' onChange={() => handleChange(i)} checked={i === check} />
                        <span>
                            <input
                                name={answer}
                                type="text"
                                onChange={(e) => onChangeInput(e)}
                                value={answer}
                            ></input>
                            
                        </span>
                        <button onClick={() => deleteButton(answer, i)}>Delete</button>
                    </li>
                ))}
            </ul>

            <button onClick={() =>
                setAnswers([...answers, 'None of the above'])
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