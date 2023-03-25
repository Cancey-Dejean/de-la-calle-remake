import Image from "next/image"
import { images } from "../constants"
import { Button } from "./Buttons"

const HeroTitle = ({ children }) => {
  return <h1 className="hero__title">{children}</h1>
}

const Hero = () => {
  return (
    <section className="hero">
      <Image
        src={images.Hero1}
        className="hero__bg"
        alt="hero image"
        priority
      />

      <div className="hero__container container">
        <HeroTitle>
          Taste the
          <br />
          Tepache
          <br />
          Tropics
          <span>only at target</span>
        </HeroTitle>

        <div className="btn__container">
          <Button link="/" text="shop now" btnColor="var(--color-yellow)" />
        </div>
      </div>
    </section>
  )
}

export default Hero
