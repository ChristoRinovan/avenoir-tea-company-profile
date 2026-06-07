import { z } from "zod";

export const loginFormRules = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(1, "Password wajib diisi"),
});



export const createBlogValidation = z.object({
  title: z.string().min(3, "Judul minimal 3 karakter"),
  excerpt: z.string().min(10, "Excerpt minimal 10 karakter"),
  content: z.string().min(100, "Content minimal 100 karakter"),
});
