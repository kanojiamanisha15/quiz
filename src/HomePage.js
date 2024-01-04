import React from 'react'
import { Card, Button } from 'antd';
import Meta from 'antd/es/card/Meta'
import Foot from './Foot';
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const gridStyle1 = {
        width: '50%',
        textAlign: 'center',
    };

    const gridStyle2 = {
        width: '25%',
        textAlign: 'center',
    };

    const navigate = useNavigate()

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Create Your Quiz</h2>
            <h3>Best Friend & Couple Quiz</h3>
            <Card width='50%'>
                <Card.Grid style={gridStyle1} hoverable onClick={() => navigate("bestfriends-quiz")}>
                    <img width='100px' alt="example" src="https://www.shutterstock.com/image-vector/little-kid-hug-best-friend-600nw-2168332329.jpg" />
                    <Meta title="Best Friends Quiz" description="" />
                </Card.Grid>

                <Card.Grid style={gridStyle1} hoverable onClick={() => navigate("couple-quiz")}>
                    <img width='100px' alt="example" src="https://www.shutterstock.com/image-vector/little-kid-hug-best-friend-600nw-2168332329.jpg" />
                    <Meta title="Couple Quiz" description="" />
                </Card.Grid>
                {/* <Card.Grid style={gridStyle1} hoverable>
                    <img width='100px' alt="example" src="https://www.shutterstock.com/image-vector/little-kid-hug-best-friend-600nw-2168332329.jpg" />
                    <Meta title="Instagram Media Downloader" description="" />
                </Card.Grid> */}
            </Card>
            {/* 
            <Card title="Create quiz competition">
                <Card.Grid style={gridStyle2}>
                    <img width={125} src='https://cdn-products.eneba.com/resized-products/dEdZeooTmlzeNGBKPTKCbL7Ob_wvjzO4sNYvr1f-xYU_350x200_3x-0.jpg' />
                    <Meta title='Free Fire' />
                </Card.Grid>
                <Card.Grid style={gridStyle2}>
                    <img width={125} src='https://cdn-products.eneba.com/resized-products/dEdZeooTmlzeNGBKPTKCbL7Ob_wvjzO4sNYvr1f-xYU_350x200_3x-0.jpg' />
                    <Meta title='Free Fire' />
                </Card.Grid>
                <Card.Grid style={gridStyle2}>
                    <img width={125} src='https://cdn-products.eneba.com/resized-products/dEdZeooTmlzeNGBKPTKCbL7Ob_wvjzO4sNYvr1f-xYU_350x200_3x-0.jpg' />
                    <Meta title='Free Fire' />
                </Card.Grid>
                <Card.Grid style={gridStyle2}>
                    <img width={125} src='https://cdn-products.eneba.com/resized-products/dEdZeooTmlzeNGBKPTKCbL7Ob_wvjzO4sNYvr1f-xYU_350x200_3x-0.jpg' />
                    <Meta title='Free Fire' />
                </Card.Grid>
                <Card.Grid style={gridStyle2}>
                    <img width={125} src='https://cdn-products.eneba.com/resized-products/dEdZeooTmlzeNGBKPTKCbL7Ob_wvjzO4sNYvr1f-xYU_350x200_3x-0.jpg' />
                    <Meta title='Free Fire' />
                </Card.Grid>
                <Card.Grid style={gridStyle2}>
                    <img width={125} src='https://cdn-products.eneba.com/resized-products/dEdZeooTmlzeNGBKPTKCbL7Ob_wvjzO4sNYvr1f-xYU_350x200_3x-0.jpg' />
                    <Meta title='Free Fire' />
                </Card.Grid>
                <Card.Grid style={gridStyle2}>
                    <img width={125} src='https://cdn-products.eneba.com/resized-products/dEdZeooTmlzeNGBKPTKCbL7Ob_wvjzO4sNYvr1f-xYU_350x200_3x-0.jpg' />
                    <Meta title='Free Fire' />
                </Card.Grid>
            </Card>

            <Card title='Blog' className='blogs'>
                <Card.Grid style={{ width: 755 }} className="container">
                    <img
                        alt="example"
                        src="https://quizmingle.gangsofgamer.com/_next/image?url=%2Fimages%2Fposts%2Fthe-psychology-of-money-rich-dad-poor-dad.webp&w=1920&q=75"
                    />
                    <p style={{ fontSize: 10 }}>Posted on August 5, 2022</p>
                    <Meta
                        title="Read these 2 books to become financialy free in life."
                        description="Real wealth is freedom of ability to do anything you want to do at anytime you want to do."
                    />
                    <Button>Read More</Button>
                </Card.Grid>
                <Card.Grid style={{ width: 755 }} className="container">
                    <img
                        alt="example"
                        src="https://quizmingle.gangsofgamer.com/_next/image?url=%2Fimages%2Fposts%2Fthe-psychology-of-money-rich-dad-poor-dad.webp&w=1920&q=75"
                    />
                    <p style={{ fontSize: 10 }}>Posted on August 5, 2022</p>
                    <Meta
                        title="Read these 2 books to become financialy free in life."
                        description="Real wealth is freedom of ability to do anything you want to do at anytime you want to do."
                    />
                    <Button>Read More</Button>
                </Card.Grid>
                <Card.Grid style={{ width: 755 }} className="container">
                    <img
                        alt="example"
                        src="https://quizmingle.gangsofgamer.com/_next/image?url=%2Fimages%2Fposts%2Fthe-psychology-of-money-rich-dad-poor-dad.webp&w=1920&q=75"
                    />
                    <p style={{ fontSize: 10 }}>Posted on August 5, 2022</p>
                    <Meta
                        title="Read these 2 books to become financialy free in life."
                        description="Real wealth is freedom of ability to do anything you want to do at anytime you want to do."
                    />
                    <Button>Read More</Button>
                </Card.Grid>
                <Card.Grid style={{ width: 755 }} className="container">
                    <img
                        alt="example"
                        src="https://quizmingle.gangsofgamer.com/_next/image?url=%2Fimages%2Fposts%2Fthe-psychology-of-money-rich-dad-poor-dad.webp&w=1920&q=75"
                    />
                    <p style={{ fontSize: 10 }}>Posted on August 5, 2022</p>
                    <Meta
                        title="Read these 2 books to become financialy free in life."
                        description="Real wealth is freedom of ability to do anything you want to do at anytime you want to do."
                    />
                    <Button>Read More</Button>
                </Card.Grid>
                <Card.Grid style={{ width: 755 }} className="container">
                    <img
                        alt="example"
                        src="https://quizmingle.gangsofgamer.com/_next/image?url=%2Fimages%2Fposts%2Fthe-psychology-of-money-rich-dad-poor-dad.webp&w=1920&q=75"
                    />
                    <p style={{ fontSize: 10 }}>Posted on August 5, 2022</p>
                    <Meta
                        title="Read these 2 books to become financialy free in life."
                        description="Real wealth is freedom of ability to do anything you want to do at anytime you want to do."
                    />
                    <Button>Read More</Button>
                </Card.Grid>
                <Card.Grid style={{ width: 755 }} className="container">
                    <img
                        alt="example"
                        src="https://quizmingle.gangsofgamer.com/_next/image?url=%2Fimages%2Fposts%2Fthe-psychology-of-money-rich-dad-poor-dad.webp&w=1920&q=75"
                    />
                    <p style={{ fontSize: 10 }}>Posted on August 5, 2022</p>
                    <Meta
                        title="Read these 2 books to become financialy free in life."
                        description="Real wealth is freedom of ability to do anything you want to do at anytime you want to do."
                    />
                    <Button>Read More</Button>
                </Card.Grid>
            </Card> */}
            <Foot />
        </div>
    )
}

export default HomePage