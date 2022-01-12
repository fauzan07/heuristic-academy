import React from 'react';
import {withRouter, NavLink} from "react-router-dom";
import logo from '../../assets/kido-logo.png';
import $ from 'jquery';
import { isMobile } from "react-device-detect";


function Header(props){

  if(isMobile){
    $(".nav-link,.dropdown-item").click(function(){
      if(!$(this).hasClass("dropdown-toggle")){
        $("#navcolbtn").click();
      }
    });
  }


    return(
      <>
       <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-color fixed-top">
          <NavLink className="navbar-brand pl-4" to="/"><img src={logo} alt="logo" width="140"/></NavLink>
          <button className="navbar-toggler" id="navcolbtn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
              <li className="nav-item active pl-5">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item pl-5">
                <NavLink className="nav-link" to="/about-us">About</NavLink>
              </li>
              <li className="nav-item pl-5">
                <NavLink className="nav-link" to="/pedagogy">Pedagogy</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink to="/schools" className="nav-link pl-5 dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Schools
                </NavLink>
                <div className="dropdown-menu pl-4" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/schools">Schools</NavLink>
                  <NavLink className="dropdown-item" to="/franchise">Franchise</NavLink>
                </div>
              </li>
              <li className="nav-item pl-5">
                <NavLink className="nav-link" to="/kido-village">Kido Village</NavLink>
              </li>
              <li className="nav-item pl-5">
                <NavLink className="nav-link" to="/blog">Blog</NavLink>
              </li>
              <li className="nav-item pl-5">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      </>

    );

}

export default withRouter(Header);
