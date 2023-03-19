import Link from "next/link"
import React from "react"

const AnnouncementBar = () => {
  return (
    <div className="border border-b-transparent bg-color-primary  text-center text-color-white">
      <Link href="/" className="block py-[7px] hover:underline">
        SHOP OUR THREE EXCLUSIVE NEW FLAVORS AT TARGET NATIONWIDE!
      </Link>
    </div>
  )
}

export default AnnouncementBar
