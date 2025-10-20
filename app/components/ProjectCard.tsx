import Link from "next/link";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  href?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="muted mt-1">{project.description}</p>
        </div>
        {project.href && (
          <Link className="btn" href={project.href} target="_blank">
            Open
          </Link>
        )}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-full border border-zinc-300 dark:border-zinc-800"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
