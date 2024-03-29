import images from "./images"

const marqueeAbout = [
  {
    id: "1",
    text: "It’s about celebrating all life has to offer.  It's about discovering authentic flavors both traditional and modern.",
  },
  {
    id: "2",
    text: "It’s about celebrating all life has to offer.  It's about discovering authentic flavors both traditional and modern.",
  },
  {
    id: "3",
    text: "It’s about celebrating all life has to offer.  It's about discovering authentic flavors both traditional and modern.",
  },
]

const shopFlavors = [
  {
    id: "1",
    link: "/",
    img: images.OrangeTumeric,
    color: "var(--color-grapefruit)",
    headTItle: "NEW FLAVOR!",
    headBgColor: "var(--color-pink)",
    title: "GRAPEFRUIT LIME",
    reviewNumber: 14,
    description: [
      "Our Version of a Paloma\n",
      "Bright & Citrusy\n",
      "With a Touch of Smokiness",
    ],
  },
  {
    id: "2",
    link: "/",
    img: images.OrangeTumeric,
    color: "var(--color-grapefruit)",
    headTItle: "NEW FLAVOR!",
    headBgColor: "var(--color-mint)",
    title: "WATERMELON JALAPEÑO",
    reviewNumber: 9,
    description: [
      "Fruity & Floral\n",
      "Spiked with Chilis\n",
      "Delicately Balanced",
    ],
  },
  {
    id: "3",
    link: "/",
    img: images.OrangeTumeric,
    color: "var(--color-magenta)",
    headTItle: "NEW FLAVOR!",
    headBgColor: "var(--color-mint)",
    title: "cactus prickly pear",
    reviewNumber: 11,
    description: [
      "Sweet and Tart\n",
      "Perfect Shade of Pink\n",
      "Nature's Candy",
    ],
  },
  {
    id: "4",
    link: "/",
    img: images.OrangeTumeric,
    color: "var(--color-dark-red)",
    headTItle: "NEW FLAVOR!",
    headBgColor: "var(--color-yellow)",
    title: "Chamoy",
    reviewNumber: 6,
    description: ["Sweet and Spicy\n", "Umami with a Kick\n", "Bold & Beloved"],
  },
  {
    id: "5",
    link: "/",
    img: images.OrangeTumeric,
    color: "var(--color-grapefruit)",
    headTItle: "FAN FAVORITE!",
    headBgColor: "var(--color-yellow)",
    title: "MANGO CHILI",
    reviewNumber: 19,
    description: [
      "Sweet and Not Too Spicy\n",
      "Perfectly Ripe Mangos\n",
      "Rich with a Hint of Spice",
    ],
  },
  {
    id: "6",
    link: "/",
    img: images.OrangeTumeric,
    color: "var(--color-blue-sky)",
    headTItle: "THIRST QUENCHER!",
    headBgColor: "var(--color-yellow)",
    title: "GINGER MANZANA",
    reviewNumber: 13,
    description: [
      "Bold Kick of Ginger\n",
      "Bubbly and Refreshing\n",
      "Perfectly Sweet",
    ],
  },
  {
    id: "7",
    link: "/",
    img: images.OrangeTumeric,
    color: "var(--color-light-green)",
    headTItle: "MOST UNIQUE!",
    headBgColor: "var(--color-yellow)",
    title: "Tamarind citrus",
    reviewNumber: 7,
    description: [
      "Complex and Balanced\n",
      "Bright, Floral, Citrusy\n",
      "Office Fave",
    ],
  },
  {
    id: "8",
    link: "/",
    img: images.OrangeTumeric,
    color: "var(--color-orange)",
    headTItle: "MOST REFRESHING!",
    headBgColor: "var(--color-yellow)",
    title: "ORANGE TUMERIC",
    reviewNumber: 7,
    description: [
      "A Citrusy Twist\n",
      "Complex and Earthy\n",
      "Perfect Over Ice",
    ],
  },
  {
    id: "9",
    link: "/",
    img: images.OrangeTumeric,
    color: "var(--color-green)",
    headTItle: "BEST SELLER!",
    headBgColor: "var(--color-yellow)",
    title: "PINEAPPLE SPICE",
    reviewNumber: 26,
    description: [
      "Our Take on Traditional Tepache\n",
      "A Dash of Cinnamon\n",
      "Balanced and Refreshing",
    ],
  },
]

const sliderSettings = {
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  cssEase: "linear",
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  swipeToSlide: true,
  speed: 1000,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

export default {
  marqueeAbout,
  shopFlavors,
  sliderSettings,
}
