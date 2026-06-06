
import CompanyOverview from "../components/CompanyOverview";
import PageHero from "../components/PageHero";

import VisionMissionCard from "../components/VisionMissionCard";

import FounderSection from "@/components/FounderSection";

function About() {
  return (
    <main>
      <PageHero title="About Us" />
      <CompanyOverview button={false} />
      <FounderSection />
      <VisionMissionCard />
    </main>
  );
}

export default About;
