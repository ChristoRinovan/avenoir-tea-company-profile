import SectionHeader from "./SectionHeader";
import overviewimg from "../assets/company-overview.webp";
import { Link } from "react-router-dom";

type CompanyOverviewProps = {
  button?: boolean;
};
function CompanyOverview({ button = true }: CompanyOverviewProps) {
  return (
    <div className="lg:py-10 lg:px-20 w-screen h-full bg-linear-to-r from-[#F7F0EA] via-[#F3ECE7] to-[#EFE3DA] overflow-hidden text-[#2B1D1A]">
      <div className="flex flex-col p-10  lg:flex-row gap-5 lg:gap-15 items-start justify-center">
        <img
          src={overviewimg}
          alt="Avenoir Tea production process from premium tea leaf harvesting to crafting a perfect cup of tea"
          className="order-2 lg:order-1 w-90 shadow-xl shadow-[#2B1D1A]/20 object-cover"
        />

        <div className="order-1 lg:order-2 lg:w-100 lg:h-full relative">
          <SectionHeader
            title="Avenoir Tea"
            description="The Art Of Timeless Tea"
          />

          <p className="font-par text-center lg:text-left mb-5 lg:mb-10 tracking-widest leading-relaxed text-sm lg:text-md text-[#2B1D1A]/90">
            Avenoir Tea adalah perusahaan teh premium yang didedikasikan untuk
            menghadirkan pengalaman menikmati teh yang elegan dan berkesan.
          </p>

          <p className="font-par text-center lg:text-left mb-5 lg:mb-10 tracking-widest leading-relaxed text-sm lg:text-md text-[#2B1D1A]/90">
            Berawal dari kecintaan terhadap seni meracik teh berkualitas, kami
            menggabungkan bahan baku pilihan dan desain modern.
          </p>
          {button && (
            <div className="p-6">
              <Link to="/about">
                <button className="btn btn-dash absolute right-0 bottom-0 bg-transparent border-[#C89B5E] text-[#2B1D1A] hover:bg-[#C89B5E] hover:border-[#C89B5E] hover:text-white">
                  About Avenoir Tea
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompanyOverview;
