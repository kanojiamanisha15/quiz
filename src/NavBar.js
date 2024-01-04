import React from 'react';
import { Button, Layout, Menu, theme } from 'antd';
import SideDrawer from './SideDrawer';
import { Link, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
                            label: 'Blog',
                            key: "blogPage"
                        },
                        {
                            label: 'Instagram',
                            key: 'instagram',
                        },
                        {
                            label: 'Twitter',
                            key: 'twitter'
                        },
                        {
                            label: 'About Us',
                            key: 'aboutUsPage'
                        },
                        {
                            label: 'Privacy Policy',
                            key: 'privacyPage'
                        },
                        {
                            label: 'Terms of Use',
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