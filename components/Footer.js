import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import React, { useEffect } from "react";
import $ from 'jquery';
import ScrollToTop from "react-scroll-to-top";


const Footer = () => {
  useEffect(() => {
    function checkScroll(){
      var startY = window.innerHeight; //The point where the navbar changes in px

      if($(window).scrollTop() > startY){
          $('.navbar').addClass("scrolled");
          $('.dropdown-menu').addClass("drop-scrolled");
          $('#logo-image').attr("src","../assets/white-logo.png");
      }else{
          $('.navbar').removeClass("scrolled");
          $('.dropdown-menu').removeClass("drop-scrolled");
          $('#logo-image').attr("src","../assets/logo.jpg");
      }
  }

  if($('.banner-hero-img').length > 0){
      $(window).on("scroll load resize", function(){
          checkScroll();
      });
  }else{
    $('.navbar').addClass("scrolled");
    $('.dropdown-menu').addClass("drop-scrolled");
    $('#logo-image').attr("src","/assets/white-logo.png");
  }
 });


  return (
    <>      
    <section className="foot bg-dark bg-border-btm bg-border-top py-4">
      <Container>
          <Row className="justify-content-md-center">
              <Col lg="12" md={6}>
              <div className="d-flex justify-content-between">
              <p class="text-white"><small>&copy;Copyright &copy;All rights reserved</small></p>
              <p class="text-white"><small> This site by Heuristic Academy</small></p>
              </div>
              </Col>
          </Row>
      </Container>
    </section>
    <ScrollToTop smooth color="white" height="20" style={{backgroundColor : "#962a30"}} />

    </>
  )
}

export default Footer