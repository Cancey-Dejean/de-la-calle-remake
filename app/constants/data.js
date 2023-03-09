import images from "./images"

const newsArticles = [
  {
    date: "Nov. 10, 2022, 6 a.m.",
    text: "National Vision Holdings, Inc. Reports Third Quarter 2022 Financial Results",
    url: "/news-releases/news-release-details/national-vision-holdings-inc-reports-third-quarter-2022",
  },
  {
    date: "Nov. 3, 2022, 8:30 a.m.",
    text: "National Vision Announces 2022-2023 Scholarship Program, Focusing on How Remote Technology Can Increase Access to Care",
    url: "/news-releases/news-release-details/national-vision-announces-2022-2023-scholarship-program-focusing",
  },
  {
    date: "Oct. 31, 2022, 8 a.m.",
    text: "National Vision Releases 2021 Sustainability Report",
    url: "/news-releases/news-release-details/national-vision-releases-2021-sustainability-report",
  },
  {
    date: "Oct. 27, 2022, 8 a.m.",
    text: "National Vision Holdings, Inc. Announces Third Quarter 2022 Earnings Release and Conference Call",
    url: "/news-releases/news-release-details/national-vision-holdings-inc-announces-third-quarter-2022",
  },
]

const newsCards = [
  {
    link: "/",
    img: images.featuredImage,
    date: "October 31, 2022",
    title: "Introducing our 2021 Sustainability Report",
    altText: "Sustainability Report",
  },
  {
    link: "/",
    img: images.CorporateResponsibility,
    date: "October 21, 2021",
    title: "Introducing Our First Corporate Responsibility Report",
    altText: "Corporate Responsibility Report",
  },
  {
    link: "/",
    img: images.EyeglassDonations,
    date: "June 22, 2021",
    title:
      "Our “Made Locally, Given Globally” Charitable Program Surpasses 100,000 Eyeglass Donations",
    altText: "Lady with glasses",
  },
]

const careerOpps = [
  {
    title: "Doctor of Optometry Careers",
    imageLink: images.ImgOpp1,
    url: "/",
  },
  {
    title: "Retail Careers",
    imageLink: images.ImgOpp2,
    url: "/",
  },
  {
    title: "Corporate Careers",
    imageLink: images.ImgOpp3,
    url: "/",
  },
  {
    title: "Lab or Distribution Center Careers",
    imageLink: images.ImgOpp4,
    url: "/",
  },
]

const companySubLinks = [
  {
    title: "Overview",
    url: "/company",
  },
  {
    title: "History",
    url: "/company/history",
  },
  {
    title: "Leadership Team",
    url: "/company/corporate-leadership",
  },
  {
    title: "Clinical Leadership",
    url: "/company/clinical-leadership",
  },
]

const timeLineYears = [
  {
    year: "1990",
    title: "Founding",
    desc: " National Vision, Inc. is founded; first five Vision Centers open",
  },
  {
    year: "1994",
    title: "",
    desc: "Lease for 400 stores in Walmart signed",
  },
  {
    year: "1997",
    title: "National Vision Optical",
    desc: "First Military store opens",
  },
  {
    year: "1997",
    title: "",
    desc: "National Vision purchases Midwest Vision & St. Cloud lab",
  },
  {
    year: "1998",
    title: "",
    desc: "National Vision purchases Frame-N-Lens & New West Eyeworks including: Vista Optical, Vista Optical In Selected FredMeyer Stores and Frame-n-Lens",
  },
  {
    year: "2005",
    title: "America’s Best Acquisition",
    desc: "Berkshire Partners acquires and merges National Vision and America’s Best Contacts & Eyeglasses",
  },
  {
    year: "2009",
    title: "Eyeglass World Acquisition",
    desc: "National Vision acquires Eyeglass World and turns it around with a new merchandising and marketing strategy",
  },
  {
    year: "2009",
    title: "",
    desc: "New St. Cloud lab opens",
  },
  {
    year: "2010",
    title: "",
    desc: "Frames for the World founded; new distribution center opens",
  },
  {
    year: "2011",
    title: "AC Lens Acquisition",
    desc: "National Vision acquires long-time partner, AC Lens, bolstering its e-commerce platform",
  },
  {
    year: "2012",
    title: "",
    desc: "Walmart extends lease",
  },
  {
    year: "2013",
    title: "",
    desc: "Salt Lake City lab opens; AC Lens launches WalmartContacts.com and SamsClubContacts.com",
  },
  {
    year: "2014",
    title: "NVI Aquisition",
    desc: "Affiliates of Kohlberg Kravis Roberts & Co. L.P. acquire National Vision, Inc.",
  },
  {
    year: "2014",
    title: "",
    desc: "National Vision invests in Ditto.com and Smart Vision Labs",
  },
  {
    year: "2015",
    title: "",
    desc: "Lawrenceville lab expands",
  },
  {
    year: "2015",
    title: "",
    desc: "20/20 Quest launched",
  },
  {
    year: "2017",
    title: "Publicly Traded",
    desc: 'National Vision becomes a public company traded on the NASDAQ Global Select Market under the symbol "EYE."',
  },
  {
    year: "2017",
    title: "",
    desc: "1,000th Store opens",
  },
  {
    year: "2019",
    title: "",
    desc: "Plano, TX lab opens; “Made Locally, Given Globally” launches",
  },
  {
    year: "2020",
    title: "",
    desc: "National Vision celebrates 30 years",
  },
  {
    year: "NOW",
    title: "Continued Growth",
    desc: "Today, National Vision continues to expand, with a goal of opening 75 new stores annually",
  },
]

const leadershipTeam = [
  {
    name: "Reade Fahs",
    title: "Chief Executive Officer and President",
    img: images.ReadeFahs,
  },
  {
    name: "Patrick Moore",
    title: "Chief Operating Officer",
    img: images.ReadeFahs,
  },
  {
    name: "Melissa Rasmussen",
    title: "Chief Financial Officer",
    img: images.ReadeFahs,
  },
  {
    name: "Ravi Acharya",
    title: "Chief Technology Officer",
    img: images.ReadeFahs,
  },
  {
    name: "Jared Brandman",
    title: "General Counsel and Secretary",
    img: images.ReadeFahs,
  },
  {
    name: "Bill Clark",
    title: "Chief People Officer",
    img: images.ReadeFahs,
  },
]

export default {
  newsArticles,
  careerOpps,
  companySubLinks,
  newsCards,
  timeLineYears,
  leadershipTeam,
}
