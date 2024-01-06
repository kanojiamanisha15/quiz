import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import SideDrawer from './SideDrawer';
import { Link, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { Header } = Layout;

const NavBar = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate()

    return (

        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Link to='/' type="primary" className='side-bar'>
                    Quizmingle
                </Link>
                <SideDrawer />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[window.location.pathname]}
                    onClick={({ key }) => {
                        if (key === 'instagram') {
                            window.open('https://www.instagram.com/quizmingle_official/', "_blank", "noreferrer")
                        } else if (key === 'twitter') {
                            window.open('https://twitter.com/quizmingle', "_blank", "noreferrer")
                        }
                        navigate(key)
                    }
                    }
                    items={[
                        {
                            label: 'BLOG',
                            key: "blogPage"
                        },
                        {
                            label: <InstagramOutlined style={{ fontSize: '130%'}}/>,
                            key: 'instagram',
                        },
                        {
                            label: <TwitterOutlined style={{ fontSize: '130%'}}/>,
                            key: 'twitter'
                        },
                        {
                            label: 'ABOUT US',
                            key: 'aboutUsPage'
                        },
                        {
                            label: 'PRIVACY POLICY',
                            key: 'privacyPage'
                        },
                        {
                            label: 'TERMS OF USE',
                            key: 'termsofuse'
                        }
                    ]}
                    style={{
                        flex: 1,
                        minWidth: 0
                    }}
                />
                <Button>Download Apk</Button>
            </Header>
        </Layout>
    );
};

export default NavBar;