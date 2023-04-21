"use client"
import { MarqueeBig, Card } from "."
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import { data } from "../constants"
import "@splidejs/splide/dist/css/themes/splide-default.min.css"

const HomeFlavors = () => {
  return (
    <section className="home__flavors">
      <MarqueeBig
        bgColor="var(--color-cream)"
        textColor="var(--color-primary)"
      />
      <h2 className="section-title">SHOP FLAVORS</h2>

      <div className="slider__container">
        <Splide
          hasTrack={false}
          aria-label="..."
          options={{
            perPage: 5,
            perMove: 1,
            center: true,
            padding: "40px",
            gap: "40px",
            pagination: false,
            type: "loop",
            autoplay: true,
            pauseOnHover: true,
            interval: 3000,
            arrows: false,
          }}
        >
          <SplideTrack>
            {data.shopFlavors.map((item) => (
              <SplideSlide key={item.id}>
                <Card
                  headTItle={item.headTItle}
                  reviewNumber={item.reviewNumber}
                  title={item.title}
                  desc={item.description}
                  headBgColor={item.headBgColor}
                  img={item.img}
                  link={item.link}
                  color={item.color}
                />
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </div>
    </section>
  )
}

export default HomeFlavors
