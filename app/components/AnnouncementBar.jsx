import Link from "next/link"
import React from "react"

const AnnouncementBar = () => {
  return (
    <div className="border border-b-transparent bg-color-primary  text-center ">
      <Link
        href="/"
        className="block py-[7px] text-color-white hover:underline"
      >
        SHOP OUR THREE EXCLUSIVE NEW FLAVORS AT TARGET NATIONWIDE!
      </Link>
    </div>
  )
}

export default AnnouncementBar
