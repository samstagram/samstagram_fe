import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src='image/React.png' />
          </div>
          <div>
            <img src='image/user.jpg' />
          </div>
          <div>
            <img src='image/user (1).jpg' />
          </div>
          <div>
            <img src='image/React.png' />
          </div>
          <div>
            <img src='image/user.jpg' />
          </div>
          <div>
            <img src='image/user (1).jpg' />
          </div>
        </Slider>
      </div>
    );
  }
}
