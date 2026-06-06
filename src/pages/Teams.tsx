import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import TeamSection from "../components/TeamCard";

function Teams() {
  return (
    <main>
      <PageHero title="Our Team" />
      <SectionHeader
        title="Our Team"
        description="The People Behind Every Blend
"
      />
      <TeamSection/>
    </main>
  );
}

export default Teams;
