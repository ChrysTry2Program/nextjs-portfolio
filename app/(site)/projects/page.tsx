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
  return (
    <div className="space-y-10">
      <Section
        title="Projects"
        subtitle="Selected work across AI, robotics, and web."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Section>
    </div>
  );
}
