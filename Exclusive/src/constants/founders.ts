import FounderOne from "../assets/founderOne.jpg";
import FounderTwo from "../assets/founderTwo.png";
import FounderThree from "../assets/founderThree.png";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const founders = [
  {
    image: FounderOne,
    alt: "Founder 1",
    name: "Tom Cruse",
    position: "Founder & chairman",
    social: [FaTwitter, FaInstagram, FaLinkedin],
  },
  {
    image: FounderTwo,
    alt: "Founder 2",
    name: "Emma Watson",
    position: "Managing Director",
    social: [FaTwitter, FaInstagram, FaLinkedin],
  },
  {
    image: FounderThree,
    alt: "Founder 3",
    name: "Will Smith",
    position: "Product Designer",
    social: [FaTwitter, FaInstagram, FaLinkedin],
  },
];

export default founders;
