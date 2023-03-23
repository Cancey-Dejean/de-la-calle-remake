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
              <ul className="flex items-center gap-8">
                <li className="flex">
                  <Link href="#">
                    <Cocteles
                      fillColor="var(--primary)"
                      textColor="var(--cream)"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="#">Sign in</Link>
                </li>
                <li>
                  <Link href="#" className="flex">
                    <img src="/images/umbrella.svg" alt="" />

                    <span
                      className="flex h-[28px] 
                  w-[28px] items-center justify-center rounded-full border-2 border-solid border-color-primary text-[12px]"
                    >
                      0
                    </span>
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
