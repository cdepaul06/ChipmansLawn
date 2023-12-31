// * You can CTRL + CLICK on the '../assets' to see the files in the folder and add/remove as needed.
// * Obviously you will need to import them here to be used in the app. These will be your lawn/snow photos
import {
  cornerYard,
  cornerYard2,
  cornerYard3,
  fencedYard,
  sidewalk,
  sidewalk2,
  yard1,
  yard2,
  snowPlow,
} from "../assets";

// * You can add additional links to the navigation bar here.
const navLinks = [
  {
    id: "services",
    title: "Services",
  },
  {
    id: "estimate",
    title: "Request Estimate",
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
    "We strive to give our customers that small business feeling, catering" +
    " to their individual needs. Our team takes pride in the work we do and our customer's satisfaction is the number one priority.",
};

const schedule = {
  Monday: "8:00 AM - 5:00 PM",
  Tuesday: "8:00 AM - 5:00 PM",
  Wednesday: "8:00 AM - 5:00 PM",
  Thursday: "8:00 AM - 5:00 PM",
  Friday: "8:00 AM - 5:00 PM",
  Saturday: "8:00 AM - 5:00 PM",
  Sunday: "Closed",
};

const contactPhone = "330-555-5555";

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
    title: "Spring & Summer",
    description: "Commercial & Residential",
    image: fencedYard,
    details: [
      "Mowing",
      "Mulching",
      "Weed Removal",
      "Landscape Bed Tearouts",
      "Shrub Trimming",
    ],
  },
  {
    id: "service-2",
    title: "Fall",
    description: "Commercial & Residential",
    image: yard1,
    details: [
      "Leaf Cleanup/Mulching & Removal",
      "Preparing Landscape Beds for Winter",
    ],
  },
  // * You can uncomment this if you want to add additional services, if you offer more than 3 you can just
  // * copy and paste the above service and change the ID and content.
  {
    id: "service-3",
    title: "Winter",
    description: "Commercial & Residential",
    image: snowPlow,
    details: [
      "Snow Plowing",
      "Salting of Lots & Walkways",
      "Clearing Driveways (Residential)",
    ],
  },
];

// * If for whatever reason you add more constants to the global index you need to export them here.
export {
  navLinks,
  aboutContent,
  lawnImages,
  servicesContent,
  aboutImage,
  schedule,
  contactPhone,
};
