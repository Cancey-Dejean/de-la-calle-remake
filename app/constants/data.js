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
    link: "/orange-tumeric",
    img: images.OrangeTumeric,
    color: "var(--color-primary)",
    headTItle: "NEW FLAVOR!",
    headBgColor: "var(--color-yellow)",
    title: " ORANGE TURMERIC",
    reviewNumber: 13,
    description: [
      "A Citrusy Twist\n",
      "Complex and Earthy\n",
      "Perfect Over Ice",
    ],
  },
]

export default {
  marqueeAbout,
  shopFlavors,
}
