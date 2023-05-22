import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.scss";

import Card from "./Card/Card";

import card1 from "../../assets/images/card1.jpg";
import card2 from "../../assets/images/card2.jpg";
import card3 from "../../assets/images/card3.jpg";
import card4 from "../../assets/images/card4.jpg";

function Slider() {
  return (
    <>
      <div className="slider__title-box container">
        <h2 className="slider__sub-title sub-title">TOP SERVICES</h2>
        <h1 className="slider__title title">Our Specializations</h1>
      </div>

      <Swiper
        className="mySwiper swiper-mobile"
        centerInsufficientSlides={false}
        loop={true}
        slidesPerView={1.2}
        loopedSlides={2}
        spaceBetween={20}
        centeredSlides={true}
        centeredSlidesBounds={true}
      >
        <SwiperSlide>
          <div className="slider__container">
            <div className="slider__box">
              <Card
                img={card1}
                title="Interior Design"
                text="Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__container">
            <div className="slider__box">
              <Card
                img={card2}
                title="Floor plan"
                text="Tempor incididunt ut labore et dolore magna aliqua. "
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__container">
            <div className="slider__box">
              <Card
                img={card3}
                title="Architecture Design"
                text="Tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__container">
            <div className="slider__box">
              <Card
                img={card4}
                title="Construction"
                text="Tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* // swiper for desktop // */}
      <Swiper
        className="mySwiper swiper-desk"
        centerInsufficientSlides={false}
        loop={true}
        slidesPerView={1}
        loopedSlides={1}
        spaceBetween={5}
        centeredSlides={true}
        centeredSlidesBounds={true}
      >
        <SwiperSlide>
          <div className="slider__container">
            <div className="slider__box">
              <Card
                img={card1}
                title="Interior Design"
                text="Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
              />
            </div>
            <div className="slider__box">
              <Card
                img={card2}
                title="Floor plan"
                text="Tempor incididunt ut labore et dolore magna aliqua. "
              />
            </div>
            <div className="slider__box">
              <Card
                img={card3}
                title="Architecture Design"
                text="Tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__container">
            <div className="slider__box">
              <Card
                img={card4}
                title="Construction"
                text="Tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <div className="slider__box">
              <Card
                img={card1}
                title="Interior Design"
                text="Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
              />
            </div>
            <div className="slider__box">
              <Card
                img={card2}
                title="Floor plan"
                text="Tempor incididunt ut labore et dolore magna aliqua. "
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__container">
            <div className="slider__box">
              <Card
                img={card3}
                title="Architecture Design"
                text="Tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <div className="slider__box">
              <Card
                img={card4}
                title="Construction"
                text="Tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <div className="slider__box">
              <Card
                img={card1}
                title="Interior Design"
                text="Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__container">
            <div className="slider__box">
              <Card
                img={card2}
                title="Floor plan"
                text="Tempor incididunt ut labore et dolore magna aliqua. "
              />
            </div>
            <div className="slider__box">
              <Card
                img={card3}
                title="Architecture Design"
                text="Tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
            <div className="slider__box">
              <Card
                img={card4}
                title="Construction"
                text="Tempor incididunt ut labore et dolore magna aliqua."
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
