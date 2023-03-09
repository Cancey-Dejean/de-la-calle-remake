"use client"

import Link from "next/link"
import { Logo, MegaMenu } from "."
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import classNames from "classnames"

const Header = () => {
  const path = usePathname()

  return (
    <header>
      <div className="container flex items-center justify-between">
        <nav>
          <ul className="flex [&_a]:py-[42px] [&_a]:pr-[32px]">
            <li className="has-dropdown">
              <Link href="/about">Shop</Link>
              <div className="mega-menu">
                <div className="menu-title">SHOP FLAVORS</div>
                <ul>
                  <li>
                    <Link href="/services/service-1">Service 1</Link>
                  </li>
                  <li>
                    <Link href="/services/service-2">Service 2</Link>
                  </li>
                  <li>
                    <Link href="/services/service-3">Service 3</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="has-dropdown">
              <Link href="/products">About</Link>

              <div className="mega-menu">
                <div className="menu-title">ABOUT DE LA CALLE</div>
                <ul>
                  <li>
                    <Link href="/products/product-1">Product 1</Link>
                  </li>
                  <li>
                    <Link href="/products/product-2">Product 2</Link>
                  </li>
                  <li>
                    <Link href="/products/product-3">Product 3</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link href="/">Subscription</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Link href="/">
          <Logo fillColor="var(--primary)" />
        </Link>

        <div>
          <ul className="flex">
            <li>
              <Link href="/about">SVG</Link>
            </li>
            <li>
              <Link href="/about">Sign in</Link>
            </li>
            <li>
              <Link href="#">
                SVG
                <span>0</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
