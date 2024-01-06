import React from 'react'
import { Button, Form, Input, message, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function QuizEntry() {

    const location = useLocation();
    const navigate = useNavigate()

    const [form] = Form.useForm();

    const onFinish = () => {
        if (location.state.h1 === 'Best Friend') {
            navigate('/quiz-entry/friends', { state: { list: 'QuestionsFriends' } })
        }
        if (location.state.h1 === 'Couple') {
            navigate('/quiz-entry/couples', { state: { list: 'QuestionsCouple' } })
        }
    };

    const onFinishFailed = () => {
        message.error('Please enter name');
    };
    // console.log("helloworld")

    return (
        <>
            <div className='center'>
                <img width={'40%'} style={{margin:'20px'}} src={location.state.src}></img>
                <h3 style={{margin:'10px', fontFamily:'cursive'}}>{location.state.h1} Quiz</h3>
                <h4 style={{margin:'10px', fontFamily:'cursive'}}>How well do your {location.state.h2} know you?</h4>
            </div>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <Form.Item
                    name="name"
                    label="What is your name?"
                    rules={[{ required: true }, { type: 'name' }, { type: 'string', min: 1 }]}
                    style={{ width: '500px', textAlign: 'center', fontStyle:'inherit' }}
                
                >
                    <Input placeholder="Enter your name" style={{fontFamily: 'cursive'}}/>
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ width: '500px',fontFamily: 'cursive' }}>
                            Get Started
                        </Button>
                    </Space>
                </Form.Item>
            </Form >
            <div className='center' style={{ textAlign: 'start', width: '25%',fontFamily: 'cursive' }}>
                <li>Create your own quiz</li>
                <li>Share it with your {location.state.h2}</li>
                <li>{location.state.h3}</li>
            </div>
        </>
    );
}

export default QuizEntry