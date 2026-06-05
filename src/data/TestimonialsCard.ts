import testi1 from "../assets/testi1.webp";
import testi2 from "../assets/testi2.webp";
import testi3 from "../assets/testi3.webp";

export type Testimonial = {
  id: number;
  name: string;
  img: string;
  alt: string;
  title: string;
  position: string;
  location: string;
  message: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Budi Santoso",
    img: testi1,
    alt: "Budi Santoso restaurant owner from Jakarta sharing his experience with Avenoir Tea premium tea collection",
    title: "A Tea Experience Our Customers Remember",
    position: "Restaurant Owner",
    location: "Jakarta, Indonesia",
    message:
      "Kualitas tehnya luar biasa. Aroma yang kaya dan rasa yang konsisten membuat pelanggan kami selalu kembali untuk menikmatinya.",
  },
  {
    id: 2,
    name: "Emily Carter",
    img: testi2,
    alt: "Emily Carter tea sommelier from London reviewing Avenoir Tea luxury tea blends and exceptional quality",
    title: "Elegantly Crafted and Perfectly Balanced",
    position: "Tea Sommelier",
    location: "London, United Kingdom",
    message:
      "An exceptional collection of teas with remarkable depth and character. Every blend feels carefully crafted and elegantly balanced.",
  },
  {
    id: 3,
    name: "Pierre Dubois",
    img: testi3,
    alt: "Pierre Dubois café owner from Paris recommending Avenoir Tea premium tea products and refined tea experience",
    title: "Une Expérience de Thé Raffinée Qui Mérite d’Être Partagée",
    position: "Café Owner",
    location: "Paris, France",
    message:
      "Une sélection de thés raffinée et élégante. Les saveurs sont parfaitement équilibrées et offrent une expérience véritablement mémorable.",
  },
];
