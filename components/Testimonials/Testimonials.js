import React from 'react';
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image from 'next/image';

function Testimonials(props) {
    const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
        ssr: false,
      });
    
      const state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
        },
    }
    




  return(
    <>
      <section className="testimonials-section pt-5" id="testimonials">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-lg-12">
                  <h1 className="center-head mr-3 mb-4">What Students say about us</h1>
                    <OwlCarousel className='owl-theme testimonials' responsive={state.responsive} loop nav dots={false}>
                    <div className="hear-from-slider border rounded shadow-sm item bg-white p-4 mx-1">
                        <div className="testi-para">
                            <i className="here-from-p-text"><i class="fa fa-quote-left fa-2x text-primary me-3" aria-hidden="true"></i>I never thought my performance would be this great in six month of Full stack Developement. All thanks to the great faculties of Heuristic Academy . I wouldn’t have been able to make it without them. Their way of teaching, Explaining and superb guidance has really shaped my career goals.</i>
                        </div>
                        <div className="mt-4 text-end">
                            {/* <img src="../assets/test-img4.png" className="testi-img" alt="Testiprofile" /> */}
                            <div className="ml-4">
                                <h4 className="text-primary">Jawad Shaikh</h4>
                                <small>Student</small>
                            </div>
                        </div>
                    </div>
                    <div className="hear-from-slider border rounded shadow-sm item bg-white p-4 mx-2">
                        <div className="testi-para">
                            <i className="here-from-p-text"><i class="fa fa-quote-left fa-2x text-primary me-3" aria-hidden="true"></i>Heuristic Academy is the place for tinkerers! The place to level up your knowledge of theory to application.With the best experienced faculty and fun to learn behaviour, we experience learning in a fun way.</i>
                        </div>
                        <div className="mt-4 text-end">
                            {/* <img src="../assets/test-img4.png" className="testi-img" alt="Testiprofile" /> */}
                            <div className="ml-4">
                                <h4 className="text-primary">Rashid Sarang</h4>
                                <small>Student</small>
                            </div>
                        </div>
                    </div>
                    <div className="hear-from-slider border rounded shadow-sm item bg-white p-4 mx-2">
                        <div className="testi-para">
                            <i className="here-from-p-text"><i class="fa fa-quote-left fa-2x text-primary me-3" aria-hidden="true"></i>I have been this institute for 2 months and let's be honest, I learnt skills in a deeper manner infact the faculties are so supportive and help us to grow in various skills like soft skills and technical skills.</i>
                        </div>
                        <div className="mt-4 text-end">
                            {/* <img src="../assets/test-img4.png" className="testi-img" alt="Testiprofile" /> */}
                            <div className="ml-4">
                                <h4 className="text-primary">Kshitij Dandge</h4>
                                <small>Student</small>
                            </div>
                        </div>
                    </div>
                    <div className="hear-from-slider border rounded shadow-sm item bg-white p-4 mx-2">
                        <div className="testi-para">
                            <i className="here-from-p-text"><i class="fa fa-quote-left fa-2x text-primary me-3" aria-hidden="true"></i>Very helpful for career point of view and Thanks to teachers of Heuristic Academy to teach us other than syllabus to build our career.</i>
                        </div>
                        <div className="mt-4 text-end">
                            {/* <img src="../assets/test-img4.png" className="testi-img" alt="Testiprofile" /> */}
                            <div className="ml-4">
                                <h4 className="text-primary">Sahu Sameer</h4>
                                <small>Student</small>
                            </div>
                        </div>
                    </div>
                    <div className="hear-from-slider border rounded shadow-sm item bg-white p-4 mx-2">
                        <div className="testi-para">
                            <i className="here-from-p-text"><i class="fa fa-quote-left fa-2x text-primary me-3" aria-hidden="true"></i>The class is awesome! The instructor spoke very clear and was very knowledgeable and patient. This was my first time taking a course in this format and it far exceeded my expectations.</i>
                        </div>
                        <div className="mt-4 text-end">
                            {/* <img src="../assets/test-img4.png" className="testi-img" alt="Testiprofile" /> */}
                            <div className="ml-4">
                                <h4 className="text-primary">Huda Shaikh</h4>
                                <small>Student</small>
                            </div>
                        </div>
                    </div>
                    <div className="hear-from-slider border rounded shadow-sm item bg-white p-4 mx-2">
                        <div className="testi-para">
                            <i className="here-from-p-text"><i class="fa fa-quote-left fa-2x text-primary me-3" aria-hidden="true"></i>Before joining this course I wasn't able to adopt coding Languages but after joining this course I found it was interesting and familiar. The teaching skills of Fauzan Falke sir is worthy of appreciating.The flexibility and clearing doubts is also a good part.</i>
                        </div>
                        <div className="mt-4 text-end">
                            {/* <img src="../assets/test-img4.png" className="testi-img" alt="Testiprofile" /> */}
                            <div className="ml-4">
                                <h4 className="text-primary">Haris Patel</h4>
                                <small>Student</small>
                            </div>
                        </div>
                    </div>
                    </OwlCarousel>
              </div>
          </div>
      </div>
      </section>
        </>
  );

}

export default Testimonials;
