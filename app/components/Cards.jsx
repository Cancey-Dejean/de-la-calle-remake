import Image from "next/image"
import Link from "next/link"
import { images } from "../constants"
import { ButtonSmall, ButtonSmallBorder } from "./Buttons"
import { Star } from "./icons"

const ReviewStars = ({ children }) => {
  return <div className="reviews">{children}</div>
}

const Card = ({
  color,
  link,
  headBgColor,
  title = "Title",
  headTItle = "Text",
  reviewNumber,
  desc,
  img,
  imgAlt,
}) => {
  return (
    <div
      className="card"
      style={{
        color: color ? color : "var(--color-primary)",
      }}
    >
      <p
        className="card__header"
        style={{
          backgroundColor: headBgColor ? headBgColor : "var(--color-yellow)",
        }}
      >
        {headTItle}
      </p>

      <div className="card__inner">
        <Link href={link}>
          <Image
            src={img}
            width={415}
            height={244}
            className="card__img"
            alt={imgAlt ? imgAlt : title}
          />
        </Link>

        <div
          className="card__body"
          style={{
            borderColor: color ? color : "var(--color-primary)",
          }}
        >
          <Link href={link}>
            <h2 class="card__body--title">{title}</h2>
            <span class="sr-only">Link to Page Title</span>
          </Link>

          <div className="card__body--stars">
            <ReviewStars>
              <Star starColor="currentColor" />
              <Star starColor="currentColor" />
              <Star starColor="currentColor" />
              <Star starColor="currentColor" />
              <Star starColor="currentColor" />
            </ReviewStars>
            {reviewNumber}
            <span>Reviews</span>
          </div>

          <p className="card__body--desc" style={{ whiteSpace: "pre-wrap" }}>
            {desc}
          </p>

          <div className="btn__container">
            <ButtonSmall
              link={link ? link : "#"}
              text="Add to Cart"
              btnColor="var(--color-primary)"
            />
            <ButtonSmallBorder
              buttonTag
              text="SHOP Now"
              btnTextColor="var(--color-primary)"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Card }
