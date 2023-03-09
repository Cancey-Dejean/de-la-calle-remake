import Image from "next/image"
import { images } from "../constants"
import { ButtonBaseIcon, ButtonBaseDark } from "./Buttons"
import Pill from "./Pill"

const HeroTItle = ({ children }) => {
  return <h1 className="title">{children}</h1>
}

const HeroText = ({ children }) => {
  return <div className="tracking-[0px]">{children}</div>
}

const Hero = ({ children, alt }) => {
  return (
    <section className="relative flex h-[860px] flex-col justify-center px-[30px] text-white">
      <Image
        src={images.Hero1}
        className="absolute top-0 left-0 z-[1] h-full w-full object-cover"
        alt={alt}
      />

      <div className="container-wide">
        <div className="relative z-[3] flex max-w-[580px] flex-col items-start gap-[30px] p-[50px]">
          <Pill text="Updated for iOS 16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-full w-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Pill>

          {children}

          <div className="flex items-center gap-[20px]">
            <ButtonBaseIcon link="/" text="Get the App" />
            <ButtonBaseDark link="/" text="Watch video" />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero, HeroTItle, HeroText }
