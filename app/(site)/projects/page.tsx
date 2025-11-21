<<<<<<< HEAD
import Section from "@/components/Section";
import ProjectCard, { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    title:
      "Autonomous Medicine Dispensing and Distribution Robot – Medicine Dispensing",
    description:
      "An autonomous medicine dispensing robot that receives patient and dosage data via a web-based interface, securely stores solid tablets or capsules, and accurately dispenses them in a controlled hospital ward setting to improve efficiency and reduce nursing workload.",
    tags: ["Arduino", "ESP32", "Medicine", "Automated Robotics"],
    href: "#",
  },
  {
    title: "Personal Website",
    description:
      "To develop and showcase my web development skills using modern tools such as Next.js, TypeScript, and Tailwind CSS.",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    href: "#",
  },
];

export default function ProjectsPage() {
=======
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import { getAllProjectsMeta } from "@/lib/mdx";

export const metadata = {
  title: "Projects",
  description: "Selected work across AI, robotics, and web.",
};

export default async function BlogIndex() {
  const posts = await getAllProjectsMeta();
>>>>>>> 4d5e91e (Initial commit)
  return (
    <div className="space-y-10">
      <Section
        title="Projects"
        subtitle="Selected work across AI, robotics, and web."
      >
        <div className="grid md:grid-cols-2 gap-6">
<<<<<<< HEAD
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
=======
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
              <Link className="btn mt-4 w-fit" href={`/projects/${p.slug}`}>
                Read
              </Link>
            </article>
>>>>>>> 4d5e91e (Initial commit)
          ))}
        </div>
      </Section>
    </div>
  );
}
