import React from 'react'
import "./Butter.scss"
import Carousel from 'react-bootstrap/Carousel';
import about1 from "../../pages/image/about1.png"
import about2 from "../../pages/image/about2.png"
import about3 from "../../pages/image/about3.png"
import about4 from "../../pages/image/about4.png"
import about5 from "../../pages/image/about5.png"
import butter1 from "../../pages/image/butter1.png"
import butter2 from "../../pages/image/butter2.png"

function Butter() {
  return (
    <div className='about'>
    <div className='butter'>
        <div className='butter-text'>
        <h1>Our Story</h1>
        <h6>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </h6>
        <h6>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</h6>
        </div>
        <div className='butter-image'>
            <img src={about1} alt="" />
        </div>
    </div>
    <div className='bi'>
    <img src={about2} alt="" />
    <img src={about3} alt="" />
    <img src={about4} alt="" />
    <img src={about5} alt="" />
    </div>
    <div className='butter-corusel'>
    <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img className='main-image' src={butter1} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img className='main-image' src={butter1} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img className='main-image' src={butter1} alt="" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='mini'>
    <img src={butter2} alt="" />
    </div>
    </div>
  )
}

export default Butter