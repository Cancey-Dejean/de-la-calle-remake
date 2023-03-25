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

          <div className="header__logo">
            <Link href="/">
              <Logo fillColor="var(--color-primary)" />
            </Link>
          </div>

          <nav className="header__links">
            <ul>
              <li>
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
                <Link href="#" className="cart__num">
                  <img src="/images/umbrella.svg" alt="" />

                  <span className="cart__num">0</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
