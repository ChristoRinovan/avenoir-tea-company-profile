import visionimg1 from "../assets/vis1.webp";
import visionimg2 from "../assets/vis2.webp";

type VisionMissions = {
  id: number;
  img: string;
  alt: string;
  title: string;
  description: string;
};

export const visionMissions: VisionMissions[] = [
  {
    id: 1,
    img: visionimg1,
    alt: "Premium loose leaf tea showcasing Avenoir Tea's commitment to quality",
    title: "Inspired by Tomorrow",
    description:
      "We envision a future where tea is appreciated not only for its exceptional taste, but also for the meaningful moments it creates. Through timeless craftsmanship, uncompromising quality, and a passion for excellence, we aspire to become a trusted premium tea brand recognized by tea lovers around the world.",
  },
  {
    id: 2,
    img: visionimg2,
    alt: "Freshly brewed tea reflecting the elegance of the Avenoir Tea experience",
    title: "Crafted with Purpose",
    description:
      "Our mission is to create refined tea experiences by carefully sourcing premium ingredients and crafting every blend with precision and care. By embracing innovation, sustainability, and authenticity, we strive to bring elegance, comfort, and lasting value to every cup we serve.",
  },
];

function VisionMissionCard() {
  return (
    <section className="w-full bg-second px-10 py-20 text-utama overflow-hidden">
      <div className="container mx-auto flex flex-col gap-16">
        {visionMissions.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col items-center gap-8 lg:gap-14 ${
              item.id % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`} 
            // buat keluarin ganjil-genap posisi
          >
            
            <div className="w-full lg:w-1/2">
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-80 object-cover shadow-xl shadow-utama/20"
              />
            </div>

            
            <div className="w-full lg:w-1/2">
              <h4 className="mb-5 font-brand text-3xl lg:text-5xl text-center lg:text-left">
                {item.title}
              </h4>

              <p className="font-par text-sm lg:text-md leading-relaxed tracking-widest text-center lg:text-left text-[#2B1D1A]/80">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VisionMissionCard;