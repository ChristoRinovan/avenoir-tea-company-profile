import homeimg from "../assets/homepage.webp";
import CompanyOverview from "../components/CompanyOverview";
import ProductsCard from "../components/ProductsCard";
import SectionHeader from "../components/SectionHeader";
import TestimonialSection from "../components/TestimonialSection";

function Home() {
    
  return (
    <main>
      <img src={homeimg} alt="" className="overflow-hidden" />
      <CompanyOverview />
      <div className="lg:w-full lg:h-full lg:gap-10 flex flex-col items-center justify-between overflow-hidden my-10">
        <SectionHeader title="" description="Want to elevate every tea moment?" />
        <ProductsCard />
      </div>

      <TestimonialSection />
    </main>
  );
}

export default Home;
