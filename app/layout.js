// import { Navbar, Footer,  } from "../components"
import { Header } from "./components"
import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* <Navbar /> */}
        <Header />
        <main id="main">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
