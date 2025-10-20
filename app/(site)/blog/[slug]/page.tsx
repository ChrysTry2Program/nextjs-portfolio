import { notFound } from "next/navigation";
import Image from "next/image";
import Section from "@/components/Section";
import { getAllPostsMeta, getPostBySlug } from "@/lib/mdx";

interface Params {
  params: { slug: string };
}

export async function generateStaticParams() {
  const metas = await getAllPostsMeta();
  return metas.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: Params) {
  return { title: params.slug };
}

export default async function BlogPostPage({ params }: Params) {
  const { content, meta } = await getPostBySlug(params.slug).catch(() => ({
    content: null,
    meta: null,
  }));
  if (!content || !meta) return notFound();

  return (
    <div className="space-y-10">
      <Section
        title={meta.title}
        subtitle={meta.date && new Date(meta.date).toLocaleDateString()}
      >
        <div className="grid gap-6">
          {meta.image && (
            <div className="relative w-full h-72 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <Image
                src={meta.image}
                alt={meta.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          <div className="blog-content">
            <div className="prose dark:prose-invert max-w-none">{content}</div>
          </div>
        </div>
      </Section>
    </div>
  );
}
