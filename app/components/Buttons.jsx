import Link from "next/link"

const Button = ({ link, text, btnTextColor, btnColor, buttonTag }) => {
  return (
    <>
      {buttonTag ? (
        <button
          className="btn"
          style={{
            backgroundColor: btnColor ? btnColor : "var(--color-primary)",
            color: btnTextColor ? btnTextColor : "var(--color-white)",
          }}
        >
          {text}
        </button>
      ) : (
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
      )}
    </>
  )
}

const ButtonSmall = ({ link, text, btnTextColor, btnColor, buttonTag }) => {
  return (
    <>
      {buttonTag ? (
        <button
          className="btn btn__small"
          style={{
            backgroundColor: btnColor ? btnColor : "var(--color-primary)",
            color: btnTextColor ? btnTextColor : "var(--color-white)",
          }}
        >
          {text}
        </button>
      ) : (
        <Link
          href={link}
          className="btn btn__small"
          style={{
            backgroundColor: btnColor ? btnColor : "var(--color-primary)",
            color: btnTextColor ? btnTextColor : "var(--color-white)",
          }}
        >
          {text}
        </Link>
      )}
    </>
  )
}

const ButtonSmallBorder = ({ link, text, btnTextColor, buttonTag }) => {
  return (
    <>
      {buttonTag ? (
        <button
          className="btn btn__small btn__small--border"
          style={{
            color: btnTextColor ? btnTextColor : "var(--color-primary)",
            borderColor: btnTextColor ? btnTextColor : "var(--color-primary)",
          }}
        >
          {text}
        </button>
      ) : (
        <Link
          href={link}
          className="btn btn__small btn__small--border"
          style={{
            color: btnTextColor ? btnTextColor : "var(--color-primary)",
            borderColor: btnTextColor ? btnTextColor : "var(--color-primary)",
          }}
        >
          {text}
        </Link>
      )}
    </>
  )
}

export { Button, ButtonSmall, ButtonSmallBorder }
