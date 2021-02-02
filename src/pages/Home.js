import React, {useState, useEffect} from 'react';
import TypeIt from "typeit-react";
import { Container, Row, Col } from 'react-bootstrap';
import { CgArrowLongRight } from "react-icons/cg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink as Link
} from "react-router-dom";


import '../assets/scss/HomePage.scss';
import OfficeBg from '../assets/images/office-bg.png';
import Bg_2 from '../assets/images/4706201.jpg';
import ChooseUsBg from '../assets/images/bg-1.png';
import AboutUs from '../assets/images/01.png';
import AboutUs_1 from '../assets/images/04.png';
import Knowledge from '../assets/images/icons-svg/knowledge.svg';
import Prototype from '../assets/images/icons-svg/prototype.svg';
import SocialMedia from '../assets/images/icons-svg/social-media.svg';
import Ads from '../assets/images/icons-svg/ads.svg';
import ServiceIcon_1 from '../assets/images/icons-svg/web-design.svg';
import ServiceIcon_2 from '../assets/images/icons-svg/responsive-design.svg';
import ServiceIcon_3 from '../assets/images/icons-svg/line-graph.svg';
import ServiceIcon_4 from '../assets/images/icons-svg/light-bulb.svg';
import Portfolio_1 from '../assets/images/portfolio/01.png';
import Portfolio_2 from '../assets/images/portfolio/02.png';
import Portfolio_3 from '../assets/images/portfolio/03.png';
import Portfolio_4 from '../assets/images/portfolio/04.png';
import Portfolio_5 from '../assets/images/portfolio/05.png';
import Portfolio_6 from '../assets/images/portfolio/06.png';

/* Feature Image */

import DocumentUser from '../assets/images/plan/document_user.png';
import Idea from '../assets/images/plan/idea.png';
import Coding from '../assets/images/plan/coding.png';
import FinalProject from '../assets/images/plan/final.png';


import Title from '../components/Title/Title';
import Service_Item from '../components/Service/Service';
import IconBox from '../components/Icon_Box/Icon_Box';
import Single_Portfolio from '../components/Single_Portfolio/Single_Portfolio';
import Counter from '../components/Counter/Counter';
import Feature_Box from '../components/Feature_Box/Feature_Box';
import Footer from '../components/Footer/Footer';

function HomePage() {
    const style_heroBanner = {
        background: `url(${OfficeBg}) rgba(180, 180, 180, 0.08)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'multiply',
        backgroundAttachment: 'fixed'
    };

    const style_ChooseUs = {
        backgroundImage: `url(${ChooseUsBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };

    const style_Counters = {
        background: `url(${Bg_2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    const services = [
        {
            icon: Knowledge,
            name: 'Thiết kế website',
            desc: 'Chúng tôi sẽ phân tích ưu/khuyết, đưa ra những tính năng phù hợp nhất cho kế hoạch, phương hướng phát triển, độ phù hợp với thị trường và kinh phí dự kiến'
        },
        {
            icon: Prototype,
            name: 'Convert PSD to HTML',
            desc: 'Bề dày kinh nghiệm về Front End của chúng tôi đã có hơn 3 năm kinh nghiệm với nhiều dự án trong và ngoài nước.'
        },
        {
            icon: SocialMedia,
            name: 'Thiết kế đồ hoạ',
            desc: 'Cung cấp dịch vụ thiết kế đồ họa chuyên nghiệp tại Hà Nội với đội ngũ Designer có chuyên môn cao, trẻ trung và sáng tạo trong ngành thiết kế đồ họa.'
        },
        {
            icon: Ads,
            name: 'Quảng cáo Facebook - Google',
            desc: 'Bạn đang băn khoăn lựa chọn các nhà quảng cáo, các công ty truyền thông uy tín? Hãy để chuyên gia quảng cáo Facebook của chúng tôi tư vấn giúp bạn hiểu rõ hơn về quảng cáo Facebook.'
        }
    ];

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

    const counters = [
        {
            number: 30,
            path: '',
            text:' Dự án được thực hiện'
        },
        {
            number: 75,
            path: '',
            text:'Khách hàng'
        },
        {
            number: 70,
            path: '',
            text:'Khách hàng đánh giá cao'
        },
        {
            number: 100,
            path: '',
            text:'Khách hàng yêu thích'
        }
    ];

    const features = [
        {
            name: 'Tiếp nhận thông tin và phân tích yêu cầu của khách hàng',
            path: DocumentUser,
            desc: 'Thống nhất yêu cầu nghiệp vụ, Product (prototype, wireframe)'
        },
        {
            name: 'Lập Plan & Triển khai hệ thống',
            path: Idea,
            desc: 'Chuẩn bị hạ tầng, môi trường Dev, Stagging và Production'
        },
        {
            name: 'Coding - Test & Fix bug',
            path: Coding,
            desc: 'API load thông tin - Xây dựng Front end & Back end cho website - Lập Test Case & Review Test Case'
        },
        {
            name: 'Go-Live (hoàn tất dự án, hướng dẫn & bàn giao)',
            path: FinalProject,
            desc: 'Report kết quả Go-live , Gửi Email confirm biên bản nghiệm thu với khách hàng'
        }
    ];

    const chooseUs = [
        {
            name: "Xây dựng quảng bá và nâng tầm thương hiệu",
            desc: "Xây dựng hình ảnh chuyên nghiệp trong cho doanh nghiệp trong con mắt của khách hàng và đối tác"
        },
        {
            name: "Tăng khả năng tiếp thị khách hàng trên internet",
            desc: "Giải pháp phát triển doanh nghiệp trong thời đai 4.0 tiếp cận khách hàng trên toàn thế giới."
        },
        {
            name: "Giao tiếp 2 chiều giữa doanh nghiệp với khách hàng",
            desc: "Website làm việc 24/7 giúp khách hàng đặt mua, thắc mắc về sản - phẩm dịch vụ, chính sách bán hàng hoặc các chương trình ưu đãi, hậu mãi một cách dễ dàng."
        },
        {
            name: "Cung cấp thông tin tới khách hàng nhanh chóng",
            desc: "Mọi thông tin mà bạn mong muốn truyền tải đến khách hàng đều có thể thông qua website một cách nhanh chóng."
        }
    ];
    const options = {
        containerHeight : '100vh',
        animationTimer : 500,
        animationTimerBuffer: 100

    }
    

    return (
        <div className="home-wrapper">
            <section className="hero-banner position-relative" style={style_heroBanner} >
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} className="text-center">
                            <TypeIt>
                                <h1 className="mb-5 hero-title">
                                    Thấu hiểu, đồng hành và thiết kế trải nghiệm digital không giới hạn              
                                </h1>
                                <p className="lead mt-5 mb-0">Web design - Marketing online - Brands</p>
                            </TypeIt>
                           
                        </Col>
                    </Row>
                </Container>
                <div className="icon-scroll"></div>
            </section>
            <section className="service-us">
                <Container>
                    <Row className="justify-content-between align-items-center mb-4 mb-lg-0">
                        <Col md={12} className="text-center">
                            <Title 
                                title="Dịch vụ" 
                                sub_title="Cung cấp các giải pháp toàn diện cho chiến lược marketing và bán hàng online của bạn!" 
                            />
                        </Col>
                        {
                            services.map( (service,index) => 
                                <Col md={6} key={index}>
                                    <Service_Item 
                                        icon={service.icon}
                                        name={service.name}
                                        desc={service.desc}
                                    />
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </section>
            <section className="about-us">
                <Container>
                    <Row className="align-items-center justify-content-between">
                        <Col md={12} lg={5} className="mb-5 mb-lg-0">
                            <img src={AboutUs} alt="Image" className="img-fluid rounded" />
                        </Col>
                        <Col md={12} lg={7}>
                            <Title 
                                title="Giải pháp hoàn hảo" 
                                sub_title="Dành cho doanh nghiệp nhỏ của bạn" 
                            />
                            {
                                chooseUs.map ( (item,index) => 

                                    <IconBox key={index}
                                        name={item.name}
                                        desc={item.desc}
                                    />
                                )
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="whyChoose-us" style={style_ChooseUs}>
                <Container>
                    <Row>
                        <Col md={12} lg={6}>
                            <Title 
                                title="Hãy để chúng tôi" 
                                sub_title="Đồng hành cùng bạn tạo nên những website chuyên nghiệp" 
                            />
                            <img src={AboutUs_1} width="75%" />
                        </Col>
                        <Col lg={6} md={12}>
                            <Row>
                                <Col md={6} className="">
                                    <div className="rounded shadow whyChoose-us__box">
                                        <div className="bg-primary p-2 d-inline-block rounded">
                                            <div className="f-icon-m text-white"> 
                                                <img src={ServiceIcon_1} width="48" />
                                            </div>
                                        </div>
                                        <h5 className="mt-4 mb-3">Thiết kế chuyên nghiệp</h5>
                                        <p className="mb-0">Độc quyền dành riêng cho bạn...</p>
                                    </div>
                                </Col>
                                <Col md={6} className="mt-5">
                                    <div className="rounded shadow whyChoose-us__box">
                                        <div className="bg-primary p-2 d-inline-block rounded">
                                            <div className="f-icon-m text-white">
                                                <img src={ServiceIcon_4} width="48" />
                                            </div>
                                        </div>
                                        <h5 className="mt-4 mb-3">Dễ dàng sử dụng</h5>
                                        <p className="mb-0">Trang quản trị dễ sử dụng, tính tùy biến linh hoạt cho phép khách hàng quản lý mọi thứ …</p>
                                    </div>
                                </Col>
                                <Col md={6} className="mt-5 mt-md-0">
                                    <div className="rounded shadow whyChoose-us__box">
                                        <div className="bg-primary p-2 d-inline-block rounded">
                                            <div className="f-icon-m text-white">
                                                <img src={ServiceIcon_2} width="48" />
                                            </div>
                                        </div>
                                        <h5 className="mt-4 mb-3">Tương thích mọi thiết bị</h5>
                                        <p className="mb-0">PC, Laptop, Mobile, Tablet...</p>
                                    </div>
                                </Col>
                                <Col md={6} className="mt-5">
                                    <div className="rounded shadow whyChoose-us__box">
                                        <div className="bg-primary p-2 d-inline-block rounded">
                                            <div className="f-icon-m text-white">
                                                <img src={ServiceIcon_3} width="48" />
                                            </div>
                                        </div>
                                        <h5 className="mt-4 mb-3">Báo cáo thống kê chi tiết</h5>
                                        <p className="mb-0">Lượng khách hàng truy cập vào website...</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="porfolio-us">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="d-flex justify-content-between align-items-center">
                                <Title
                                    title="Dự án của chúng tôi" 
                                    sub_title="Chứa đựng Tâm huyết - Sáng tạo"
                                />
                                <Link to="/portfolio_us" className="title-btn btn-link pc">
                                    Khám phá thêm 
                                    <CgArrowLongRight size="24"/>
                                </Link>
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
            <section className="counters">
                <Container>
                    <Row>
                        <Col md="12" className="text-center">
                            <Title
                                    title="Quy trình làm việc" 
                                    sub_title="Rõ ràng - Chất lượng - Chuyên nghiệp"
                                />
                        </Col>
                        {
                            features.map( (item,index) =>
                                <Col md={6} key={index}>
                                    <Feature_Box 
                                        className="mb-3"
                                        number={index+1}
                                        path_img={item.path}
                                        name={item.name}
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

export default HomePage;
