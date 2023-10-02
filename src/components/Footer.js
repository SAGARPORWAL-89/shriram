import 'animate.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import React from 'react';
function Footer() {
    return (
        <>
            <div className='container-fluid cffooter text-white mt-5' >
                <div  style={{marginTop:'-50px'}} className='container cffooter'>
                    <div className='row'>
                        <div className="col-1"></div>
                       <div className='col-md-3 cfc'>
                            <img src='http://shriramtechnology.com/images/footer_logo.png' className='image-fluid img14 '></img>
                            <p className='ppp'>Shriram Technologies Research & Development, is a experienced website development company in Gwalior strictly focus on the quality of products and online services.</p>
                            <h4 className='text-white h4 mt-5'>Follow us </h4>
                            <FaFacebookF className="newicon1 mt-4" />
                            <FaInstagram className="newicon2 mt-4" />
                            <FaTwitter className="newicon3 mt-4" />
                          
                            </div>
                            <div className="col-md-7">
                            <div className="row mt-4">
                                <div className="col-md-6 mt-5">
                                    <h4 className="hfh">Gwalior (M.P.), India</h4>
                                    <h6 className="hfh">2nd Floor, Jairam Palace, Shinde Ki Chhawani</h6>
                                    <FaMapMarkedAlt className="cfii" />

                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <h4 className="hfh">New Delhi, India</h4>
                                            <h6 className="hfh">Mangal Market Road, Uttam Nagar</h6>
                                            <FaMapMarkedAlt className="cfii" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 mt-5">
                                    <h4 className="hfh">877-020-0028</h4>
                                    <h6 className="hfh">Give us a call</h6>
                                    <FaPhoneAlt className="cfii" />
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mt-4">
                                        <h3 className="hfhh">Useful Links</h3>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <h3  className="hfhh">Subscribe</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 sagarcol mt-4">
                                         <ul className="list-inline">
                                            <li className=""><a>About us </a></li>
                                            <li><a>Career</a></li>
                                            <li><a>Projects </a></li>
                                            <li><a>our team</a></li>
                                         </ul>
                                    </div>
                                    <div className="col-md-3 sagarcol mt-4">
                                    <ul className="list-inline">
                                            <li><a>About us </a></li>
                                            <li><a>Career</a></li>
                                            <li><a>Projects </a></li>
                                            <li><a>our team</a></li>
                                         </ul>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                      <p className="fmp">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                       
                       
                           
                       
                     
                       
                     
                       <div className="row">
                        <div className="col-1"></div>
                                <div className="col-4">
                                <h1 className="text-white hfc">Best Software Company in Gwalior</h1>
                            <img src="http://shriramtechnology.com/images/icon/best.png" className="image-fluid img15"></img>
                                </div> 

                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Footer;