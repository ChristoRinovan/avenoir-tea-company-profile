import BlogArticle from "@/components/BlogArticle";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";

function BlogList() {
  return (
    <main className="">
      <PageHero title="Stories From The World Of Tea" />
      <SectionHeader
        title="Avenoir Journal"
        description="Explore expert brewing guides, tea knowledge, and inspiring stories that celebrate the craftsmanship, culture, and timeless enjoyment of premium tea."
      />
      
      <BlogArticle />
    </main>
  );
}

export default BlogList;
