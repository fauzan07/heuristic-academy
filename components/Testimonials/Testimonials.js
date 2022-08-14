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
                            <i className="here-from-p-text"><i class="fa fa-quote-left fa-2x text-primary me-3" aria-hidden="true"></i>Through start of college everyone give horrible vibes of codeing and through that I kept thinking has I chose a wrong career for my life, but after attending lecture of Fauzan Falke I got a +ve vibe that I have chosen the right path for my career.</i>
                        </div>
                        <div className="mt-4 text-end">
                            {/* <img src="../assets/test-img4.png" className="testi-img" alt="Testiprofile" /> */}
                            <div className="ml-4">
                                <h4 className="text-primary">Aquib Naqwa</h4>
                                <small>Student</small>
                            </div>
                        </div>
                    </div>
                    <div className="hear-from-slider border rounded shadow-sm item bg-white p-4 mx-2">
                        <div className="testi-para">
                            <i className="here-from-p-text"><i class="fa fa-quote-left fa-2x text-primary me-3" aria-hidden="true"></i>Thanks to the Professor and teaching staff for all the help! This is a fabulous course and I would definitely recommend it to anyone interested in web development</i>
                        </div>
                        <div className="mt-4 text-end">
                            {/* <img src="../assets/test-img4.png" className="testi-img" alt="Testiprofile" /> */}
                            <div className="ml-4">
                                <h4 className="text-primary">Saalim Ansari</h4>
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
