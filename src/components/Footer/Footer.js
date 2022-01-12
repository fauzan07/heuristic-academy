import React from 'react';
import {Link} from "react-router-dom";



function Footer(props) {
  return(
    
    <>
    <footer>
             
        <section className="footer-area">
          <div className="container">
                <div className="row justify-content-center py-4">
                    <div className="col-lg-6 my-1">
                            <div className="footer-widget footer-info pb-3">
                                {/* <h4 className="widget-title pb-3">OPEN YOUR OWN KIDO POD & PRESCHOOL</h4> */}
                                <div className="global-offices">
                                  <h4 className="widget-title">GLOBAL OFFICES:</h4>
                                  <ul className="list-unstyled">
                                      <li><b>United Kingdom: </b>Kido Education Oakmoore Court Kingswood Road, Hampton Lovett, Driotwich, Worcestershire WR9 0QH, UK</li>
                                      <li><b>Singapore: </b>Kido Education (Singapore) Pte. Ltd. <br/>Quantm education Pte. Ltd. <br/>30 Raffles Place, #23-01 Oxley@Raffles, Singapore 048622</li>
                                      <li><b>India: </b>KID-O EDUCATION PRIVATE LIMITED 1002, Mohini heights, 5th Road, Ramkrishna Nagar, Khar West, Mumbai-400052</li>
                                  </ul>
                                </div>
                            </div>
                        </div>
                    <div className="col-lg-3 col-md-6 my-1">
                            <div className="footer-widget footer-info">
                                <h4 className="widget-title pb-3 quick-links">QUICK LINKS</h4>
                                <ul className="list-unstyled row justify-content-center">
                                  <div className="col-lg-5">
                                    <li><Link className="" to="/">Home</Link></li>
                                    <li><Link className="" to="/pedagogy">Pedagogy</Link></li>
                                    <li><Link className="" to="/schools">Schools</Link></li>
                                    <li><Link className="" to="/franchise">franchise</Link></li>
                                  </div>
                                  <div className="col-lg-5">
                                    <li><Link className="" to="/about">About</Link></li>
                                    <li><a className="" href="/kido-village">Kido Village</a></li>
                                    <li><Link className="" to="/contact">Contact</Link></li>
                                  </div>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 my-1">
                            <div className="footer-widget footer-info">
                                <h4 className="widget-title pb-3">CONTACT</h4>
                            </div>
                            <div className="icon-info">
                              <a href="https://www.facebook.com/Kidoeducation/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f pr-3"></i></a>
                              <a href="https://twitter.com/KidoSchools" target="_blank" rel="noreferrer"><i className="fab fa-twitter pr-3"></i></a>
                              <a href="https://www.youtube.com/channel/UC27KCRFZN9r_3-Zeb_3RDGA" target="_blank" rel="noreferrer"><i className="fab fa-youtube pr-3"></i></a>
                              <a href="https://www.linkedin.com/company/kidoed" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    
                            </div>
                        </div>   
                    </div>     
                </div>

                <div className="container-fluid bottom-line"></div>

                <div className="container py-3">
                  <div className="d-flex justify-content-between">
                    <div className="terms"><Link to="/">Terms and conditions</Link></div>
                    <div className="all-rights"><Link to="/">© 2021 Kïdo Education (Singapore) Pte. Ltd.<sup>TM</sup></Link></div>
                  </div>
                </div>
        </section>
       
    </footer>
    </>
  
  );

}

export default Footer;
