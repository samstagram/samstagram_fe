import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { colors } from "styles/theme";

const Carousel = ({ children, length }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 0,
  };

  return (
    <StCarousel>
      <Slider {...settings}>
        {children.map((val) => {
          return (
            <StImg key={val} length={length}>
              <img alt="post" length={length} src={val} />
            </StImg>
          );
        })}
      </Slider>
    </StCarousel>
  );
};

export default Carousel;

const StCarousel = styled.div`
  .slick-prev {
    left: 15px;
    z-index: 1;
  }

  .slick-next {
    right: 15px;
    z-index: 1;
  }

  .slick-dots {
    bottom: 10px;
    color: ${colors.white};

    li {
      margin: 0;
    }
  }
`;

const StImg = styled.div`
  img {
    width: ${({ length }) => `${length}`};
    height: ${({ length }) => `${length}`};
    object-fit: cover;
  }
`;
