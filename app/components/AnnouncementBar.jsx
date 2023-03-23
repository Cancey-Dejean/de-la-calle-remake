import Link from "next/link"
import React from "react"

const AnnouncementBar = ({ text }) => {
  return (
    <div className="announcement__bar">
      <Link href="/" className="announcement__bar--link">
        {text}
      </Link>
    </div>
  )
}

export default AnnouncementBar
