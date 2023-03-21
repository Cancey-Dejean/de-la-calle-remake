import Image from "next/image"
import Link from "next/link"
import { images } from "../constants"
import { Button } from "./Buttons"

const HeroTitle = ({ children }) => {
  return <h1 className="flex flex-col font-heading text-[32px]">{children}</h1>
}

const Hero = () => {
  return (
    <section className="bg-hero-home relative flex h-[95vh] max-h-[1080px] min-h-[800px] items-center justify-start  bg-color-primary text-color-cream">
      <Image
        src={images.Hero1}
        className="absolute h-full w-full object-cover"
        alt="hero image"
        priority
      />
      <div className="container flex  -rotate-[2deg] flex-col items-start">
        <div className="flex flex-col gap-[40px] text-center">
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
      </div>
    </section>
  )
}

export default Hero
