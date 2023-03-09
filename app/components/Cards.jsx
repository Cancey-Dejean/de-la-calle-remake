import Image from "next/image"
import { ButtonBorderWhite } from "./Buttons"
const CardImage = ({
  title,
  time,
  stepsNum,
  percentText,
  imgSrc,
  alt,
  btnText,
  cardHeight,
}) => {
  return (
    <div
      className="relative flex h-[300px] w-[300px] flex-1 flex-col overflow-hidden rounded-[40px_0_40px_40px] border border-black/0 shadow-realistic"
      style={{
        height: cardHeight,
      }}
    >
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="absolute top-0 left-0 h-full w-full object-cover"
        alt={alt}
      />

      <div className="relative mt-auto  flex w-full flex-col items-start gap-[10px] rounded-[40px] border border-white/10 bg-black/20 p-[20px] backdrop-blur-[40px]">
        <h4 className="footnote-2">{title}</h4>
        <p className="caption text-white/40">{time}</p>
        <p className="caption-2 text-white/60">{stepsNum} STEPS</p>

        <div className="absolute top-5 right-5">
          <ButtonBorderWhite link="/" text={btnText} />
        </div>
        <p className="caption-2 absolute bottom-5 right-5 text-white/60">
          {percentText}
        </p>
      </div>
    </div>
  )
}

const CardIcon = ({
  heading,
  text,
  title,
  time,
  stepsNum,
  percentText,
  btnText,
  children,
}) => {
  return (
    <div className="relative flex w-[300px] flex-1 flex-col overflow-hidden rounded-[40px_0_40px_40px] border border-white/10 bg-white/10 shadow-realistic">
      <div className="flex flex-col  gap-5 px-[40px] py-[20px] text-center">
        <div className=" flex items-center justify-center gap-[10px]">
          {children} <span className="section-title">{heading}</span>
        </div>

        <div className="caption mx-auto max-w-[178px]">{text}</div>
      </div>

      <div className="relative mt-auto flex w-full flex-col items-start gap-[10px] rounded-[40px] border border-white/10 bg-black/20 p-[20px] backdrop-blur-[40px]">
        <h4 className="footnote-2">{title}</h4>
        <p className="caption text-white/40">{time}</p>
        <p className="caption-2 text-white/60">{stepsNum} STEPS</p>

        <div className="absolute top-5 right-5">
          <ButtonBorderWhite link="/" text={btnText} />
        </div>
        <p className="caption-2 absolute bottom-5 right-5 text-white/60">
          {percentText}
        </p>
      </div>
    </div>
  )
}

const CardPill = ({ title, time, stepsNum, percentText, btnText }) => {
  return (
    <div className="relative mt-auto flex w-full min-w-[300px] flex-col items-start gap-[10px] rounded-[40px] border border-white/10 bg-black/20 p-[20px] shadow-realistic backdrop-blur-[40px]">
      <h4 className="footnote-2">{title}</h4>
      <p className="caption text-white/40">{time}</p>
      <p className="caption-2 text-white/60">{stepsNum} STEPS</p>

      <div className="absolute top-5 right-5">
        <ButtonBorderWhite link="/" text={btnText} />
      </div>
      <p className="caption-2 absolute bottom-5 right-5 text-white/60">
        {percentText}
      </p>
    </div>
  )
}

const PricingCardLight = ({ title, time, stepsNum, percentText, btnText }) => {
  return (
    <div className="relative mt-auto flex w-full min-w-[300px] flex-col items-start gap-[10px] rounded-[40px] border border-white/10 bg-black/20 p-[20px] shadow-realistic backdrop-blur-[40px]">
      <h4 className="footnote-2">{title}</h4>
      <p className="caption text-white/40">{time}</p>
      <p className="caption-2 text-white/60">{stepsNum} STEPS</p>

      <div className="absolute top-5 right-5">
        <ButtonBorderWhite link="/" text={btnText} />
      </div>
      <p className="caption-2 absolute bottom-5 right-5 text-white/60">
        {percentText}
      </p>
    </div>
  )
}

export { CardImage, CardIcon, CardPill }
