import team1 from "../assets/team1.webp";
import team2 from "../assets/team2.webp";
import team3 from "../assets/team3.webp";
export type TeamData = {
  id: number;
  name: string;
  img: string;
  alt: string;
  position: string;
  bio: string;
};
export const teamDatas: TeamData[] = [
  {
    id: 1,
    name: "Ivan Widi",
    img: team1,
    alt: "Ivan Widi founder and chief executive officer of Avenoir Tea",
    position: "Founder & Chief Executive Officer",
    bio: "Inspired by a passion for premium tea, Ivan founded Avenoir Tea to create elegant tea experiences that blend authenticity, craftsmanship, and modern sophistication.",
  },
  {
    id: 2,
    name: "Maya Pratama",
    img: team2,
    alt: "Maya Pratama head of tea craftsmanship at Avenoir Tea",
    position: "Head of Tea Craftsmanship",
    bio: "Maya oversees tea sourcing and blend development, ensuring every collection reflects exceptional quality, balance, and consistency from leaf to cup.",
  },
  {
    id: 3,
    name: "Étienne Laurent",
    img: team3,
    alt: "Étienne Laurent brand and customer experience director at Avenoir Tea",
    position: "Brand & Customer Experience Director",
    bio: "Étienne leads brand strategy and customer experience initiatives, helping bring Avenoir Tea's vision of timeless elegance to audiences around the world.",
  },
];
