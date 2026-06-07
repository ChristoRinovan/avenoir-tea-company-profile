import Backendless from "./backendless";
import type { Blog } from "@/types/blog";

const BLOG_TABLE = "BlogArticle";

export type CreateBlogInput = {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: Date;
};

export async function getBlogs(): Promise<Blog[]> {
  const data = await Backendless.Data.of(BLOG_TABLE).find();

  return data as unknown as Blog[];
}

export async function createBlog(blog: CreateBlogInput): Promise<Blog> {
  const data = await Backendless.Data.of(BLOG_TABLE).save(blog);

  return data as unknown as Blog;
}