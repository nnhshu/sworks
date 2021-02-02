import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


import '../assets/scss/pages/AboutUs.scss';
import ImgIntro from '../assets/images/bg-newyear.png';
import FinalProject from '../assets/images/plan/final.png';


import Footer from '../components/Footer/Footer';

function About_Us() {

    return (
        <div className="aboutUs">
            <section className="aboutUs__intro position-relative">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} className="text-center">
                            <img src={ImgIntro} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer/>
        </div>
    );
}

export default About_Us;
