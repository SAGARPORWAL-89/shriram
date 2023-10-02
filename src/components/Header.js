import { FaRegEnvelope, FaLocationArrow, FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaList, FaSearch } from "react-icons/fa";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Nav } from "react-bootstrap";
import React, { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';


import {
  Link
} from 'react-router-dom';

function Header() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (

    <div className="nav">

      <div className="nav1">
        <span><FaPhoneAlt /> 8770200028 </span>
        <span>
          <FaRegEnvelope className="a" />
          info@shriramtechnology.com.in</span>
        <span>  <FaLocationArrow className="a" /> Gwalior  </span>
        <span>  <FaLocationArrow className="a" /> New Delhi </span>
        <span>  <FaLocationArrow className="a" /> Jaipur</span>

      </div>
      <div className="nav2">
        <h6>Follow us:</h6>
        <FaFacebookF className="b" />
        <FaInstagram className="b" />
        <FaTwitter className="b" />
      </div>


      <div className="container conttt">
        <div className="navbar navbar-expand-lg header">

          <img src="http://shriramtechnology.com/images/newlogo.png"></img>



          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse menu " id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item Home"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"> <Link to="/aboutus" className="nav-link">About us</Link></li>
              <li className="nav-item"><a href="" className="nav-link">Services</a></li>
              <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
              <li className="nav-item"><Link to="/our" className="nav-link">Ourbrand</Link></li>
              <li className="nav-item"><Link to="/blogs" className="nav-link">Blog</Link></li>
              <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
           

              <center>
                <div className="spicon">
                  <FaSearch className="mt-3 si" />
                  <div className="spicon1"></div>
                  
                  <FaList onClick={handleShow} className="mt-3 si1" />
                 
                </div>
              </center>
              
             
            </ul>
          </div>


        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>  
            <img src="http://shriramtechnology.com/images/newlogo.png" className="image-fluid img20"></img>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <p>Start working with an company that can provide everything you need to generate awareness, drive traffic, connect with customers, and increase sales montes, nascetur ridiculus mus</p>
              <div className="row mt-5">
              <div className="col-md-3"></div>
           <div className="col-md-8"> 
            <h5>Gwalior</h5>
            <p>3rd Floor, Jairam Palce, Shinde Ki Chhawani, Lashkar, Gwalior (M.P.), India</p>
           </div>
           </div>
           <div className="row mt-4">
              <div className="col-md-3"></div>
           <div className="col-md-8"> 
            <h5>New Delhi</h5>
            <p>Mangal Market Road, Uttam Nagar, New Delhi, India</p>
           </div>
           </div>
           <div className="row mt-4">
              <div className="col-md-3"></div>
           <div className="col-md-8"> 
            <h5>877-020-0028</h5>
            <p>Give us a call</p>
           </div>
           </div>
           <div className="row mt-4">
              <div className="col-md-3"></div>
           <div className="col-md-8"> 
            <h5>contact@asltechworld.in</h5>
            <p>24/7 online support</p>
           </div>
           </div>
        </Offcanvas.Body>
      </Offcanvas>


    </div>

  );
}

export default Header;