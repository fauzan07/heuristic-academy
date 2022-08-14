import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { useRouter } from "next/router";
import Axios from "axios";



const EnrollmentForm = () => {

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
  } 
  
  const [fname, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pname, setPname] = useState("");
  const [pphone, setPphone] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [message, setMessage] = useState("");

  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [studentParentName, setStudentParentName] = useState("");
  const [studentParentPhone, setStudentParentPhone] = useState("");
  const [studentCourseIn, setStudentCourseIn] = useState("");
  const [studentMessage, setStudentMessage] = useState("");

  const [fnameErr, setFNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [phoneErr, setPhoneErr] = useState({});
  const [pnameErr, setPnameErr] = useState({});
  const [pphoneErr, setPphoneErr] = useState({});
  const [selectedCourseErr, setSelectedCourseErr] = useState({});

  const router = useRouter();

  const [isEnrollmentLeadAdded, setIsEnrollmentLeadAdded] = useState(false);

  useEffect(() => {
    setIsEnrollmentLeadAdded(false);
  }, [isEnrollmentLeadAdded]);

  const handleEnrollmentSubmit = (event) => {
    event.preventDefault();
    const isValid = formValidation();
    if(isValid){      
    Axios
        .post(`https://educaretech-dashboard-default-rtdb.firebaseio.com/enrollmentLead.json`,
        {
            studentName: fname,
            studentEmail: email,
            studentPhone : phone,
            studentParentName: pname,
            studentParentPhone: pphone,
            studentCourseIn: selectedCourse,
            studentMessage : message,
            studentTimestamp: new Date().toUTCString(),
        }
        )
        .then((response) => {
            router.push('/thankyou');
            setIsEnrollmentLeadAdded(true);
        })
        .catch((error) => console.log("Error" + error));
        // event.target.reset();
        setStudentName("");
        setStudentEmail("");
        setStudentPhone("");
        setStudentParentName("");
        setStudentParentPhone("");
        setStudentCourseIn("");
        setStudentMessage("");
      }
  };


  const formValidation = () =>{
    const fnameErr = {};
    const emailErr = {};
    const phoneErr = {};
    const pnameErr = {};
    const pphoneErr = {};
    const selectedCourseErr = {};
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

    if(pname.length == ""){
      pnameErr.pnameRequired = "Please enter Parent name";
      isValid = false;
    }else if((pname.trim().length <= 3) || (pname.trim().length >= 30)){
      pnameErr.pnameShort = "Parent Name lenght must be between 3 and 30";
      isValid = false;
    }else if(!isNaN(pname)){
      pnameErr.pnameChar = "only character is allowed";
      isValid = false;
    }

    if(pphone.length == ""){
      pphoneErr.pphoneRequired = "Please enter Parent Phone Number";
      isValid = false;
    }else if(isNaN(pphone)){
      pphoneErr.pphoneNum = "phone number should be in digits";
      isValid = false;
    }else if(pphone.length!=10){
      pphoneErr.pphoneDigit = "phone number should be in 10 digits not more or less than 10";
      isValid = false;
    }

    if(selectedCourse == ""){
      selectedCourseErr.selectedCourseRequired = "Please Select the Course";
      isValid = false;
    }


  setFNameErr(fnameErr);
  setEmailErr(emailErr);
  setPhoneErr(phoneErr);
  setPnameErr(pnameErr);
  setPphoneErr(pphoneErr);
  setSelectedCourseErr(selectedCourseErr);

  return isValid;
    
  }

  

  return (
    <>      
      <Container>
          <Row className="justify-content-md-center">
              <Col lg="12" md={6}>
                <div className="d-flex justify-content-between">
                    <h2 className="text-primary">Enrollment Form</h2>
                    <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                </div>
                <p>Please enter the following details to initiate your application in Development program with Heuristic Academy</p>
                <hr/>
              <form onSubmit={handleEnrollmentSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" id="name"
                  value={fname} 
                  onChange={(event) => setFName(event.target.value)} 
                  placeholder="Enter Your Name"/>
                  {Object.keys(fnameErr).map((key)=>{
                    return <div style={{color : "red"}}><span>{fnameErr[key]}</span></div>
                  })}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="text" name="email" id="email" 
                 value={email} 
                 onChange={(event) => setEmail(event.target.value)} 
                 placeholder="Enter Your Email"/>
                 {Object.keys(emailErr).map((key)=>{
                    return <div style={{color : "red"}}><span>{emailErr[key]}</span></div>
                  })}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Your Mobile Number</Form.Label>
                <Form.Control type="number" name="phone_no" id="phone_no" 
                 value={phone} 
                 onChange={(event) => setPhone(event.target.value)}
                 placeholder="Enter Your Phone No"/>
                 {Object.keys(phoneErr).map((key)=>{
                    return <div style={{color : "red"}}><span>{phoneErr[key]}</span></div>
                  })}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Enter your Parent / guardian  Name</Form.Label>
                <Form.Control type="text" name="parent_name" id="parent_name" 
                value={pname} 
                onChange={(event) => setPname(event.target.value)}
                placeholder="Enter Your parent Name"/>
                {Object.keys(pnameErr).map((key)=>{
                    return <div style={{color : "red"}}><span>{pnameErr[key]}</span></div>
                  })}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Enter your Parents / guardian contact number</Form.Label>
                <Form.Control type="number" name="parent_contact" id="parent_contact" 
                value={pphone} 
                onChange={(event) => setPphone(event.target.value)}
                placeholder="Enter Your Parent Phone No"/>
                {Object.keys(pphoneErr).map((key)=>{
                    return <div style={{color : "red"}}><span>{pphoneErr[key]}</span></div>
                  })}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Select Course your are looking for</Form.Label>
                <Form.Select
                value={selectedCourse} 
                onChange={(event) => setSelectedCourse(event.target.value)}>
                    <option value="">Select Course</option>
                    <option value="Full stack Development">Full stack Development</option>
                    <option value="Front end Development">Front end Development</option>
                    <option value="Back end Development">Back end Development</option>
                    <option value="Software Testing">Software Testing</option>
                    <option value="Embedded Development">Embedded Development</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Electrical Design">Electrical Design</option>
                </Form.Select>
                {Object.keys(selectedCourseErr).map((key)=>{
                    return <div style={{color : "red"}}><span>{selectedCourseErr[key]}</span></div>
                    })}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Any Queries ?</Form.Label>
                <Form.Control as="textarea" rows={3} name="message" id="message" 
                value={message} 
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Message"/>
            </Form.Group>
            <button type="submit" className="btn btn-sm btn-primary">Submit</button>
            </form>	     
              </Col>
          </Row>
      </Container>

    </>
  )
}

export default EnrollmentForm