import CompanyOverview from "../components/CompanyOverview";
import PageHero from "../components/PageHero";

import VisionMissionCard from "../components/VisionMissionCard";

function About() {
  return (
    <main>
      <PageHero title="About Us" />
      <CompanyOverview button={false} />
      <VisionMissionCard />
    </main>
  );
}

export default About;
