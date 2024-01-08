import React from 'react'
import { Row, Col } from 'antd'
import { Layout } from 'antd';

const { Footer } = Layout;

function Foot() {
    return (
        <>
            <Layout style={{ width:'100%'}}>
                <Footer >
                    <Row style={{ padding: '25px', display: 'flex' }}>
                        <Col span={8} style={{ padding: '0 16px' }}>quizmingle
                        </Col>
                        <Col span={8} style={{ padding: '0 16px' }}>
                            <p>Media</p>
                            <p style={{cursor:'pointer', color:'grey'}}>Instagram</p>
                            <p style={{cursor:'pointer', color:'grey'}}>Twitter</p>
                            <p style={{cursor:'pointer', color:'grey'}}>About Us</p>
                        </Col>
                        <Col span={8} style={{ padding: '0 16px' }}>
                            <p>Legal</p>
                            <p style={{cursor:'pointer', color:'grey'}}>Privacy Policy</p>
                            <p style={{cursor:'pointer', color:'grey'}}>Terms of Use</p>
                        </Col>
                    </Row>
                    <Row style={{ padding: '25px', display: 'flex', justifyContent:'space-between' }}>
                        <Col span={8} style={{ padding: '0 16px 150px 0', color:'grey'}}>© 2022 quizmingle. All rights reserved.</Col>
                        <Col span={8} style={{ padding: '0 16px 150px 0', textAlign:'right', color:'grey'}}>Made with ♥ by quizmingle team</Col>
                    </Row>
                </Footer>
            </Layout>
        </>
    )
}

export default Foot