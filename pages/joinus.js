import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp, FaPaintBrush, FaMapMarkerAlt } from 'react-icons/fa';
import { TfiEmail, TfiWorld } from "react-icons/tfi";
import { HiComputerDesktop } from "react-icons/hi2";
import { GiTeacher } from "react-icons/gi";
import Link from 'next/link'



// const index = () => {
  function joinus(){


  return (
        <>
      <section className="joinus" id="joinus">
      <Container>
          <Row className="justify-content-md-center">
              <div className="text-center">    
                <Image
                    width="250"
                    height="60"
                    src="/assets/white-logo.png"
                    alt="default"
                />
              </div>
              <h4 className="text-center text-white"> Accelerate your Career</h4>
              <h4 className="text-center text-white">Join Us We Can Help You Succeed.</h4>
              <Col lg="8" md={6}>
                <div className="text-center">
                    <a class="btn btn-white joinnow-buton my-2" href="/assets/course-bro.pdf" download><HiComputerDesktop /> Our Courses</a>
                    <a class="btn btn-white joinnow-buton my-2" href="/assets/coaching-bro.pdf" download><GiTeacher /> Our ICSE/SSC Coaching</a>
                    <a class="btn btn-white joinnow-buton my-2" href="/assets/summer-camp-bro.pdf" download><FaPaintBrush /> Summer Camp</a>
                <Link href="https://heuristicacademy.in/" passHref>
                    <a class="btn btn-white joinnow-buton my-2" target="_blank" rel="noopener noreferrer"><TfiWorld /> Website</a>
                </Link>
                <Link href="https://www.instagram.com/heuristic_academy/" passHref>
                    <a class="btn btn-white joinnow-buton my-2" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a>
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=+917039794283" passHref>
                    <a class="btn btn-white joinnow-buton my-2" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> Whatsapp</a>
                </Link>
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@heuristicacademy.in&su=SUBJECT&body=BODY" passHref>
                    <a class="btn btn-white joinnow-buton my-2" target="_blank" rel="noopener noreferrer"><TfiEmail /> Email</a>
                </Link>
                <Link href="https://goo.gl/maps/MBQdWtrKCSdCTXcn9?share" passHref>
                    <a class="btn btn-white joinnow-buton my-2" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt /> Location</a>
                </Link>
                </div>
              </Col>
          </Row>
      </Container>
      </section>
      </>
  )
}

export default joinus