import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard, { Project } from "@/components/ProjectCard";

<<<<<<< HEAD
=======

>>>>>>> 4d5e91e (Initial commit)
export default function Page() {
  const featured: Project[] = [
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

  return (
    <div className="space-y-12">
      <Hero />
      <Section
        title="Featured Projects"
        subtitle="A small selection of things I’ve built."
      >
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Section>
      <Section
        title="What I’m focusing on"
        subtitle="Robotics, web development, self-improvement."
      >
        <ul className="grid gap-2 list-disc pl-5 muted">
          <li>Optimising medicine dispensing in hospital wards.</li>
          <li>
            Clean, maintainable TS/React front‑ends with strong accessibility.
          </li>
          <li>
            Building skillsets that compliments me professionally and
            personally.
          </li>
        </ul>
      </Section>
    </div>
  );
}
