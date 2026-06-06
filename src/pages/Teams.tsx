import FounderCard from "@/components/FounderCard";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import TeamCard from "../components/TeamCard";

function Teams() {
  return (
    <main>
      <PageHero title="Our Team" />
      <SectionHeader
        title="Our Team"
        description="The People Behind Every Blend
"
      />
      <FounderCard
        name="Ivan Widi"
        position="Founder & Chief Executive Officer"
        bio=" The visionary behind Avenoir Tea, leading the brand with a passion for
      premium tea craftsmanship, elegant experiences, and timeless product
      quality."
      />
      <TeamCard />
    </main>
  );
}

export default Teams;
