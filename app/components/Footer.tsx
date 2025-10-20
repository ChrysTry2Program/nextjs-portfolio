import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="container py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="muted">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a
            className="btn"
            href={siteConfig.links.linkedin}
            target="_blank"
          >
            LinkedIn
          </a>
          <a className="btn" href={siteConfig.links.github} target="_blank">
            GitHub
          </a>
          {siteConfig.links.twitter && (
            <a
              className="btn"
              href={siteConfig.links.twitter}
              target="_blank"
            >
              Twitter
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
