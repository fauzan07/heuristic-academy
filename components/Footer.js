import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import $ from 'jquery';
import ScrollToTop from "react-scroll-to-top";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from "next/image";

const Footer = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

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

  setTimeout(()=>{
    setShow(true)
  }, 1000)

 }, []);

 function openSchNav() {
  console.log("aaaaaaa");
document.getElementById("mySchSidenav").style.width = "380px";
}

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

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h3>ICSE Admission Open</h3></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
              key=""
              width="480" 
              height="480"
              objectFit="contain"
              src="/assets/icse Admission.png"
              alt=""
              loading="eager"
            />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={openSchNav}>
            Enroll Now
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Footer