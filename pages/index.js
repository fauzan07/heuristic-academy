import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Testimonials from "../components/Testimonials/Testimonials"
import Image from 'next/image';
import Banner1 from '../public/assets/banner1.jpg';
import Banner2 from '../public/assets/banner2.jpg';
import Banner3 from '../public/assets/banner3.jpg';
import Banner4 from '../public/assets/banner4.jpg';
import Courses from '../components/Courses/Courses';
import EnrollmentForm from '../components/EnrollmentForm/EnrollmentForm';
import { useRouter } from "next/router";
import Axios from "axios";


// const index = () => {
  function index(){

      /* Set the width of the side navigation to 300px and the left margin of the page content to 250px */
      function openNav() {
          console.log("aaaaaaa");
        document.getElementById("mySidenav").style.width = "380px";
      }

      const [fname, setFName] = useState("");
      const [lname, setLName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [message, setMessage] = useState("");
    
      const [contactFirstName, setContactFirstName] = useState("");
      const [contactLastName, setContactLastName] = useState("");
      const [contactEmail, setContactEmail] = useState("");
      const [contactPhone, setContactPhone] = useState("");
      const [contactMessage, setContactMessage] = useState("");

      const [fnameErr, setFNameErr] = useState({});
      const [lnameErr, setLNameErr] = useState({});
      const [emailErr, setEmailErr] = useState({});
      const [phoneErr, setPhoneErr] = useState({});

      const router = useRouter();

      const [isContactLeadAdded, setIsContactLeadAdded] = useState(false);

      useEffect(() => {
        setIsContactLeadAdded(false);
      }, [isContactLeadAdded]);

      const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = formValidation();
        if(isValid){      
          Axios
            .post(`https://educaretech-dashboard-default-rtdb.firebaseio.com/contactLead.json`,
            {
                contactFirstName: fname,
                contactLastName: lname,
                contactEmail: email,
                contactPhone : phone,
                contactMessage : message,
                contactTimestamp: new Date().toUTCString(),
            }
            )
            .then((response) => {
                router.push('/thankyou');
                setIsContactLeadAdded(true);
            })
            .catch((error) => console.log("Error" + error));
            // event.target.reset();
            setContactFirstName("");
            setContactLastName("");
            setContactEmail("");
            setContactPhone("");
            setContactMessage(""); 
        }   
      };

      const formValidation = () =>{
        const fnameErr = {};
        const lnameErr = {};
        const emailErr = {};
        const phoneErr = {};
        let isValid = true;
        
        if(fname.length == ""){
          fnameErr.fnameRequired = "Please enter first name";
          isValid = false;
        }else if((fname.trim().length <= 3) || (fname.trim().length >= 30)){
          fnameErr.fnameShort = "Name lenght must be between 3 and 30";
          isValid = false;
        }else if(!isNaN(fname)){
          fnameErr.fnameChar = "only character is allowed";
          isValid = false;
        }
        
         
        if(lname.length == ""){
            lnameErr.lnameRequired = "Please enter Parent name";
            isValid = false;
          }else if((lname.trim().length <= 3) || (lname.trim().length >= 30)){
            lnameErr.lnameShort = "Parent Name lenght must be between 3 and 30";
            isValid = false;
          }else if(!isNaN(lname)){
            lnameErr.lnameChar = "only character is allowed";
            isValid = false;
          }
    
        if(email.length == ""){
          emailErr.emailRequired = "Please enter Email Address";
          isValid = false;
        }else if(email.indexOf('@') <= 0){
          emailErr.emailValid = "@ is at indvalid position";
          isValid = false;
        }else if((email.charAt(email.length-4)!=".") && (email.charAt(email.length-3)!=".")){
          emailErr.emailbadFormat = "Email Address is badly formated";
          isValid = false;
        }
    
    
        if(phone.length == ""){
          phoneErr.phoneRequired = "Please enter Phone Number";
          isValid = false;
        }else if(isNaN(phone)){
          phoneErr.phoneNum = "Phone number should be in digits";
          isValid = false;
        }else if(phone.length!=10){
          phoneErr.phoneDigit = "Phone number should be in 10 digits not more or less than 10";
          isValid = false;
        }
    
      setFNameErr(fnameErr);
      setLNameErr(lnameErr);
      setEmailErr(emailErr);
      setPhoneErr(phoneErr);
    
      return isValid;
        
      }
    
    
  return (
        <>

      <section className="home-banner-area">
      <Container fluid>
          <Row className="justify-content-center">
              {/* <Col lg={12} md={12}> */}
              <Carousel className="carousel-fade" >
                    <Carousel.Item>
                        <img
                        className="banner-hero-img"
                        src="/assets/banner1.jpg"
                        alt="First slide"
                        />
                    <div class="banner-tarea">
                        <h3 className="banner-text">Advanced Career Track in I.T <br/>Development courses.</h3>
                        <a onClick={openNav} class="btn-banner">Enroll Now</a>                        
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="banner-hero-img"
                        src="assets/banner2.jpg"
                        alt="Second slide"
                        />
                    <div class="banner-tarea">
                        <h3 className="banner-text">100% Job Oriented Courses</h3>
                        <a onClick={openNav} class="btn-banner">Enroll Now</a>                        
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="banner-hero-img"
                        src="assets/banner3.jpg"
                        alt="Third slide"
                        />
                    <div class="banner-tarea">
                        <h3 className="banner-text">6 Month Designed Curriculum <br/> with Offline Hands-on Training</h3>
                        <a onClick={openNav} class="btn-banner">Enroll Now</a>                        
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="banner-hero-img"
                        src="assets/banner4.jpg"
                        alt="Third slide"
                        />
                    <div class="banner-tarea">
                        <h3 className="banner-text">Zero to Hero Training, <br/> Get Job Ready</h3>
                        <a onClick={openNav} class="btn-banner">Enroll Now</a>                        
                    </div>
                    </Carousel.Item>
                    </Carousel>
                {/* </Col> */}
          </Row>
      </Container>
      </section>


      <section className="about py-4" id="about">
      <Container>
          <Row className="justify-content-md-center">
              <h1 className="center-head mb-4">About Us</h1>
              <Col lg="7" md={6}>
              <h4 style={{fontSize : "1.4em"}} className="mb-3">Accelerate your career with job-ready digital skills</h4>
               <p>We at Heuristic Academy are a Group of Young Minds,Providing an Experience based Practical Learning called the Method of <b>‘HEURISTIC’</b>.with Our Patent Pending, Digital Learning Platform enable a perfect blend of high-end academics and rich industry practitioners experience Which helps students to get the most out of the Program, and Able to Skillup and grab their Dream Jobs.</p>
                <p>Here we provide you with a structured course that will teach you all you need to know to become a Developer / Designer / Tester / Data scientist. Work through each section, learning new skills (or improving existing ones) as you go along. Each section includes exercises and assessments to test your understanding before you move forward.</p>
                <a onClick={openNav} class="btn btn-outline-primary my-3">Enroll Now</a>
              </Col>
              <Col lg="5" md={6}>
                   <Image src="/assets/about-us.jpg"  width={600} height={400} layout="responsive" className="img-fluid"  alt="main-banner"/>
              </Col>
          </Row>
      </Container>
      </section>

      <Courses/>

      <section className="about py-4" id="activities">
      <Container>
          <Row className="justify-content-md-center">
              <h1 className="center-head mb-4">Key Highlights of our Course</h1>
              <Col lg="7" md={6}>
              <h4>Heuristic Academy provide you</h4>
                  <ul>
                      <li className="py-2">- 6 Months Intense Traning </li>
                      <li className="py-2">- Hands-on Experience on Development Projects </li>
                      <li className="py-2">- 8 projects [ 5 Minor, 3 Major] </li>
                      <li className="py-2">- Communication Skills Development </li>
                      <li className="py-2">- Interview preparation with Industrial Question </li>
                      <li className="py-2">- Mock Interview</li>
                      <li className="py-2">- 100% help to grab jobs</li>
                  </ul>
              </Col>
              <Col lg="5" md={6}>
                   <Image src="/assets/key-fe.jpg" width={600} height={450} layout="responsive"  alt="main-banner"/>
              </Col>
          </Row>
      </Container>
      </section>

    <Testimonials/>

      <section className="certification py-4">
      <Container>
          <Row className="justify-content-md-center">
          <h1 className="center-head pb-3">Our Certification</h1>
              <Col lg="7" md={6}>
                  <h4 className="mid-head pb-5 pt-4">Become a Certified Developer, perfect your coding skills and accelerate your career with Heuristic Academy to get your dream job.</h4>
                  {/* <p>After complition of course </p> */}
                  <p>Talk about your Developer certification on LinkedIn, Twitter, Facebook, boost your resume, or frame it - tell your friends and colleagues about it.</p>
              </Col>
              <Col lg="5" md={6}>
                  <Image src="/assets/certificate.jpg"  width={600} height={450} layout="responsive" className="img-fluid"  alt="main-banner"/>
              </Col>
          </Row>
      </Container>
      </section>


      <section className="choose-course">
        <Container>
          <Row className="justify-content-md-center">
              <Col lg="9">
                  <h2 className="center-head text-white mt-2">Choose the right Development course for you.</h2>
              </Col>
              <Col lg="3" className="btn-mobile-choose">
                <a onClick={openNav} class="btn btn-choose mt-2">Enroll Now</a>
              </Col>
          </Row>
        </Container>
    </section>

    <section className='py-5' id="contact">
        <Container>
        <h1 className="center-head pb-3">Contact Us</h1>
            <Row>
                <Col lg={6} className="mt-3">
                <form onSubmit={handleSubmit}>
                        <Row>
                            <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Your firstname *</Form.Label>
                                <Form.Control type="text"  id="firstname" name="firstname" 
                                value={fname} 
                                onChange={(event) => setFName(event.target.value)} 
                                placeholder="Enter your firstname"/>
                                 {Object.keys(fnameErr).map((key)=>{
                                    return <div style={{color : "red"}}><span>{fnameErr[key]}</span></div>
                                })}
                            </Form.Group>
                            </Col>
                            <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Your lastname *</Form.Label>
                                <Form.Control type="text"  id="lastname" name="lastname" 
                                    value={lname} 
                                    onChange={(event) => setLName(event.target.value)} 
                                    placeholder="Enter your lastname"/>
                                    {Object.keys(lnameErr).map((key)=>{
                                        return <div style={{color : "red"}}><span>{lnameErr[key]}</span></div>
                                    })}
                            </Form.Group>
                            </Col>
                        </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>Your phone *</Form.Label>
                                <Form.Control type="number"  id="mobile" name="mobile" 
                                 value={phone} 
                                 onChange={(event) => setPhone(event.target.value)} 
                                 placeholder="Enter your phone no"/>
                                 {Object.keys(phoneErr).map((key)=>{
                                    return <div style={{color : "red"}}><span>{phoneErr[key]}</span></div>
                                })}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Your email *</Form.Label>
                                <Form.Control id="email" type="email" name="email" 
                                value={email} 
                                onChange={(event) => setEmail(event.target.value)} 
                                placeholder="Enter your email"/>
                                {Object.keys(emailErr).map((key)=>{
                                    return <div style={{color : "red"}}><span>{emailErr[key]}</span></div>
                                })}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Your message for us</Form.Label>
                                <Form.Control as="textarea" rows={3} name="message" id="message" 
                                value={message} 
                                onChange={(event) => setMessage(event.target.value)}
                                placeholder="Enter your Message"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <button className="btn btn-outline-primary w-100" type="submit">
                                Submit
                            </button>
                            </Form.Group>
                    </form>
                </Col>
                <Col lg={6} className="mt-3">
                    <div class="icon mb-3"><i class="fas fa-map-marker-alt"></i> <b>Our Academy</b></div>
                    <p>1,United Apartments, Opp Richardson & Crudas Ltd, Nagpada, Mumbai - 400008</p>
                    <div class="icon mb-3"><i class="far fa-clock"></i> <b>Open Office Hours</b></div>
                    <p>Mon-Sun: 10am – 9pm</p>
                    <div class="icon mb-3"><i class="fa fa-phone"></i><b> Get in Touch</b></div>
                    <p><a href="tel:+917039794283">+91 7039794283</a></p>
                    <p><a href="tel:+919987056292">+91 9987056292</a></p>
                    <div class="icon mb-3"><i class="fa fa-envelope"></i><b> Mail Us At</b></div>
                    <p><a href="https://gmail.com" target="blank">Info@heuristicacademy.in</a></p>
                    <ul class="d-flex list-unstyled ">
                      <li><a href="https://api.whatsapp.com/send?phone=+917039794283" target="blank"><i class="text-facebook fab fa-whatsapp" aria-hidden="true"></i></a></li>
                      <li><a href="https://www.instagram.com/heuristic_academy/" target="blank"><i class="text-insta fab fa-instagram" aria-hidden="true"></i></a></li>            
                      <li><a href="https://g.page/zayn-academy?share" target="blank"><i class="text-map fas fa-map-marker-alt" aria-hidden="true"></i></a></li>            
                  </ul>
                </Col>
            </Row>
        </Container>
    </section>

        <div id="mySidenav" class="sidenav bg-white border-right">
        <div class="px-3 py-2">
            <EnrollmentForm/>
        </div>
    </div>
      </>
  )
}

export default index