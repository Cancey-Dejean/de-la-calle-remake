import React from "react"

const Star = ({ starColor }) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.7747 0L11.0503 5.71467H16.7408L11.8177 9.888L14.4638 16L8.7747 12.2213L3.08424 16L5.73164 9.888L0.808594 5.71467H6.49772L8.7747 0Z"
        fill={starColor ? starColor : "var(--color-primary)"}
      ></path>
    </svg>
  )
}

export default Star
