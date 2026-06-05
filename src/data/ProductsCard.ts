import productimg1 from "../assets/product-img-01.webp";
import productimg2 from "../assets/product-img-02.webp";
import productimg3 from "../assets/product-img-03.webp";
import productimg4 from "../assets/product-img-04.webp";
import productimg5 from "../assets/product-img-05.webp";

type ProductsCard = {
  id: number;
  img: string;
  alt: string;
  title: string;
  description: string;
  price: number;
};

export const productsCard: ProductsCard[] = [
  {
    id: 1,
    img: productimg1,
    alt: "HÉRITAGE NOIR - Premium Black Tea",
    title: "HÉRITAGE NOIR",
    description:
      "A bold and sophisticated black tea with deep aromas and a rich, full-bodied character.",
    price: 10.0,
  },
  {
    id: 2,
    img: productimg2,
    alt: "ÉMERAUDE SERENITY - Green Tea Collection",
    title: "ÉMERAUDE SERENITY",
    description:
      "A delicate green tea blend offering freshness and balance experience.",
    price: 15.0,
  },
  {
    id: 3,
    img: productimg3,
    alt: "FLEUR BLANCHE - Jasmine Infused Tea",
    title: "FLEUR BLANCHE",
    description:
      "An elegant floral tea infused with delicate jasmine blossoms.",
    price: 20.0,
  },
  {
    id: 4,
    img: productimg4,
    alt: "SOLEIL DORÉ - Citrus Tea Blend",
    title: "SOLEIL DORÉ",
    description:
      "A vibrant combination of premium tea leaves and bright citrus notes.",
    price: 20.0,
  },
  {
    id: 5,
    img: productimg5,
    alt: "MINUIT EAR - Earl Grey Signature Blend",
    title: "MINUIT EARL",
    description:
      "A luxurious Earl Grey crafted with fine black tea and aromatic bergamot.",
    price: 30.0,
  },
];
