import React, { useState } from 'react';
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import fullStack from '../../public/assets/full-stack-hero.jpg';
import backEnd from '../../public/assets/back-end-hero.jpg';
import frontEnd from '../../public/assets/front-end-hero.jpg';
import softwareTesting from '../../public/assets/software-testing-hero.jpg';
import embdeded from '../../public/assets/embeded-hero.jpg';
import dataScience from '../../public/assets/data-science-hero.jpg';
import electrical from '../../public/assets/electrical-hero.jpg';



function Courses() {
    const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
        ssr: false,
      });
    
      const state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 4,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    }
    

    const [showFS, setShowFS] = useState(false);
    const [showFE, setShowFE] = useState(false);
    const [showBE, setShowBE] = useState(false);
    const [showEM, setShowEM] = useState(false);
    const [showST, setShowST] = useState(false);
    const [showDS, setShowDS] = useState(false);
    const [showEL, setShowEL] = useState(false);


    function openNav() {
        console.log("aaaaaaa");
      document.getElementById("mySidenav").style.width = "360px";
    }



  return(
    <>
      <section className="courses-section pt-5" id="courses">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-12">
                  <h1 className="center-head mr-3 mb-4">Our Programmes</h1>
                    <p>Choose from Bunch of courses Available with the Flexibility of Learning with Proven Method Called as <b>“Heuristic”</b> Means Learning by Doing, Not just Board and Book</p>
                  <OwlCarousel className='owl-theme mb-4' responsive={state.responsive} loop nav dots={false}>
                    <div class="card item shadow-sm mx-2">
                        <img src="assets/full-stack-hero.jpg" className="card-img-top img-fluid" alt="fullstack-course"/>
                        <div class="card-body">
                        <span className="card-top-data">VIDEO LECTURE + LIVE SESSIONS</span>
                        <h3 class="card-title text-primary ms-3 mt-2">Full Stack Development</h3>
                        <hr className='my-4'/>
                        <ul>
                            <li className='mb-2'>6 Months Intense Training</li>
                            <li className='mb-2'>Flexible Timings Per Course</li>
                            <li className='mb-2'>Certificate of Completion</li>
                            <li className='mb-2'>Resume & Interview Training</li>
                        </ul>
                        <button className="btn btn-sm btn-outline-primary ms-3 mt-3" onClick={() => setShowFS(true)}>Learn More</button>
                        </div>
                        <Modal
                            show={showFS}
                            onHide={() => setShowFS(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="contained-modal-title-vcenter"
                            size="lg"
                        >
                            <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                               <h3 className='text-primary'>Full Stack Developer Course Details</h3>
                            </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <img src="assets/full-stack-hero.jpg" className="card-img-top img-fluid" alt="fullstack-course"/>
                            <h4 className="my-4 ">Get started with the Full Stack Developer Program and explore everything about the program.</h4>
                            <p>
                            Full Stack Development is a software profession where a developer deals with both the Frontend (client-side) and Backend (server-side) of a tech product. A Full Stack Developer is proficient in several technologies that help in developing a robust tech product, and thus play a major role in making decisions for the company. It is among the high-demand jobs in the software industry.
                            The 6-month Programme in Full stack Developer  enables learners to build deep tech capabilities and apply their learnings to make a static and Dynamic Website which can be used in E-Commerce or business Driven or can be a Data Accumulation Web Application,with Technologies such as Python , Node.js , PHP, My SQL , JS , GIT , HTML5,CSS3 ,Bootstrap among the many more
                            Participants will experience a unique learning process that includes offline masterclass lectures, hands-on labs, hackathons, workshops, industry interactions & Career counselling.
                            </p>
                            <div className="d-flex justify-content-between">
                                <a className="btn btn-sm btn-primary" href="/assets/FS-course.pdf" download>Download Brochure</a>
                                <a className="btn btn-sm btn-primary" onClick={openNav}>Enroll Now</a>
                            </div>
                            </Modal.Body>
                        </Modal>
                    </div>

                    <div class="card item shadow-sm mx-2">
                        <img src="assets/front-end-hero.jpg" className="card-img-top img-fluid" alt="front-end-course"/>
                        <div class="card-body">
                        <span className="card-top-data">VIDEO LECTURE + LIVE SESSIONS</span>
                        <h3 class="card-title text-primary ms-3 mt-2">Front-End Development</h3>
                        <hr className='my-4'/>
                        <ul>
                            <li className='mb-2'>6 Months Intense Training</li>
                            <li className='mb-2'>Flexible Timings Per Course</li>
                            <li className='mb-2'>Certificate of Completion</li>
                            <li className='mb-2'>Resume & Interview Training</li>
                        </ul>
                        <button className="btn btn-sm btn-outline-primary ms-3 mt-3" onClick={() => setShowFE(true)}>Learn More</button>
                        </div>
                        <Modal
                            show={showFE}
                            onHide={() => setShowFE(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="contained-modal-title-vcenter"
                            size="lg"
                        >
                            <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                               <h3 className='text-primary'>Front-End Developer Course Details</h3>
                            </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <img src="assets/front-end-hero.jpg" className="card-img-top img-fluid" alt="front-end-course"/>
                            <h4 className="my-4 ">Get started with the Front-End Developer Program and explore everything about the program.</h4>
                            <p>
                            Front End Development is a software profession where a developer deals with only the Frontend (client-side) of a tech product. A Front End Developer is proficient in several technologies that help in developing a robust tech product, and thus play a major role in making decisions for the company. It is among the high-demand jobs in the software industry.
                            The 6-month Programme in Full stack Developer  enables learners to build deep tech capabilities and apply their learnings to make a static and Dynamic Website which can be used in E-Commerce or business Driven or can be a Data Accumulation Web Application,with Technologies such as React , ES-6 , JS , GIT , HTML5, CSS3, bootstrap  among the many more
                            Participants will experience a unique learning process that includes offline masterclass lectures, hands-on labs, hackathons, workshops, industry interactions & Career counselling.
                            </p>
                            <div className="d-flex justify-content-between">
                                <a className="btn btn-sm btn-primary" href="/assets/FE-course.pdf" download>Download Brochure</a>
                                <a className="btn btn-sm btn-primary" onClick={openNav}>Enroll Now</a>
                            </div>
                            </Modal.Body>
                        </Modal>
                    </div>

                    <div class="card item shadow-sm mx-2">
                        <img src="assets/back-end-hero.jpg" className="card-img-top responsive" alt="backend-course"/>
                        <div class="card-body">
                        <span className="card-top-data">VIDEO LECTURE + LIVE SESSIONS</span>
                        <h3 class="card-title text-primary ms-3 mt-2">Back-End Development</h3>
                        <hr className='my-4'/>
                        <ul>
                            <li className='mb-2'>6 Months Intense Training</li>
                            <li className='mb-2'>Flexible Timings Per Course</li>
                            <li className='mb-2'>Certificate of Completion</li>
                            <li className='mb-2'>Resume & Interview Training</li>
                        </ul>
                        <button className="btn btn-sm btn-outline-primary ms-3 mt-3" onClick={() => setShowBE(true)}>Learn More</button>
                        </div>
                        <Modal
                            show={showBE}
                            onHide={() => setShowBE(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="contained-modal-title-vcenter"
                            size="lg"
                        >
                            <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                               <h3 className='text-primary'>Back-End Developer Course Details</h3>
                            </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <img src="assets/back-end-hero.jpg" className="card-img-top img-fluid" alt="backend-course"/>
                            <h4 className="my-4 ">Get started with the Back-End Developer Program and explore everything about the program.</h4>
                            <p>
                            Back-End Development is a software profession where a developer deals with only Backend (server-side) of a tech product. A Full Stack Developer is proficient in several technologies that help in developing a robust tech product, and thus play a major role in making decisions for the company. It is among the high-demand jobs in the software industry.
                            The 6-month Programme in Full stack Developer  enables learners to build deep tech capabilities and apply their learnings to make a static and Dynamic Website which can be used in E-Commerce or business Driven or can be a Data Accumulation Web Application,with Technologies such as python, php, linux, My Sql, JS , GIT  among the many more
                            Participants will experience a unique learning process that includes offline masterclass lectures, hands-on labs, hackathons, workshops, industry interactions & Career counselling.
                            </p>
                            <div className="d-flex justify-content-between">
                                <a className="btn btn-sm btn-primary" href="/assets/BE-course.pdf" download>Download Brochure</a>
                                <a className="btn btn-sm btn-primary" onClick={openNav}>Enroll Now</a>
                            </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                    <div class="card item shadow-sm mx-2">
                        <img src="assets/embeded-hero.jpg" className="card-img-top img-fluid" alt="embedded-course"/>
                        <div class="card-body">
                        <span className="card-top-data">VIDEO LECTURE + LIVE SESSIONS</span>
                        <h3 class="card-title text-primary ms-3 mt-2">Embedded Development</h3>
                        <hr className='my-4'/>
                        <ul>
                            <li className='mb-2'>6 Months Intense Training</li>
                            <li className='mb-2'>Flexible Timings Per Course</li>
                            <li className='mb-2'>Certificate of Completion</li>
                            <li className='mb-2'>Resume & Interview Training</li>
                        </ul>
                        <button className="btn btn-sm btn-outline-primary ms-3 mt-3" onClick={() => setShowEM(true)}>Learn More</button>
                        </div>
                        <Modal
                            show={showEM}
                            onHide={() => setShowEM(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="contained-modal-title-vcenter"
                            size="lg"
                        >
                            <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                               <h3 className='text-primary'>Embedded Developer Course Details</h3>
                            </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <img src="assets/embeded-hero.jpg" className="card-img-top img-fluid" alt="embedded-course"/>
                            <h4 className="my-4 ">Get started with the Embedded Developer Program and explore everything about the program.</h4>
                            <p>
                            As per recent research, it is predicted that the Embedded market will be worth US$ 116.2 billion by 2025. This increase in global demand is due to an increase in demand for Consumer Electronics, Industrial Automation and hence there are immense opportunities in hardware and embedded design.
                            The 5-month Programme in Embedded Development  enables learners to build Firmware with a customised Hardware for a Dedicated Problem to Solve, Helps in understanding industry standard design techniques, flows and tools involved in design and maintenance of Embedded Hardware designs, systems and products.
                            Participants will experience a unique learning process that includes offline masterclass lectures, hands-on labs, hackathons, workshops, industry interactions & Career counselling.
                            </p>
                            <div className="d-flex justify-content-between">
                                <a className="btn btn-sm btn-primary" href="/assets/EM-course.pdf" download>Download Brochure</a>
                                <a className="btn btn-sm btn-primary" onClick={openNav}>Enroll Now</a>
                            </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                    <div class="card item shadow-sm mx-2">
                        <img src="assets/software-testing-hero.jpg"  style={{height : "235px"}} className="card-img-top img-fluid" alt="software-test-course"/>
                        <div class="card-body">
                        <span className="card-top-data">VIDEO LECTURE + LIVE SESSIONS</span>
                        <h3 class="card-title text-primary ms-3 mt-2">Software Testing</h3>
                        <hr className='my-4'/>
                        <ul>
                            <li className='mb-2'>3 Months Intense Training</li>
                            <li className='mb-2'>Flexible Timings Per Course</li>
                            <li className='mb-2'>Certificate of Completion</li>
                            <li className='mb-2'>Resume & Interview Training</li>
                        </ul>
                        <button className="btn btn-sm btn-outline-primary ms-3 mt-3" onClick={() => setShowST(true)}>Learn More</button>
                        </div>
                        <Modal
                            show={showST}
                            onHide={() => setShowST(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="contained-modal-title-vcenter"
                            size="lg"
                        >
                            <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                               <h3 className='text-primary'>software Testing Course Details</h3>
                            </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <img src="assets/software-testing-hero.jpg" className="card-img-top img-fluid" alt="software-test-course"/>
                            <h4 className="my-4 ">Get started with the software Testing Program and explore everything about the program.</h4>
                            <p>
                            Manual Testing is a form of software testing in which test cases are run by hand rather than using an automated tool. Both test cases are manually performed by the tester from the viewpoint of the end user. It determines whether or not the application meets the requirements specified in the requirement document. To complete nearly 100% of the software application, test cases are designed and implemented.
                            Manual testing is one of the most basic testing methods because it can identify both obvious and unknown software faults. A defect is the difference between the predicted performance and the output produced by the programme.
                            We at Heuristic Academy make sure to give you practical exposure on  Manual  Testing Training with 100 % placement assistance.
                            Participants will experience a unique learning process that includes offline masterclass lectures, hands-on labs, hackathons, workshops, industry interactions & Career counselling

                            </p>
                            <div className="d-flex justify-content-between">
                                <a className="btn btn-sm btn-primary" href="/assets/ST-course.pdf" download>Download Brochure</a>
                                <a className="btn btn-sm btn-primary" onClick={openNav}>Enroll Now</a>
                            </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                    <div class="card item shadow-sm mx-2">
                        <img src="assets/data-science-hero.jpg" style={{height : "235px"}} className="card-img-top img-fluid" alt="data-science-course"/>
                        <div class="card-body">
                        <span className="card-top-data">VIDEO LECTURE + LIVE SESSIONS</span>
                        <h3 class="card-title text-primary ms-3 mt-2">Data Science</h3>
                        <hr className='my-4'/>
                        <ul>
                            <li className='mb-2'>6 Months Intense Training</li>
                            <li className='mb-2'>Flexible Timings Per Course</li>
                            <li className='mb-2'>Certificate of Completion</li>
                            <li className='mb-2'>Resume & Interview Training</li>
                        </ul>
                        <button className="btn btn-sm btn-outline-primary ms-3 mt-3" onClick={() => setShowDS(true)}>Learn More</button>
                        </div>
                        <Modal
                            show={showDS}
                            onHide={() => setShowDS(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="contained-modal-title-vcenter"
                            size="lg"
                        >
                            <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                               <h3 className='text-primary'>Data Science Course Details</h3>
                            </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <img src="assets/data-science-hero.jpg" className="card-img-top img-fluid" alt="data-science-course"/>
                            <h4 className="my-4 ">Get started with the Data Science Program and explore everything about the program.</h4>
                            <p>
                            Applied Data Science assumes a significant role in the backdrop of massive data generated from millions of devices. Currently, the daily data output is over 2.5 quintillion bytes, likely to touch 1.7 Mb of data per second per person on the planet in the future.
                            The 3-month Programme in Data Science  enables learners to build deep tech capabilities and apply their learnings to make data-driven business decisions for their organisations.
                            Participants will experience a unique learning process that includes offline and online[Hybrid Based] masterclass lectures, hands-on labs, hackathons, workshops, industry interactions & Career counselling.
                            </p>
                            <div className="d-flex justify-content-between">
                                <a className="btn btn-sm btn-primary" href="/assets/DS-course.pdf" download>Download Brochure</a>
                                <a className="btn btn-sm btn-primary" onClick={openNav}>Enroll Now</a>
                            </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                    <div class="card item shadow-sm mx-2">
                        <img src="assets/electrical-hero.jpg" style={{height : "235px"}} className="card-img-top img-fluid" alt="electrical-course"/>
                        <div class="card-body">
                        <span className="card-top-data">VIDEO LECTURE + LIVE SESSIONS</span>
                        <h3 class="card-title text-primary ms-3 mt-2">Electrical Design</h3>
                        <hr className='my-4'/>
                        <ul>
                            <li className='mb-2'>6 Months Intense Training</li>
                            <li className='mb-2'>Flexible Timings Per Course</li>
                            <li className='mb-2'>Certificate of Completion</li>
                            <li className='mb-2'>Resume & Interview Training</li>
                        </ul>
                        <button className="btn btn-sm btn-outline-primary ms-3 mt-3" onClick={() => setShowEL(true)}>Learn More</button>
                        </div>
                        <Modal
                            show={showEL}
                            onHide={() => setShowEL(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="contained-modal-title-vcenter"
                            size="lg"
                        >
                            <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                               <h3 className='text-primary'>Electrical Design Course Details</h3>
                            </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <img src="assets/electrical-hero.jpg" className="card-img-top img-fluid" alt="electrical-course"/>
                            <h4 className="my-4 ">Get started with the Electrical Design Program and explore everything about the program.</h4>
                            <p>
                            DIALux is a professional lighting design software with many functions which can also be integrated depending on the workflow. It helps to design, calculate and visualise light professionally – single rooms, whole floors, buildings and outdoor scenes.
                            The 5-month Programme in Electrical Engg Design  enables learners to build, Helps in understanding industry standard design techniques, flows and tools involved in design and maintenance of Electrical Systems,Lightning the Spaces.
                            </p>
                            <div className="d-flex justify-content-between">
                                <a className="btn btn-sm btn-primary" href="/assets/EL-course.pdf" download>Download Brochure</a>
                                <a className="btn btn-sm btn-primary" onClick={openNav}>Enroll Now</a>
                            </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                    </OwlCarousel>
              </div>
          </div>
      </div>
      </section>
        </>
  );

}

export default Courses;
