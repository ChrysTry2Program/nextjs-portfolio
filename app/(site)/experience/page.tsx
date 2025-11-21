import Section from "@/components/Section";
import Timeline, { TimelineItem } from "@/components/Timeline";

<<<<<<< HEAD
=======
export const metadata = {
  title: "Experience",
  description: "Timeline of Chrysander",
};

>>>>>>> 4d5e91e (Initial commit)
const items: TimelineItem[] = [
  {
    title: "Engineering Intern (Project Delivery)",
    company: "Sarawak Energy Berhad",
    period: "Jan 2024 — Mar 2024",
    details: [
      "Conducted quality audits and verified project documentation.",
      "Assisted in site inspections and coordinated with cross-functional teams.",
      "Compiled findings in Excel to support decision-making.",
    ],
  },
  {
    title: "SEB Scholar",
    company: "Sarawak Energy Berhad",
    period: "2020 — Present",
    details: [
      "Full Scholarship Grant.",
      "Develop Sarawak’s brightest young talents.",
    ],
  },
  {
    title: "Student (Science Stream)",
    company: "SMK St Columba Miri",
    period: "2015 — 2019",
    details: [
      "SPM: 9A.",
      "Academic Excellence Award & Exemplary Student Award.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <Section
        title="Experience"
        subtitle="Roles, responsibilities, and impact."
      >
        <Timeline items={items} />
      </Section>
    </div>
  );
}
