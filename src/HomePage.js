import React from 'react'
import { Card, Button } from 'antd';
import Foot from './Foot';
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const gridStyle1 = {
        width: '50%',
        textAlign: 'center',
        border: '0.3rem solid blue',
        borderRadius:'15%'
    };

    const gridStyle2 = {
        width: '50%',
        textAlign: 'center',
        border: '0.3rem solid red',
        borderRadius:'15%'
    };

    const navigate = useNavigate()

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{margin: '30px', fontFamily:'cursive', fontSize:'25px', backgroundColor:'orange', padding:'5px', borderRadius:'10px' }}>Create Your Quiz</h2>
            <h3 style={{marginBottom: '20px', fontFamily:'cursive', fontSize:'20px' }}>Best Friend & Couple Quiz</h3>
            <Card width='50%' style={{marginBottom:'50px'}}>
                {/* <Card.Grid style={gridStyle1} hoverable onClick={() => navigate("bestfriends-quiz")}>
                    <img width='100px' alt="example" src="https://www.shutterstock.com/image-vector/little-kid-hug-best-friend-600nw-2168332329.jpg" />
                    <Meta title="Best Friends Quiz" description="" />
                </Card.Grid>

                <Card.Grid style={gridStyle1} hoverable onClick={() => navigate("couple-quiz")}>
                    <img width='100px' alt="example" src="https://www.shutterstock.com/image-vector/little-kid-hug-best-friend-600nw-2168332329.jpg" />
                    <Meta title="Couple Quiz" description="" />
                </Card.Grid> */}
                <Card.Grid style={gridStyle1} hoverable onClick={() => navigate("quiz-entry", { state: { params: 'Friends', h1: 'Best Friend', h2: 'friends', h3: 'See their results & discover your real best friends', src: 'https://img.freepik.com/free-vector/flat-design-youth-day-concept_23-2148596053.jpg?w=996&t=st=1704477359~exp=1704477959~hmac=d67e19530c961ebb6c4e9609289b9d0d399bcc7a67b3be50dedfe1068a3b6446' } })}>
                    <img width='230px' height='180px'alt="example" src="https://img.freepik.com/free-vector/flat-design-youth-day-concept_23-2148596053.jpg?w=996&t=st=1704477359~exp=1704477959~hmac=d67e19530c961ebb6c4e9609289b9d0d399bcc7a67b3be50dedfe1068a3b6446" />
                    <div style={ {marginBottom:'0px', fontFamily:'cursive', fontSize:'20px'}}  description="">Best Friends Quiz</div>
                </Card.Grid>

                <Card.Grid style={gridStyle2} hoverable onClick={() => navigate("quiz-entry", { state: { params: 'Couples', h1: 'Couple', h2: 'partner', h3: 'See your partner results', src: 'https://img.freepik.com/free-vector/couple-character-cartoon-bride-groom-pre-wedding-background-pink-hearts_40876-2927.jpg?w=740&t=st=1704477697~exp=1704478297~hmac=4d8549a976c6eb16b7875f778d89fc759171d5be8ac3e0ec608c92a04bb8d99f' } })}>
                    <img width='230px' height='180px' alt="example" src="https://img.freepik.com/free-vector/couple-character-cartoon-bride-groom-pre-wedding-background-pink-hearts_40876-2927.jpg?w=740&t=st=1704477697~exp=1704478297~hmac=4d8549a976c6eb16b7875f778d89fc759171d5be8ac3e0ec608c92a04bb8d99f" />
                    <div style={ {marginBottom:'0px', fontFamily:'cursive', fontSize:'20px'}}  description="">Couple Quiz</div>
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