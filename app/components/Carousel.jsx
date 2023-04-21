"use client"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/themes/splide-default.min.css"

const Carousel = ({ slides }) => {
  const options = {
    type: "loop",
    perPage: 1,
    pagination: false,
  }

  return (
    <Splide options={options}>
      {slides.map((slide) => (
        <SplideSlide key={slide.imageUrl}>
          <img src={slide.imageUrl} alt="" />
        </SplideSlide>
      ))}
    </Splide>
  )
}

export default Carousel
