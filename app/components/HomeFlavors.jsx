import { MarqueeBig, SwiperCarousel } from "."
import { Card } from "./Cards"

const HomeFlavors = () => {
  return (
    <section className="home-flavors">
      <MarqueeBig bgColor="var(--cream)" textColor="var(--color-primary)" />

      <h2 className="section-title">SHOP FLAVORS</h2>

      <SwiperCarousel>
        <Card />
        <img
          src="https://via.placeholder.com/800x300?text=Slide+2"
          alt="Slide 2"
        />
        <img
          src="https://via.placeholder.com/800x300?text=Slide+3"
          alt="Slide 3"
        />

        <img
          src="https://via.placeholder.com/800x300?text=Slide+1"
          alt="Slide 4"
        />
        <img
          src="https://via.placeholder.com/800x300?text=Slide+2"
          alt="Slide 5"
        />
        <img
          src="https://via.placeholder.com/800x300?text=Slide+3"
          alt="Slide 6"
        />

        <img
          src="https://via.placeholder.com/800x300?text=Slide+1"
          alt="Slide 7"
        />
        <img
          src="https://via.placeholder.com/800x300?text=Slide+2"
          alt="Slide 8"
        />
        <img
          src="https://via.placeholder.com/800x300?text=Slide+3"
          alt="Slide 9"
        />
        <img
          src="https://via.placeholder.com/800x300?text=Slide+2"
          alt="Slide 10"
        />
        <img
          src="https://via.placeholder.com/800x300?text=Slide+3"
          alt="Slide 11"
        />
      </SwiperCarousel>
    </section>
  )
}

export default HomeFlavors
