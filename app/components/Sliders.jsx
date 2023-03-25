"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import "swiper/swiper-bundle.min.css"

// Enable Swiper's navigation, pagination, and autoplay modules
SwiperCore.use([Navigation, Pagination, Autoplay])

const SwiperCarousel = ({ children, settings }) => {
  const defaultSettings = {
    spaceBetween: 30,
    slidesPerView: 4,
    slidesPerGroup: 1,
    centeredSlides: true,
    navigation: false,
    loop: true,
    pagination: false,
    autoplay: { delay: 5000 },
  }

  const swiperSettings = settings
    ? { ...defaultSettings, ...settings }
    : defaultSettings

  return (
    <Swiper {...swiperSettings}>
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index} className="custom-slide">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export { SwiperCarousel }