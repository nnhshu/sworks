import React,{useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiMail, FiFacebook, FiInstagram } from "react-icons/fi";

import './Footer.scss';

import Title from '../Title/Title';

import ImgFooter from '../../assets/images/img-footer_1.png';
import BgFooter from '../../assets/images/bg-footer.jpg';
import Facbook from '../../assets/images/icons-svg/facebook.svg';
import Instagram from '../../assets/images/icons-svg/instagram.svg';
import Skype from '../../assets/images/icons-svg/skype.svg';
import Email from '../../assets/images/icons-svg/email.svg';
import SmartPhone from '../../assets/images/icons-svg/smartphone.svg';

function Footer () {

    const style_heroBanner = {
        background: `url(${BgFooter}) rgba(180, 180, 180, 0.08)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'multiply'
    };

    return(
        <>
            <section className="footer" style={style_heroBanner}>
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <Title 
                                title="Liên hệ với chúng tôi" 
                                sub_title="" 
                            />
                            <div className="footer-listSocial">
                                <a target="_blank" href="https://www.facebook.com/nnh.shu">
                                    <img src={Facbook} />
                                </a>
                                <a target="_blank" href="https://www.instagram.com/nnh.fe">
                                    <img src={Instagram} />
                                </a>
                                <a target="_blank" href="https://join.skype.com/invite/otVthUT5FzBK">
                                    <img src={Skype} />
                                </a>
                            </div>
                        </Col>
                        <Col md={12} className="text-center">
                            <div className="d-flex justify-content-center flex-direction-column">
                                <div className="footer-box">
                                    <div className="footer-box__img">
                                        <img src={Email} width="24" />
                                    </div>
                                    <div className="footer-box__text">
                                        <span className="font-weight-bold">nhathaonguyen.dev@gmail.com</span>
                                    </div>
                                </div>
                                <div className="footer-box">
                                    <div className="footer-box__img">
                                        <img src={SmartPhone} width="24" />
                                    </div>
                                    <span className="font-weight-bold">0975.356.819</span>
                                </div>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Footer;