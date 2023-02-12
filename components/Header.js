import {Navbar, Nav, Container} from 'react-bootstrap';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { isMobile } from "react-device-detect";
if (typeof window !== "undefined") {
  
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());
  gtag('config', 'G-6JW6YCP2XW');
  
}

const Header = () => {



  if(isMobile){
    $(".nav-link").click(function(){
      // if(!$(this).hasClass("dropdown-toggle")){
        $("#navcolbtn").click();
      // }
    });
  }


  return (
    <>
    <Head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app"/>

    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Fugaz+One&family=Permanent+Marker&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
    <title>Heuristic Academy</title>

    {/* //  <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-6JW6YCP2XW"></script>
      {/* <script> */}
       
      {/* </script> */}
  
  </Head>
  <header>
  <Navbar expand="lg" fixed="top"  bg="light">
          <Container fluid>
            <Link href="/"> 
                <a className="navbar-brand">     
                <img src="/assets/logo.jpg" id="logo-image" alt="logo" style={{width : "200px"}}/>
                </a>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" id="navcolbtn" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="navbar-nav mr-auto w-100 justify-content-end clearfix"
                navbarScroll
              >
                <Link href="/"> 
                  <a className="nav-link pe-5">Home</a>
                </Link>
                <Link href="#about">
                  <a className="nav-link pe-5">About</a>
                </Link>
                <Link href="#school">
                  <a className="nav-link pe-5">School Coaching</a>
                </Link>
                <Link href="#courses">
                  <a className="nav-link pe-5">Courses</a>
                </Link>
                <Link href="#activities">
                  <a className="nav-link pe-5">Services</a>
                </Link>
                <Link href="#contact">
                  <a className="nav-link pe-5">Contact</a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
  </>
  )
}

export default Header