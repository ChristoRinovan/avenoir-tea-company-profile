import homeimg from "../assets/homepage.webp";
import SectionHeader from "../components/SectionHeader";
import TestimonialCard from "../components/TestimonialCard";

function Home() {
  return (
    <main>
      <img src={homeimg} alt="" className="overflow-hidden" />
      <SectionHeader
        title="Avenoir Tea"
        description="The Art Of Timeless Tea"
      />
      <div>
        <div className="flex flex-col items-center justify-center lg:flex-row py-5 gap-2 lg:gap-5 bg-utama">
          <div className="hidden lg:block h-px w-10 bg-second lg:w-50"></div>
          <div className="font-desc font-bold text-xl lg:text-2xl text-white text-center shadow-2xl">
            Stories Behind Every Cup
          </div>
          <div className="h-px w-80 bg-second lg:w-50"></div>
        </div>

        <TestimonialCard />
      </div>
    </main>
  );
}

export default Home;
