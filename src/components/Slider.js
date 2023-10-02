import { Button } from "react-bootstrap";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from "react";


function Slider() {

  const [sliderdata, setsliderdata] = useState([]);

  useEffect(() => {
    const url = 'http://pykro.com/hotel/public/api/slidersnew';
    fetch(url).then(res => res.json())
      .then((sagar) => setsliderdata(sagar.response));
  }, [])

  return (

    <div>

          
      <Carousel>
        {
          sliderdata.map((item) => (
            <Carousel.Item >
              <img
                className="d-block w-100 "
                src="http://shriramtechnology.com/images/slider/slider1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
          ))}


        <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://shriramtechnology.com/images/slider/slider3.jpg"
          alt="Second slide" />

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://shriramtechnology.com/images/slider/slider4.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item> 
      </Carousel>
    </div>


  );
}
export default Slider;