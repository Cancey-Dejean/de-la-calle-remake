const Marquee = ({ bgColor, textColor }) => {
  return (
    <div
      className="marquee"
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      <p className="marquee-item">
        It’s about celebrating all life has to offer. It’s about discovering
        authentic flavors both traditional and modern.
      </p>

      <p
        className="marquee-item"
        style={{
          color: textColor,
        }}
      >
        It’s about celebrating all life has to offer. It’s about discovering
        authentic flavors both traditional and modern.
      </p>

      <p
        className="marquee-item"
        style={{
          color: textColor,
        }}
      >
        It’s about celebrating all life has to offer. It’s about discovering
        authentic flavors both traditional and modern.
      </p>

      <p
        className="marquee-item"
        style={{
          color: textColor,
        }}
      >
        It’s about celebrating all life has to offer. It’s about discovering
        authentic flavors both traditional and modern.
      </p>
    </div>
  )
}

const MarqueeBig = ({ bgColor, textColor }) => {
  return (
    <>
      <div
        className="product-marquee marquee-section"
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
      >
        <div className="marquee-section__list">
          <span>CERTIFIED ORGANIC</span>

          <span> LOW IN SUGAR</span>

          <span> LESS THAN 40 CALORIES</span>

          <span> FERMENTED</span>
        </div>
        <div className="marquee-section__list">
          <span>CERTIFIED ORGANIC</span>

          <span> LOW IN SUGAR</span>

          <span> LESS THAN 40 CALORIES</span>

          <span> FERMENTED</span>
        </div>
        <div className="marquee-section__list">
          <span>CERTIFIED ORGANIC</span>

          <span> LOW IN SUGAR</span>

          <span> LESS THAN 40 CALORIES</span>

          <span> FERMENTED</span>
        </div>
      </div>
    </>
  )
}

export { Marquee, MarqueeBig }
