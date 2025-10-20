import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import { getAllPostsMeta } from "@/lib/mdx";

export const metadata = {
  title: "Blog",
  description: "Side quests and creative notes.",
};

export default async function BlogIndex() {
  const posts = await getAllPostsMeta();
  return (
    <div className="space-y-10">
      <Section
        title="Blog"
        subtitle="Side quests, experiments, and creative notes."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <article key={p.slug} className="card">
              <div className="relative w-full h-40 mb-4 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
                {p.image && (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <h3 className="text-lg font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="muted text-sm mt-1">
                {p.date && new Date(p.date).toLocaleDateString()}
              </p>
              {p.excerpt && <p className="muted mt-2">{p.excerpt}</p>}
              <Link className="btn mt-4 w-fit" href={`/blog/${p.slug}`}>
                Read
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
