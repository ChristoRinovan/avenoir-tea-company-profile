import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

import { useAuthStore } from "@/services/useAuthStore";
import { createBlog } from "@/services/blogService";
import { createBlogValidation } from "@/types/validation";

function CreateCard() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  const handleCreateBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      toast.error("Anda belum Login!", {
        description: "Login terlebih dahulu untuk membuat blog.",
      });

      navigate("/login");
      return;
    }

    const result = createBlogValidation.safeParse({
      title,
      excerpt,
      content,
    });

    if (!result.success) {
      toast.error("Data blog belum valid", {
        description: result.error.issues[0].message,
      });

      return;
    }

    try {
      await createBlog({
        title: result.data.title,
        excerpt: result.data.excerpt,
        content: result.data.content,
        author: user.name,
        publishDate: new Date(),
      });

      toast.success("Blog berhasil dibuat!");
      navigate("/blog");
    } catch (error) {
      // console.error("Gagal membuat blog:", error);

      toast.error("Gagal membuat blog");
    }
  };

  return (
    <form onSubmit={handleCreateBlog} className="w-full px-5 lg:py-15">
      <FieldGroup className="mx-auto max-w-xl gap-6">
        <Field>
          <FieldLabel htmlFor="title">Blog Title</FieldLabel>

          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>Title</InputGroupText>
            </InputGroupAddon>

            <InputGroupInput
              id="title"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputGroup>

          <FieldDescription>
            Write a clear and attractive blog title.
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="excerpt">Blog Excerpt</FieldLabel>

          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>Excerpt</InputGroupText>
            </InputGroupAddon>

            <InputGroupInput
              id="excerpt"
              placeholder="Enter short excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
            />
          </InputGroup>

          <FieldDescription>
            This excerpt will appear on the blog list page.
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="content">Blog Content</FieldLabel>

          <InputGroup>
            <InputGroupTextarea
              id="content"
              placeholder="Write your blog content..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-48 max-h-48 resize-none overflow-y-auto"
            />

            <InputGroupAddon align="block-end">
              <InputGroupText className="text-xs text-muted-foreground">
                {content.length} characters
              </InputGroupText>

              <InputGroupButton
                type="submit"
                variant="default"
                size="sm"
                className="ml-auto"
              >
                Create Blog
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>

          <FieldDescription>
            Write the full content of your blog article.
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}

export default CreateCard;
