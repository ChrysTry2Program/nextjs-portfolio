import path from "node:path";
import fs from "node:fs/promises";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolink from "rehype-autolink-headings";
import Image from "next/image";
import MdxImage from "@/components/MdxImage";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt?: string;
<<<<<<< HEAD
};

=======
  tags?: string[];
};

/*----------------------------------------------------------------------------*/
// Post directory
>>>>>>> 4d5e91e (Initial commit)
const contentDir = path.join(process.cwd(), "content", "blog");

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  const files = await fs.readdir(contentDir);
  const metas: PostMeta[] = [];
  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;
    const slug = file.replace(/\.mdx$/, "");
    const full = path.join(contentDir, file);
    const raw = await fs.readFile(full, "utf8");
    const { data } = matter(raw);
    metas.push({
      slug,
      title: data.title ?? slug,
      date: String(data.date ?? ""),
      image: String(data.image ?? ""),
      excerpt: data.excerpt ? String(data.excerpt) : undefined,
    });
  }
  // Newest first
  return metas.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  const file = path.join(contentDir, `${slug}.mdx`);
  const source = await fs.readFile(file, "utf8");

  const { content, frontmatter } = await compileMDX<{
    title: string;
    date: string;
    image: string;
    excerpt?: string;
  }>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeAutolink, { behavior: "wrap" }]],
      },
    },
    components: {
      Image: MdxImage,
    },
  });

  return { content, meta: { slug, ...frontmatter } as PostMeta };
}
<<<<<<< HEAD
=======

/*----------------------------------------------------------------------------*/
// Project directory
const projectsDir = path.join(process.cwd(), "content", "projects");

export async function getAllProjectsMeta(): Promise<PostMeta[]> {
  const files = await fs.readdir(projectsDir);
  const metas: PostMeta[] = [];

  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;

    const slug = file.replace(/\.mdx$/, "");
    const full = path.join(projectsDir, file);
    const raw = await fs.readFile(full, "utf8");
    const { data } = matter(raw);

    metas.push({
      slug,
      title: data.title ?? slug,
      date: String(data.date ?? ""),
      image: String(data.image ?? ""),
      excerpt: data.excerpt ? String(data.excerpt) : undefined,
      tags: data.tags ? [...data.tags] : [],
    });
  }

  return metas.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getProjectBySlug(slug: string) {
  const file = path.join(projectsDir, `${slug}.mdx`);
  const source = await fs.readFile(file, "utf8");

  const { content, frontmatter } = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeAutolink, { behavior: "wrap" }]],
      },
    },
    components: {
      Image: MdxImage,
    },
  });

  return { content, meta: { slug, ...frontmatter } as PostMeta };
}

>>>>>>> 4d5e91e (Initial commit)
