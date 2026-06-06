import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import ProductsCard from "../components/ProductsCard";
import TestimonialSection from "@/components/TestimonialSection";


function Products() {
  return (
    <main>
      <PageHero title="Products" />
      <SectionHeader
        title="Fine Tea Collection"
        description="Exceptional Blends, Distinctive Character"
      />
      <ProductsCard />
      <TestimonialSection/>
    </main>
  );
}

export default Products;
