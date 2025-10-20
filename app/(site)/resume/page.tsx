import Section from "@/components/Section";
import Resume from "@/components/Resume";

export const metadata = {
  title: "Resume",
  description: "Résumé/CV for Chrysander Soliment with a downloadable PDF.",
};

export default function ResumePage() {
  return (
    <div className="space-y-8">
      <Section title="Resume" subtitle="Download the complete resume [PDF].">
        <Resume />
      </Section>
    </div>
  );
}
