import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="container py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="muted">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <Link
            className="btn"
            href={siteConfig.links.linkedin}
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link className="btn" href={siteConfig.links.github} target="_blank">
            GitHub
          </Link>
          {siteConfig.links.twitter && (
            <Link
              className="btn"
              href={siteConfig.links.twitter}
              target="_blank"
            >
              Twitter
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
