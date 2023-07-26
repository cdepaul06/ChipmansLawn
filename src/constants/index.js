// * You can CTRL + CLICK on the '../assets' to see the files in the folder and add/remove as needed.
// * Obviously you will need to import them here to be used in the app.
import {
  cornerYard,
  cornerYard2,
  cornerYard3,
  fencedYard,
  sidewalk,
  sidewalk2,
  yard1,
  yard2,
  yardSmall,
} from "../assets";

// * You can add additional links to the navigation bar here.
const navLinks = [
  {
    id: "services",
    title: "Services",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// * You can add additional content to the About section here.
const aboutContent = {
  description:
    "This is a wall of text. This is a wall of text. This is a wall of text. " +
    "This is a wall of text. This is a wall of text. This is a wall of text. " +
    "This is a wall of text. This is a wall of text. This is a wall of text. " +
    "This is a wall of text. This is a wall of text. This is a wall of text. " +
    "This is a wall of text. This is a wall of text. This is a wall of text. " +
    "This is a wall of text. This is a wall of text. This is a wall of text. " +
    "This is a wall of text. This is a wall of text. This is a wall of text. " +
    "This is a wall of text. This is a wall of text. This is a wall of text. ",
};

// * Use the imports from above as the src for the images.
const lawnImages = [
  {
    id: "cornerYard-1",
    src: cornerYard,
    alt: "cornerYard",
  },
  {
    id: "cornerYard2-2",
    src: cornerYard2,
    alt: "cornerYard2",
  },
  {
    id: "cornerYard3-3",
    src: cornerYard3,
    alt: "cornerYard3",
  },
  {
    id: "fencedYard-4",
    src: fencedYard,
    alt: "fencedYard",
  },
  {
    id: "sidewalk-5",
    src: sidewalk,
    alt: "sidewalk",
  },
  {
    id: "sidewalk2-6",
    src: sidewalk2,
    alt: "sidewalk2",
  },
  {
    id: "yard1-7",
    src: yard1,
    alt: "yard1",
  },
  {
    id: "yard2-8",
    src: yard2,
    alt: "yard2",
  },
];

const aboutImage = {
  id: "about-image",
  src: cornerYard,
  alt: "yardSmall",
};

// * This is where you can add/remove any of the services you want listed on the website.
// * Each one must have a unique ID. Easiest to just do service-1, service-2, etc.
const servicesContent = [
  {
    id: "service-1",
    title: "Grass Mowing",
    description: "We will mow your grass and make it look nice.",
    image: fencedYard,
    details: [
      "We will mow your grass and make it look nice.",
      "We will mow your grass and make it look nice.",
    ],
  },
  {
    id: "service-2",
    title: "Landscaping",
    description: "We will landscape your yard and make it look nice.",
    image: yard1,
    details: ["Mulching", "Trimming", "Other things"],
  },
  // * You can uncomment this if you want to add additional services, if you offer more than 3 you can just
  // * copy and paste the above service and change the ID and content.
  {
    id: "service-3",
    title: "Snow Removal",
    description:
      "We will remove snow from your driveway and make it look nice.",
    image: cornerYard,
    details: ["Whatever you want.", "Whatever you want.", "Whatever you want."],
  },
];

// If for whatever reason you add more constants to the global index you need to export them here.
export { navLinks, aboutContent, lawnImages, servicesContent, aboutImage };
