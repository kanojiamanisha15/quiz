import React from 'react'
import { Button, Form, Input, message, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

function BestFriendsQuiz() {
    const [form] = Form.useForm();

    const onFinish = () => {
        navigate('/bestfriends-quiz/question-page-friends')
    };

    const onFinishFailed = () => {
        message.error('Please enter name');
    };

    const navigate = useNavigate()
 console.log("helloworld")
    return (
        <>
            <div className='center'>
                <img width={'20%'} src='https://www.shutterstock.com/image-vector/little-kid-hug-best-friend-600nw-2168332329.jpg'></img>
                <h3 >Best Friend Quiz</h3>
                <h4 >How well do your friends know you?</h4>
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
                    style={{ width: '500px', textAlign: 'center' }}
                >
                    <Input placeholder="Enter your name" />
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button type="primary" htmlType="submit" style={{ width: '500px' }}>
                            Get Started
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
            <div className='center' style={{ textAlign: 'start', width: '25%' }}>
                <li>Create your own quiz</li>
                <li>Share it with your friends</li>
                <li>See their results & discover your real best friends</li>
            </div>
        </>
    );
}

export default BestFriendsQuiz