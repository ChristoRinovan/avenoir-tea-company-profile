import { useEffect, useState } from "react";
import { getBlogs } from "@/services/blogService";
import type { Blog } from "@/types/blog";

function formatPublishDate(dateValue: Blog["publishDate"]) {
  const date = dateValue instanceof Date ? dateValue : new Date(dateValue);

  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function BlogArticle() {
  const [blogArticles, setBlogArticles] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      const data = await getBlogs();
      setBlogArticles(data);
    }

    fetchBlogs();
  }, []);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-10">
      {blogArticles.map((item) => (
        <div key={item.objectId} className="w-full">
          <div className="rounded-2xl border border-base-300 bg-second p-6 shadow-md">
            <h2 className="mb-3 text-2xl font-semibold text-utama font-brand">
              {item.title}
            </h2>

            <h3 className="mb-5 text-sm font-par text-utama/70 leading-relaxed">
              {item.excerpt}
            </h3>

            <div className="flex flex-row font-navbar justify-between gap-5 text-sm text-utama/60">
              <h4>{item.author}</h4>
              <p>{formatPublishDate(item.publishDate)}</p>
            </div>
          </div>

          <div className="collapse collapse-arrow shadow-md mt-3 rounded-2xl border border-base-300 bg-second">
            <input type="checkbox" />

            <div className="collapse-title text-sm font-normal italic text-utama">
              click to view article . . .
            </div>

            <div className="collapse-content space-y-4 lg:px-15 px-10">
              <h2 className="text-xl font-brand font-semibold text-utama text-center">
                "{item.title}"
              </h2>

              <p className="text-sm font-par leading-relaxed indent-15 text-justify mb-5">
                {item.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogArticle;