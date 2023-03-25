import Link from "next/link"

const Button = ({ link, text, btnTextColor, btnColor }) => {
  return (
    <>
      <Link
        href={link}
        className="btn"
        style={{
          backgroundColor: btnColor ? btnColor : "var(--color-primary)",
          color: btnTextColor ? btnTextColor : "var(--color-white)",
        }}
      >
        {text}
      </Link>
    </>
  )
}

export { Button }
