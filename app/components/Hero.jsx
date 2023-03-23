import Image from "next/image"
import Link from "next/link"
import { images } from "../constants"
import { Button } from "./Buttons"

const HeroTitle = ({ children }) => {
  return <h1 className="flex flex-col font-heading text-[32px]">{children}</h1>
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
          <span className="text-[90px]">
            Taste the
            <br />
            Tepache
            <br />
            Tropics
          </span>
          only at target
        </HeroTitle>

        <div>
          <Button link="/" text="shop now" btnColor="yellow" />
        </div>
      </div>
    </section>
  )
}

export default Hero
