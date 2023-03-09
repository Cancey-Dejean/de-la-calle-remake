import Link from "next/link"

const ButtonBaseIcon = ({ text, link }) => {
  return (
    <>
      <Link
        href={link}
        className="btn-icon group bg-gradient-to-br from-color-purple to-color-blue"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#000"
          className="flex h-[30px] w-[30px] transition-transform duration-[.3s] ease-in-out group-hover:rotate-90"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>

        <span className="transition-all duration-[.3s] ease-in-out group-hover:opacity-80">
          {text}
        </span>
      </Link>
    </>
  )
}

const ButtonBaseDark = ({ text, link }) => {
  return (
    <>
      <Link
        href={link}
        className="btn-icon group border border-white/10 bg-black/50 backdrop-blur-[30px] hover:border-white/20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="rgba(0, 0, 0, 0.2)"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ff88aa"
          class="flex h-[30px] w-[30px] transition-transform duration-[.3s] ease-in-out group-hover:bg-black/20"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
          />
        </svg>

        <span className="transition-all duration-[.3s] ease-in-out group-hover:opacity-80">
          {text}
        </span>
      </Link>
    </>
  )
}

const ButtonBlackIcon = ({ text, link }) => {
  return (
    <>
      <Link
        href={link}
        className="btn-icon group border border-white/10 bg-black hover:bg-black/80"
      >
        <div className="h-[30px] w-[30px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            color="rgb(255, 255, 255)"
            className="flex transition-transform duration-[.3s] ease-in-out group-hover:bg-black/20"
            style={{
              userSelect: "none",
              width: "100%",
              height: "100%",
              display: "inline-block",
              flexShrink: 0,
              cursor: "auto",
              fill: "rgb(255, 255, 255)",
            }}
          >
            <g color="rgb(255, 255, 255)" weight="duotone">
              <rect
                x="32.00781"
                y="80.00005"
                width="160"
                height="128"
                rx="8"
                opacity="0.2"
              ></rect>
              <rect
                x="32.00781"
                y="80.00005"
                width="160"
                height="128"
                rx="8"
                stroke-width="16"
                stroke="rgb(255, 255, 255)"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              ></rect>
              <path
                d="M64.00781,48.00005h152a8,8,0,0,1,8,8V176"
                fill="none"
                stroke="rgb(255, 255, 255)"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="16"
              ></path>
            </g>
          </svg>
        </div>

        <span className="transition-all duration-[.3s] ease-in-out group-hover:opacity-80">
          {text}
        </span>
      </Link>
    </>
  )
}

const ButtonWhiteIcon = ({ text, link }) => {
  return (
    <>
      <Link href={link} className="btn">
        {text}
      </Link>
    </>
  )
}

const ButtonUpdate = ({ text, link }) => {
  return (
    <>
      <Link href={link} className="btn">
        {text}
      </Link>
    </>
  )
}

const ButtonBorder = ({ text, link }) => {
  return (
    <>
      <Link
        href={link}
        className="rounded-[24px_24px_0] border border-color-sky-blue  px-[16px] py-[8px] text-[16px] uppercase text-white backdrop-blur-30 transition-all duration-[.3s] ease-in-out hover:border-white"
      >
        {text}
      </Link>
    </>
  )
}
const ButtonBorderWhite = ({ text, link }) => {
  return (
    <>
      <Link
        href={link}
        className="rounded-[24px_24px_0] border border-white  px-[16px] py-[8px] text-[16px] uppercase text-white backdrop-blur-30 transition-all duration-[.3s] ease-in-out hover:border-color-sky-blue hover:bg-black/80"
      >
        {text}
      </Link>
    </>
  )
}

export {
  ButtonBaseIcon,
  ButtonBaseDark,
  ButtonBlackIcon,
  ButtonWhiteIcon,
  ButtonUpdate,
  ButtonBorder,
  ButtonBorderWhite,
}
