import Link from "next/link"

const Button = ({ link, text, btnColor }) => {
  return (
    <>
      <Link href={link} className={`btn ${btnColor ? btnColor : ""}`}>
        {text}
      </Link>
    </>
  )
}

export { Button }
