import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import ServiceCard from "../components/ServiceCard";

function Products() {
  return (
    <main>
      <PageHero title="Products" />
      <SectionHeader
        title="Fine Tea Collection"
        description="Exceptional Blends, Distinctive Character"
      />
      <ServiceCard />
    </main>
  );
}

export default Products;
