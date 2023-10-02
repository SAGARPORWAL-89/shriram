import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'animate.css';
import { Button } from 'react-bootstrap';
import CountUp from 'react-countup';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel';
function Menu() {
    return (
        <>

            <div className='container-fluid con '>

                <p className='text-center mt-5 pp visibility: visible animate__animated animate__fadeInDown animate__slow	2s'>OUR SERVICES</p>
                <h1 className='text-center hh animate__animated animate__fadeInDown animate__slow 2s'>Our Best <span className='hs'>Services</span></h1>
                <div className='row sagar' >
                    <div className='col-md-3 menu1 text-center visibility: visible animate__animated animate__zoomIn animate__slow 2s  animate__delay-0.9s'>
                        <img src='http://shriramtechnology.com/images/icon/service7.png'></img>
                        <h3>Web Designing</h3>
                        <p>Creative Design, always new Ideas to present your business in front of your customers.</p>
                        <h6>  Read More...  </h6>
                    </div>
                    <div className='col-md-3 menu1 text-center animate__animated animate__zoomIn animate__slow 2s animate__delay-0.s'>
                        <img src='http://shriramtechnology.com/images/icon/service8.png'></img>
                        <h3>Web Development</h3>
                        <p>Web Development means the work involved in developing a website basically for internet.</p>
                        <h6>  Read More...  </h6>
                    </div>
                    <div className='col-md-3 menu1 text-center animate__animated animate__zoomIn animate__slow 3s '>
                        <img src='http://shriramtechnology.com/images/icon/service9.png'></img>
                        <h3>App Development</h3>
                        <p>Mobile strategy that helps you leverage technology and deliver awesome customer experience</p>
                        <h6>  Read More...  </h6>
                    </div>
                    <div className='col-md-3 menu1 text-center animate__animated animate__zoomIn animate__slow 4s'>
                        <img src='http://shriramtechnology.com/images/icon/service10.png'></img>
                        <h3>Software Development </h3>
                        <p>Shriram Technologies Research & Development aim is to provide innovative and cost effective software solutions.</p>
                        <h6>  Read More...  </h6>
                    </div>
                </div>
                <div className='row sagar'>
                    <div className='col-md-3 menu1 text-center animate__animated animate__zoomIn animate__slow 2s  animate__delay-0.9s'>
                        <img src='http://shriramtechnology.com/images/icon/service7.png'></img>
                        <h3>Web Designing</h3>
                        <p>Creative Design, always new Ideas to present your business in front of your customers.</p>
                        <h6>  Read More...  </h6>
                    </div>
                    <div className='col-md-3 menu1 text-center animate__animated animate__zoomIn animate__slow 2s  animate__delay-0.9s'>
                        <img src='http://shriramtechnology.com/images/icon/service8.png'></img>
                        <h3>Web Development</h3>
                        <p>Web Development means the work involved in developing a website basically for internet.</p>
                        <h6>  Read More...  </h6>
                    </div>
                    <div className='col-md-3 menu1 text-center animate__animated animate__zoomIn animate__slow 2s  animate__delay-0.9s'>
                        <img src='http://shriramtechnology.com/images/icon/service9.png'></img>
                        <h3>App Development</h3>
                        <p>Mobile strategy that helps you leverage technology and deliver awesome customer experience</p>
                        <h6>  Read More...  </h6>
                    </div>
                    <div className='col-md-3 menu1 text-center animate__animated animate__zoomIn animate__slow 2s  animate__delay-0.9s'>
                        <img src='http://shriramtechnology.com/images/icon/service10.png'></img>
                        <h3>Software Development </h3>
                        <p>Shriram Technologies Research & Development aim is to provide innovative and cost effective software solutions.</p>
                        <h6>  Read More...  </h6>
                    </div>
                </div>



                <div className='container-fluid fimg'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <img src='http://shriramtechnology.com/images/check-seo/cloud.png' className='image-fluid img1 animate__animated animate__fadeInUp animate__slow 1s'></img>
                            <img src='http://shriramtechnology.com/images/check-seo/announce.png' className='image-fluid img2 animate__animated animate__fadeInUp animate__slow 1s'></img>
                        </div>


                        <div className='col-md-6'>
                            <div className='row'>
                                <div className='col-4'>
                                    <input type='text' placeholder='Type URl' className='ips'></input>
                                </div>
                                <div className='col-4'>
                                    <input type='Gmail' placeholder='Enter your gmail' className='ips1'></input>
                                </div>
                                <div class="col-lg-4 col-md-12 no-padding">
                                    <center><button className='sb'>Submit</button></center>
                                </div>
                            </div>

                        </div>


                        <div className='col-md-3'>
                            <img src='http://shriramtechnology.com/images/check-seo/cloud2.png' className='image-fluid img3 animate__animated animate__fadeInUp animate__slow 1s'></img>
                            <img src='http://shriramtechnology.com/images/check-seo/chart.png' className='image-fluid img4 animate__animated animate__fadeInUp animate__slow 1s'></img>
                        </div>
                    </div>
                </div>


                <div className='container-fluid'>
                    <div className='container'>
                        <div className='row mt-5'>
                            <div className='col-md-1'></div>
                            <div className='col-md-6 mt-5'>
                                <img src='http://shriramtechnology.com/images/about/about_image.png' data-aos="fade-right" className='image-fluid img5 '></img>
                            </div>
                            <div className='col-md-4 mt-5 menu2' data-aos="fade-left" >
                                <h1 data-aos="fade-down-left">We provide services for all enterprises in making critical business decisions</h1>
                                <p className='mt-5'>Shriram Technologies Research & Development is an established and experienced software development company with innovative ideas. Strictly focus on the quality of productions, proven track-record in providing website designing Services, Mobile Apps Development, technology consulting and Digital Marketing services to clients worldwide.
                                </p>
                                <p>
                                    Are helpful in highlighting your online presence to grow your business. There are numerous factors that lead to a successful online business. We know that well-designed websites are an excellent tool not just for lead generation but also for Brand Building
                                </p>
                                <button className='btn btn-primary'>LEARN MORE</button>
                                <button className='btn btn-warning'>CONTACT US</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='container-fluid header4'>
                    <div className='container mt-4'>
                        <div className='row'>
                            <div className='col-md-1 data-aos="fade-Left"'>
                                <img src='http://shriramtechnology.com/images/funfacts/arrow_left.png' className='image-fluid img6'></img>
                            </div>
                            <div className='col-md-3'>
                                <img src='http://shriramtechnology.com/images/icon/fact1.png' className='image-fluid img8'></img>
                                <h3 className='h3 text-center'>Active clients</h3>
                                <span className='num'><CountUp delay={1} end={100} /></span>
                            </div>
                            <div className='col-md-3'>
                                <img src='http://shriramtechnology.com/images/icon/fact2.png' className='image-fluid img8'></img>
                                <h3 className='h3 text-center'>project Done</h3>
                                <span className='num'><CountUp delay={1} end={476} /></span>
                            </div>
                            <div className='col-md-3'>
                                <img src='http://shriramtechnology.com/images/icon/fact3.png' className='image-fluid img8'></img>
                                <h3 className='h3 text-center'>Success Rate</h3>
                                <span className='num'><CountUp delay={1} end={98} /></span>
                            </div>
                            <div className='col-md-1'>
                                <img src='http://shriramtechnology.com/images/funfacts/arrow_right.png' className='image-fluid img7'></img>
                            </div>
                        </div>
                    </div>

                </div>


                <section className='cfp'>
                    <p className='text-center mt-5 pp'>Easy Steps</p>
                    <h1 className='text-center hh'>Our Working <span className='hs'>process</span></h1>
                    <img src='http://shriramtechnology.com/images/process/work_process.png' className='image-fluid img9'></img>

                    <div className='container rc'>
                        <div className='row '>

                            <div className='col-sm-3  circle1 mt-5'>
                                <div className='mn'>
                                    <img src='http://shriramtechnology.com/images/icon/process1.png' className='image-fluid img10'></img>
                                    <h5 className='text-center h5'>01. Analysis</h5>
                                </div>
                            </div>

                            <div className='col-sm-3   circle2 mt-5'>
                                <div className='mn1'>
                                    <img src='http://shriramtechnology.com/images/icon/process2.png' className='image-fluid img11'></img>
                                    <h5 className='text-center h5'>02. Design</h5>
                                </div>
                            </div>

                            <div className='col-sm-3  circle3 mt-5'>
                                <div className='mn2'>
                                    <img src='http://shriramtechnology.com/images/icon/process3.png' className='image-fluid img12 '></img>
                                    <h5 className='text-center h5'>03. Development</h5>
                                </div>
                            </div>

                            <div className='col-sm-3  circle4 mt-5'>
                                <div className='mn3'>
                                    <img src='http://shriramtechnology.com/images/icon/process4.png' className='image-fluid img13'></img>
                                    <h5 className='text-center h5'>04. Testing</h5>
                                </div>
                            </div>
                            <center><button className='btn btn1'>Get started</button></center>

                        </div>
                    </div>
                </section>

                <section className='cfi mt-3'>
                    <Carousel className="caro">
                        <Carousel.Item>

                            <div className="container-fluid">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-1"></div>
                                        <div className="col-5 col-sm-12 col-md-6 mt-5">
                                            <img src="http://shriramtechnology.com/images/about/our_mission.png" className="w-100 
                            "></img>
                                        </div>
                                        <div className="col-5 col-sm-12 col-md-4 Hc1 ">
                                            <h1 className="mt-5">Our Mission</h1>
                                            <h6 className="mt-5 para">Start working with an company that can provide everything you need to generate awareness, drive traffic, connect with customers, and increase sales nascetur ridiculus mus. massa quis enim. Donec pede justo.</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="container-fluid">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-1"></div>
                                        <div className="col-5 col-sm-12 col-md-6 mt-5">
                                            <img src="http://shriramtechnology.com/images/about/our_mission.png" className="w-100 
                            "></img>
                                        </div>
                                        <div className="col-5 col-sm-12 col-md-4 Hc1 ">
                                            <h1 className="mt-5">Our Mission</h1>
                                            <h6 className="mt-5 para">Start working with an company that can provide everything you need to generate awareness, drive traffic, connect with customers, and increase sales nascetur ridiculus mus. massa quis enim. Donec pede justo.</h6>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="container-fluid">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-1"></div>
                                        <div className="col-5 col-sm-12 col-md-6 mt-5">
                                            <img src="http://shriramtechnology.com/images/about/our_mission.png" className="w-100 
                            "></img>
                                        </div>
                                        <div className="col-5 col-sm-12 col-md-4 Hc1 ">
                                            <h1 className="mt-5">Our Mission</h1>
                                            <h6 className="mt-5 para">Start working with an company that can provide everything you need to generate awareness, drive traffic, connect with customers, and increase sales nascetur ridiculus mus. massa quis enim. Donec pede justo.</h6>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>

                    <Carousel>
                        <Carousel.Item>
                            <div className='container-fluid cfi mt-3'>
                                <div className='container'>
                                    <h1 className='text-white text-center cfh1'>Love From Clients</h1>
                                    <div className='row'>

                                        <center>
                                            <div className='col-md-5 cfd1 mt-5 '>
                                                <div className="div1">
                                                    <p className="p2 mt-5">We are very happy with ASL. Team of ASL programmers have always been there for us all the time. This is a company I can recommend to anyone to perform any work.</p>
                                                    <img src="http://shriramtechnology.com/images/icon-image/testimonial1.png" className="image-fluid w-20 img17"></img>
                                                    <h4>sagar porwal</h4>
                                                </div>
                                            </div>
                                            <div className='col-md-5 cfd2'>

                                            </div>

                                        </center>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='container-fluid cfi mt-3'>
                                <div className='container'>
                                    <h1 className='text-white text-center cfh1'>Love From Clients</h1>
                                    <div className='row'>

                                        <center>
                                            <div className='col-md-5 cfd1 mt-5 '>
                                                <div className="div1">
                                                    <p className="p2 mt-5">We are very happy with ASL. Team of ASL programmers have always been there for us all the time. This is a company I can recommend to anyone to perform any work.</p>
                                                    <img src="http://shriramtechnology.com/images/icon-image/testimonial1.png" className="image-fluid w-20 img17"></img>
                                                    <h4>Himanshu Ojha</h4>
                                                </div>
                                            </div>
                                            <div className='col-md-5 cfd2'>

                                            </div>

                                        </center>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='container-fluid cfi mt-3'>
                                <div className='container'>
                                    <h1 className='text-white text-center cfh1'>Love From Clients</h1>
                                    <div className='row'>

                                        <center>
                                            <div className='col-md-5 cfd1 mt-5 '>
                                                <div className="div1">
                                                    <p className="p2 mt-5">We are very happy with ASL. Team of ASL programmers have always been there for us all the time. This is a company I can recommend to anyone to perform any work.</p>
                                                    <img src="http://shriramtechnology.com/images/icon-image/testimonial1.png" className="image-fluid w-20 img17"></img>
                                                    <h4>Rahul kushwah</h4>
                                                </div>
                                            </div>
                                            <div className='col-md-5 cfd2'>

                                            </div>

                                        </center>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </section>
            </div>

        </>
    );
}

export default Menu;