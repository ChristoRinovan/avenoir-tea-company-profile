import { blogArticles } from "@/data/BlogArticle";

function BlogArticle() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-10">
      {blogArticles.map((item) => (
        <div key={item.id} className="w-full">
          <div className="rounded-2xl border border-base-300 bg-second p-6 shadow-md">
            <h2 className="mb-3 text-2xl font-semibold text-utama font-brand">
              {item.title}
            </h2>

            <h3 className="mb-5 text-sm font-par  text-utama/70 leading-relaxed">
              {item.excerpt}
            </h3>

            <div className="flex flex-row font-navbar justify-between gap-5 text-sm text-utama/60">
              <h4>{item.author}</h4>
              <p>{item.publishDate}</p>
            </div>
          </div>

          <div className="collapse collapse-arrow shadow-md mt-3 rounded-2xl border border-base-300 bg-second">
            <input type="checkbox" />

            <div className="collapse-title text-sm font-normal italic text-utama">
              click to view article . . .
            </div>

            <div className="collapse-content space-y-4 lg:px-15 px-10 ">
              <h2 className="text-xl font-brand font-semibold text-utama text-center">
                "{item.title}"
              </h2>

              <p className="text-sm font-par leading-relaxed indent-15 text-justify">
                {item.content1}
              </p>
              <p className="text-sm font-par leading-relaxed indent-15 text-justify mb-5">
                {item.content2}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogArticle;
