import Section from "@/components/Section";
import { siteConfig } from "@/config/site";

<<<<<<< HEAD
=======
export const metadata = {
  title: "Contact",
  description: "Chrysander's Website Contact Page",
};

>>>>>>> 4d5e91e (Initial commit)
export default function ContactPage() {
  return (
    <div className="space-y-10">
      <Section title="Contact" subtitle="I’d love to hear from you.">
        <form
          className="card grid gap-4"
          action={`mailto:${siteConfig.email}`}
          method="post"
          encType="text/plain"
        >
          <label className="grid gap-1">
            <span className="text-sm">Your Name</span>
            <input
              className="px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-transparent"
              name="name"
              required
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Your Email</span>
            <input
              type="email"
              className="px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-transparent"
              name="email"
              required
            />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Message</span>
            <textarea
              rows={6}
              className="px-3 py-2 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-transparent"
              name="message"
              required
            />
          </label>
          <button className="btn w-fit" type="submit">
            Send
          </button>
          <p className="muted text-xs">Prefer email? {siteConfig.email}</p>
        </form>
      </Section>
    </div>
  );
}
