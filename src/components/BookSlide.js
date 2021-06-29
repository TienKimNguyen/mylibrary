import React, { useState } from "react";
import { Carousel } from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../images/library.jpg";
import book1 from "../images/gatsby.jpeg"

const BookSlide = () => {
    return (
      <Carousel className="carousel-slide" pause='hover'>
        <Carousel.Item interval={2000} className="container-fluid">
          <img
            className="d-block w-10 carousel-image"
            src={book1}
            alt="First Slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 carousel-image"
            src={image}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item> 
          <img
            className="d-block w-100 carousel-image"
            src={image}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}
export default BookSlide;