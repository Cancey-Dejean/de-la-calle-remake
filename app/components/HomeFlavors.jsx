import { MarqueeBig, SwiperCarousel } from "."
import { Card } from "./Cards"
import { data } from "../constants"

const HomeFlavors = () => {
  return (
    <section className="home-flavors">
      <MarqueeBig bgColor="var(--cream)" textColor="var(--color-primary)" />

      <h2 className="section-title">SHOP FLAVORS</h2>

      <SwiperCarousel>
        {data.shopFlavors.map((item) => (
          <Card
            key={item.id}
            headTItle={item.headTItle}
            reviewNumber={item.reviewNumber}
            title={item.title}
            desc={item.description}
            headBgColor={item.headBgColor}
            img={item.img}
            link={item.link}
            color={item.color}
          />
        ))}
      </SwiperCarousel>
    </section>
  )
}

export default HomeFlavors
