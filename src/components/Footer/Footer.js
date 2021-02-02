import React,{useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiMail, FiFacebook, FiInstagram } from "react-icons/fi";

import './Footer.scss';

import Title from '../Title/Title';

import ImgFooter from '../../assets/images/img-footer_1.png';
import Facbook from '../../assets/images/icons-svg/facebook.svg';
import Instagram from '../../assets/images/icons-svg/instagram.svg';
import Skype from '../../assets/images/icons-svg/skype.svg';
import Email from '../../assets/images/icons-svg/email.svg';
import SmartPhone from '../../assets/images/icons-svg/smartphone.svg';

function Footer () {

    return(
        <>
            <section className="footer">
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <Title 
                                title="Liên hệ với chúng tôi" 
                                sub_title="" 
                            />
                            <div className="footer-listSocial">
                                <a target="_blank" href="">
                                    <img src={Facbook} />
                                </a>
                                <a target="_blank" href="">
                                    <img src={Instagram} />
                                </a>
                                <a target="_blank" href="">
                                    <img src={Skype} />
                                </a>
                            </div>
                        </Col>
                        <Col md={12} className="text-center">
                            <div className="d-flex justify-content-center flex-direction-column">
                                <div className="footer-box">
                                    <img src={Email} width="64" />
                                    <div className="footer-box__text">
                                        <span className="font-weight-bold">nnhshu97@gmail.com</span>
                                        <span className="font-weight-bold">phaminhtuong89@gmail.com</span>
                                    </div>
                                </div>
                                <div className="footer-box">
                                    <img src={SmartPhone} width="64" />
                                    <span className="font-weight-bold">0975.356.819</span>
                                    <span className="font-weight-bold">0975356819</span>
                                </div>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
                <img src={ImgFooter} className="footer-imgLeft"/>
            </section>
        </>
    );
}

export default Footer;