import React from 'react'
import { Button, Form, Input, message, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

function CoupleQuiz() {
    const [form] = Form.useForm();

    const onFinish = () => {
        navigate('/couple-quiz/question-page-couple')
    };

    const onFinishFailed = () => {
        message.error('Please enter name');
    };

    const navigate = useNavigate()

    return (
        <>
            <div className='center'>
                <img width={'20%'} src='https://img.freepik.com/free-vector/lovers-couple-holding-read-heart-together-happy-valentine-cartoon-character-illustration_56104-389.jpg?w=826&t=st=1703572071~exp=1703572671~hmac=a468c8986b3f61f79d19f60705f489b41a3733f260afe10260b3e80e8074f16b'></img>
                <h3 >Couple Quiz</h3>
                <h4 >How well do your Partner know you?</h4>
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
                <li>Create your own quiz(Editable)</li>
                <li>Share it with your partner</li>
                <li>See your partner results</li>
            </div>
        </>
    );
}

export default CoupleQuiz