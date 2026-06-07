import CreateCard from "@/components/CreateBlogCard";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";

function CreateBlog() {
  return (
    <main>
      <PageHero title="Create Blog" />
      <SectionHeader
        title="Editorial Studio"
        description="Share Knowledge, Inspire Moments"
      />
      <CreateCard />
    </main>
  );
}

export default CreateBlog;
