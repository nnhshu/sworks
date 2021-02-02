import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import '../assets/scss/pages/AboutUs.scss';
import ImgIntro from '../assets/images/bg-newyear.png';
import Portfolio_1 from '../assets/images/portfolio/01.png';
import Portfolio_2 from '../assets/images/portfolio/02.png';
import Portfolio_3 from '../assets/images/portfolio/03.png';
import Portfolio_4 from '../assets/images/portfolio/04.png';
import Portfolio_5 from '../assets/images/portfolio/05.png';
import Portfolio_6 from '../assets/images/portfolio/06.png';



import Title from '../components/Title/Title';
import Single_Portfolio from '../components/Single_Portfolio/Single_Portfolio';
import Footer from '../components/Footer/Footer';

function Portfolio_Us() {

    const portfolios = [
        {
            name: 'Funiture',
            link_web: 'https://marvelapp.com/prototype/78af968',
            path: Portfolio_1,
            desc: ''
        },
        {
            name: 'Gemadept',
            link_web: 'https://marvelapp.com/prototype/b270hh1',
            path: Portfolio_2,
            desc: ''
        },
        {
            name: 'Swing Buddy',
            link_web: 'https://marvelapp.com/prototype/996g7h1',
            path: Portfolio_3,
            desc: ''
        },
        {
            name: 'Iwanna Tech',
            link_web: 'https://marvelapp.com/prototype/bg9df5g/screen/75332638',
            path: Portfolio_4,
            desc: ''
        },
        {
            name: 'Eapokcoffee',
            link_web: 'https://marvelapp.com/prototype/7b16376',
            path: Portfolio_6,
            desc: ''
        },
        {
            name: 'Dailong Cable',
            link_web: 'https://marvelapp.com/prototype/7466968',
            path: Portfolio_5,
            desc: ''
        }
    ];
    

    return (
        <div className="portfolioUs">
            <section className="porfolio-us">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="d-flex justify-content-between align-items-center">
                                <Title
                                    title="Dự án của chúng tôi" 
                                    sub_title="Chứa đựng Tâm huyết - Sáng tạo"
                                />
                            </div>
                        </Col>
                        {
                            portfolios.map( (item,index) =>
                            
                                <Col md={4} key={index}>
                                    <Single_Portfolio
                                        name={item.name}
                                        link_web={item.link_web}
                                        path_img={item.path}
                                        desc={item.desc}
                                    />
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </section>
            <Footer/>
        </div>
    );
}

export default Portfolio_Us;
