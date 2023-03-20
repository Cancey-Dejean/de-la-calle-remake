import Link from "next/link"
import { AnnouncementBar } from "."
import { Caret, Cocteles, Logo } from "./icons"

const Header = () => {
  const links = [
    {
      href: "/",
      label: "Shop",
      caret: true,
    },
    {
      href: "/",
      label: "About",
      caret: true,
    },
    {
      href: "/",
      label: "Subscriptions",
      caret: false,
    },
  ]

  return (
    <header className="border-b-2 border-solid border-b-color-primary">
      <AnnouncementBar />

      <div className="container relative flex items-center justify-between [&_a]:font-link [&_a]:text-[17px] [&_a]:uppercase [&_a]:text-color-primary">
        <nav className="menu">
          <ul className="flex [&_a]:py-[42px] [&_a]:pr-[32px]">
            {links.map(({ href, label, caret }) => (
              <li>
                <Link href={href} className="flex items-center">
                  {label}
                  {caret && (
                    <span className="p-[7px]">
                      <Caret fillColor="var(--primary)" />
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

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
    </header>
  )
}

export default Header
