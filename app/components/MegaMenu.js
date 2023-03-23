import Link from "next/link"

const MegaMenu = () => {
  return (
    <nav className="mega__menu--nav" role="navigation">
      <ul className="mega__menu">
        <li className="mega__menu--item">
          <a href="/collections/frontpage" className="mega__menu--link">
            <span className="mega__menu--text">Shop</span>
            <span className="mega__menu--icon-wrapper">
              <svg
                className="mega__menu--icon"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 12L0.00481036 0.750001L12.9952 0.750002L6.5 12Z"
                  fill="var(--color-primary)"
                ></path>
              </svg>
            </span>
          </a>

          <ul className="mega__menu--submenu">
            {/* 2 Columns*/}
            <li className="mega__menu--col">
              <span className="mega__menu--col-title">Shop flavors</span>

              {/* <button className="btn-close-submenu">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="28.9923"
                    y1="9.90144"
                    x2="9.90038"
                    y2="28.9933"
                    stroke="var(--background-color)"
                    strokeWidth="2"
                  ></line>
                  <line
                    x1="28.2812"
                    y1="28.9935"
                    x2="9.18929"
                    y2="9.9016"
                    stroke="var(--background-color)"
                    strokeWidth="2"
                  ></line>
                </svg>
              </button> */}

              <ul className="mega__menu--submenu-items two-columns">
                <li className="mega__menu--submenu-item">
                  <a
                    href="/products/paloma-grapefruit-lime"
                    className="mega__menu--submenu-link"
                  >
                    <img
                      src="//cdn.shopify.com/s/files/1/0508/9181/7109/files/Group_13214_60x.png?v=1662470457"
                      alt="GRAPEFRUIT LIME"
                      role="presentation"
                    />
                    <span>GRAPEFRUIT LIME</span>
                  </a>
                </li>

                <li className="mega__menu--submenu-item">
                  <a
                    href="/products/paloma-grapefruit-lime"
                    className="mega__menu--submenu-link"
                  >
                    <img
                      src="//cdn.shopify.com/s/files/1/0508/9181/7109/files/Group_491_f43c5f42-b413-48cc-b785-d2f7268a313e_60x.png?v=1662470479"
                      alt="MANGO CHILI"
                      role="presentation"
                    />
                    <span>MANGO CHILI</span>
                  </a>
                </li>

                <li className="mega__menu--submenu-item">
                  <a
                    href="/products/paloma-grapefruit-lime"
                    className="mega__menu--submenu-link"
                  >
                    <img
                      src="//cdn.shopify.com/s/files/1/0508/9181/7109/files/Group_520_771ac995-390f-40fd-a2da-f67540742092_60x.png?v=1662470505"
                      alt="WATERMELON JALAPENO"
                      role="presentation"
                    />
                    <span>WATERMELON JALAPENO</span>
                  </a>
                </li>

                <li className="mega__menu--submenu-item">
                  <a
                    href="/products/paloma-grapefruit-lime"
                    className="mega__menu--submenu-link"
                  >
                    <img
                      src="//cdn.shopify.com/s/files/1/0508/9181/7109/files/Group_497_304b9093-8114-487c-94bc-8e0b06db50f6_60x.png?v=1662470532"
                      alt="GINGER MANZANA"
                      role="presentation"
                    />
                    <span>GINGER MANZANA</span>
                  </a>
                </li>

                <li className="mega__menu--submenu-item">
                  <a
                    href="/products/paloma-grapefruit-lime"
                    className="mega__menu--submenu-link"
                  >
                    <img
                      src="//cdn.shopify.com/s/files/1/0508/9181/7109/files/Group_485_48a71d3b-8144-4a08-bc66-ffba6397ef1d_60x.png?v=1662470558"
                      alt="CACTUS PRICKLY PEAR"
                      role="presentation"
                    />
                    <span>CACTUS PRICKLY PEAR</span>
                  </a>
                </li>

                <li className="mega__menu--submenu-item">
                  <a
                    href="/products/paloma-grapefruit-lime"
                    className="mega__menu--submenu-link"
                  >
                    <img
                      src="//cdn.shopify.com/s/files/1/0508/9181/7109/files/Group_513_0f26115c-80b6-4620-95ea-d7a0f4762c0f_60x.png?v=1662470716"
                      alt="TAMARIND CITRUS"
                      role="presentation"
                    />
                    <span>TAMARIND CITRUS</span>
                  </a>
                </li>

                <li className="mega__menu--submenu-item">
                  <a
                    href="/products/paloma-grapefruit-lime"
                    className="mega__menu--submenu-link"
                  >
                    <img
                      src="//cdn.shopify.com/s/files/1/0508/9181/7109/files/Group_484_18d5cdfd-bee0-4b12-8f94-2194aadf2c7f_60x.png?v=1662470758"
                      alt="CHAMOY"
                      role="presentation"
                    />
                    <span>CHAMOY</span>
                  </a>
                </li>

                <li className="mega__menu--submenu-item">
                  <a
                    href="/products/paloma-grapefruit-lime"
                    className="mega__menu--submenu-link"
                  >
                    <img
                      src="//cdn.shopify.com/s/files/1/0508/9181/7109/files/Group_13217_60x.png?v=1662470781"
                      alt="ORANGE TURMERIC"
                      role="presentation"
                    />
                    <span>ORANGE TURMERIC</span>
                  </a>
                </li>
              </ul>
            </li>
            {/*  End of 2 Columns */}

            {/* Single Column  */}
            <li className="mega__menu--col">
              <span className="mega__menu--col-title">SHOP MULTI-PACK</span>
              <ul className="mega__menu--submenu-items">
                <li className="mega__menu--submenu-item">
                  <a
                    href="/products/variety-pack"
                    className="mega__menu--submenu-link"
                  >
                    <img
                      src="//cdn.shopify.com/s/files/1/0508/9181/7109/files/Asset_3_60x.png?v=1662470832"
                      alt="ORIGINALES"
                      role="presentation"
                    />
                    <span>ORIGINALES</span>
                  </a>
                </li>
                <li className="mega__menu--submenu-item">
                  <a
                    href="/products/nueva-variety-pack"
                    className="mega__menu--submenu-link"
                  >
                    <img
                      src="//cdn.shopify.com/s/files/1/0508/9181/7109/files/Asset_1_60x.png?v=1662470879"
                      alt="NUEVA"
                      role="presentation"
                    />
                    <span>NUEVA</span>
                  </a>
                </li>
                <li className="mega__menu--submenu-item">
                  <a
                    href="/products/mixta-variety-pack"
                    className="mega__menu--submenu-link"
                  >
                    <img
                      src="//cdn.shopify.com/s/files/1/0508/9181/7109/files/Asset_2_56afe016-2bb3-4090-9c4f-403ca237ef07_60x.png?v=1662470872"
                      alt="MIXTA"
                      role="presentation"
                    />
                    <span>MIXTA</span>
                  </a>
                </li>
                <li className="mega__menu--submenu-item is-empty">
                  <a href="#" className="mega__menu--submenu-link">
                    <img
                      src="//cdn.shopify.com/s/files/1/0508/9181/7109/files/Asset_2_56afe016-2bb3-4090-9c4f-403ca237ef07_60x.png?v=1662470872"
                      alt="MIXTA"
                      role="presentation"
                    />
                    <span>Empty link</span>
                  </a>
                </li>
              </ul>
            </li>
            {/* End of Single Column */}

            {/*  Highlight  Block */}
            <li className="mega__menu--col is-large">
              <span className="mega__menu--col-title">MERCH COMING SOON!</span>
              <ul className="mega__menu--submenu-items">
                <li className="mega__menu--submenu-item">
                  <a
                    href="/products/mixta-variety-pack"
                    className="mega__menu--submenu-link"
                  >
                    <img
                      src="//cdn.shopify.com/s/files/1/0508/9181/7109/files/menu-item-large-image_300x.png?v=1662470907"
                      alt="Shop merch now!"
                    />
                    <span className="title-grosa title-grosa--xxxs">
                      Shop <br /> merch <br /> soon!
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            {/*  End of  Highlight  Block */}
          </ul>
        </li>

        {/* <li className="mega__menu__item">
          <a href="/pages/about" className="mega__menu--link">
            <span>About</span>
            <span className="mega__menu--icon-wrapper">
              <svg
                className="mega__menu--icon"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 12L0.00481036 0.750001L12.9952 0.750002L6.5 12Z"
                  fill="var(--color-primary)"
                ></path>
              </svg>
            </span>
          </a>
          <ul className="mega-sub-menu mega-sub-menu--cards">
            <li className="mega__menu--col">
              <span>ABOUT DE LA CALLE</span>
              <button className="btn-close-submenu">
                <svg
                  width="39"
                  height="39"
                  viewBox="0 0 39 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="28.9923"
                    y1="9.90144"
                    x2="9.90038"
                    y2="28.9933"
                    stroke="var(--background-color)"
                    strokeWidth="2"
                  ></line>
                  <line
                    x1="28.2812"
                    y1="28.9935"
                    x2="9.18929"
                    y2="9.9016"
                    stroke="var(--background-color)"
                    strokeWidth="2"
                  ></line>
                </svg>
              </button>
              <ul className="mega__menu--submenu-items">
                <li className="mega__menu--submenu-item mega__menu--submenu-item--card">
                  <a href="/pages/about" className="mega__menu--submenu-link">
                    <img
                      src="//cdn.shopify.com/s/files/1/0508/9181/7109/files/Group_13211_400x.jpg?v=1662542674"
                      alt="About DE LA CALLE"
                      role="presentation"
                    />
                    <h3>About DE LA CALLE</h3>
                    <p>WATCH THE BRAND FILM!</p>
                  </a>
                </li>
                <li className="mega__menu--submenu-item mega__menu--submenu-item--card">
                  <a href="/pages/history" className="mega__menu--submenu-link">
                    <img
                      src="//cdn.shopify.com/s/files/1/0508/9181/7109/files/Mask_group_400x.jpg?v=1662542685"
                      alt="HISTORY OF TEPACHE"
                      role="presentation"
                    />
                    <h3>HISTORY OF TEPACHE</h3>
                    <p>WHAT IS TEPACHE ANYWAY?</p>
                  </a>
                </li>
                <li className="mega__menu--submenu-item mega__menu--submenu-item--card">
                  <a href="/blogs/news" className="mega__menu--submenu-link">
                    <img
                      src="//cdn.shopify.com/s/files/1/0508/9181/7109/files/Group_13212_400x.jpg?v=1662542692"
                      alt="BLOG"
                      role="presentation"
                    />
                    <h3>BLOG</h3>
                    <p>RECIPES, NEWS AND MORE!</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li> */}

        {/* <li className="mega__menu__item">
          <a href="/pages/subscription" className="mega__menu--link">
            Subscription
          </a>
        </li> */}

        {/* <li className="mega__menu__item mega__menu__item--account">
          <a href="/account/login" className="mega__menu--link">
            Sign in
          </a>
        </li> */}
      </ul>
    </nav>
  )
}

export default MegaMenu
