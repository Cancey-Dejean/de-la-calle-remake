"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnnouncementBar, MegaMenu } from "."
import { Caret, Cocteles, Logo } from "./icons"

const Header = () => {
  const path = usePathname()

  return (
    <header className="header" role="banner">
      <AnnouncementBar text="SHOP OUR THREE EXCLUSIVE NEW FLAVORS AT TARGET NATIONWIDE!" />

      <div className="container-wide">
        <div className="header__inner">
          <MegaMenu />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Logo fillColor="var(--primary)" />
          </div>

          <div className="icons">
            <nav>
              <ul className="">
                <li className="">
                  <Link href="#">
                    <Cocteles
                      fillColor="var(--color-primary)"
                      textColor="var(--color-cream)"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">Sign in</Link>
                </li>
                <li>
                  <Link href="#" className="">
                    <img src="/images/umbrella.svg" alt="" />

                    <span className="">0</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
