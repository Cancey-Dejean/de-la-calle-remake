import Image from "next/image"
import Link from "next/link"
import { images } from "../constants"
import { ButtonSmall, ButtonSmallBorder } from "./Buttons"

const Card = ({ color, link }) => {
  return (
    // <div className={`card ${color ? color : "var(--color-primary)"}`}>
    <div
      className="card"
      style={{
        color: color ? color : "var(--color-primary)",
      }}
    >
      <p className="card__header">NEW FLAVOR!</p>
      <div className="card__body  access-link">
        <Image
          src={images.OrangeTumeric}
          width={415}
          height={244}
          className="card__img"
        />

        <div className="btn__container">
          <ButtonSmall
            link="/"
            text="Add to Cart"
            btnColor="var(--color-primary)"
          />
          <ButtonSmallBorder
            buttonTag
            link="/"
            text="SHOP Now"
            btnTextColor="var(--color-primary)"
          />
        </div>
      </div>
    </div>
  )
}

export { Card }
