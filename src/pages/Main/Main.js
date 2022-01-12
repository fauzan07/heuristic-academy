import React from 'react';
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import logo from '../../assets/kido-logo.jpg'
import { FaPhoneAlt } from 'react-icons/fa';
import MainBanner from '../../assets/main-banner.png';
import ActivityBanner from '../../assets/activities-banner.png'
import Course from '../../assets/course.jpg'
import Certificate from '../../assets/certificate.jpg'



function Main(props) {


    return(
        <>
            <section className="banner bg-border-btm bg-border-top bg-white py-3">
                <Container >
                    <Row className="justify-content-md-center">
                        <Col className="text-center" xs lg="10" md={10}>
                            <img src={logo} width="400" className="img-fluid"/>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="main-page bg-white">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="5" md={6}>
                        <img src={MainBanner} className="img-fluid"  alt="main-banner"/>
                    </Col>
                    <Col xs lg="7" md={6} className="text-center">
                        <h1 className="main-head">Front-end Development Course</h1>
                        <h4>Welcome to our front-end web developer learning pathway!</h4>
                        <p>Here we provide you with a structured course that will teach you all you need to know to become a front-end web developer. Work through each section, learning new skills (or improving existing ones) as you go along. Each section includes exercises and assessments to test your understanding before you move forward.</p>
                    </Col>
                </Row>
            </Container>
            </section>

            <section className="about py-4">
            <Container>
                <Row className="justify-content-md-center">
                    <h1 className="text-center center-head">Activites</h1>
                    <Col xs lg="7" md={10}>
                    <h4>Heuristic Academy provide you</h4>
                        <ul>
                            <li className="py-2">- Hands-on Experience on Web development Projects </li>
                            <li className="py-2">- 3 projects [ 1 Minor, 2 Major] </li>
                            <li className="py-2">- Communication Skills Development </li>
                            <li className="py-2">- Interview preparation with Industrial Question </li>
                            <li className="py-2">- Mock Interview</li>
                            <li className="py-2">- 100% help to grab jobs</li>
                        </ul>
                    </Col>
                    <Col xs lg="5" md={6}>
                        <img src={ActivityBanner} className="img-fluid"  alt="activity-banner"/>
                    </Col>
                </Row>
            </Container>
            </section>


            <section className="course bg-white py-4">
            <Container>
                <Row className="justify-content-md-center">
                <h1 className="text-center center-head pb-3">Front End Developer Course Details</h1>
                    <Col xs lg="4" md={6}>
                        <img src={Course} className="img-fluid"  alt="main-banner"/>
                    </Col>
                    <Col xs lg="7" md={6} lg={{ offset: 1 }}>
                        <h4 className="mid-head pb-5 pt-4">Get started with the Front End Developer Program and explore everything about the program.</h4>
                        <p>Fill the form and get enrolled  for 5 Month Front End Development Program</p>
                        <p>Last date of enrollment is 25th January 2021.</p>
                        <p>Course will be starting from 5th February 2022.</p>
                        <p>Grab ur seat now and get 4000 discount..only pay 18,000/- instead of 22,000/-</p>
                        <p>You can pay online on phonepe or Gpay or Cheque </p>
                        <a className="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer" href="https://bit.ly/2TqiyPn">Enroll Now</a>
                    </Col>
                </Row>
            </Container>
            </section>

            <section className="certification py-4">
            <Container>
                <Row className="justify-content-md-center">
                <h1 className="text-center center-head pb-3">Our Certification</h1>
                    <Col xs lg="7" md={6}>
                        <h4 className="mid-head pb-5 pt-4">Become a certified Front End developer, perfect your coding skills and accelerate your career with Heuristic Academy to get your dream job.</h4>
                        {/* <p>After complition of course </p> */}
                        <p>Talk about your Front End Developer certification on LinkedIn, Twitter, Facebook, boost your resume, or frame it - tell your friends and colleagues about it.</p>
                    </Col>
                    <Col xs lg="5" md={6}>
                        <img src={Certificate} className="img-fluid"  alt="main-banner"/>
                    </Col>
                </Row>
            </Container>
            </section>

            <section className="contact-us bg-white py-4">
            <Container>
                <Row className="justify-content-md-center">
                <h1 className="text-center center-head pb-3">Contact Us</h1>
                    <Col xs lg="10" md={6}>
                    <p class="my-info text-center pt-4">You can contact us on <a href="https://gmail.com" target="blank">email.heuristicacademy.in</a> or <a href="tel:8097603225">8097603225</a> , <a href="tel:7710854491">7710854491</a> or connect with us on any of the following platforms below:</p>
                    <div class="media-icon pt-5">
                    <ul class="d-flex list-unstyled justify-content-center">
                            <li><a href="https://api.whatsapp.com/send?phone=8097603225" target="blank"><i class="text-facebook fab fa-whatsapp" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.instagram.com/heuristic_academy/" target="blank"><i class="text-insta fab fa-instagram" aria-hidden="true"></i></a></li>            
                            <li><a href="https://g.page/zayn-academy?share" target="blank"><i class="text-map fas fa-map-marker-alt" aria-hidden="true"></i></a></li>            
                        </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            </section>
                   
        </>
    )
}


export default Main;