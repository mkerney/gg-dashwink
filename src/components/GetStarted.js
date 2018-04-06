import React, { Component } from 'react'
import { Carousel, Image, Button } from 'react-bootstrap'
export default class GetStarted extends Component {
  render () {
    return (
      <Carousel interval={0}>
        <Carousel.Item>
          <Image className="getstarted-pic" src="assets/slider-1.jpg"/>
          <Carousel.Caption className="carousel-position">
            <h1 className="black-text">DASHWINK</h1>
            <p>Clothing and accessories tailored to your personal style, delivered to your custom shop.</p>
            <Button className='btn btn-black'> Get Started</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="getstarted-pic" src="assets/slider-2.png"/>
          <Carousel.Caption className="carousel-position">
            <h1 className="black-text">Show us your style</h1>
            <Button className='btn btn-black'>COMPLETE YOUR STYLE SURVEY</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="getstarted-pic" src="assets/slider-3.png"/>
          <Carousel.Caption className="carousel-position">
            <h1 className="black-text">DASHWINK</h1>
            <p>Wink for better recommendations and shop the latest trends</p>
            <Button className='btn btn-black'> Get Started</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="getstarted-pic" src="assets/slider-4.png"/>
          <Carousel.Caption className="carousel-position">
            <h1 className="black-text">DASHWINK</h1>
            <p>Some other text can go here...</p>
            <Button className='btn btn-black'> Get Started</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
