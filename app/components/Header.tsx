import Link from "next/link";
import type { Route } from "next";
import { siteConfig } from "@/config/site";
import ThemeToggle from "./ThemeToggle";

const NavLink = ({ href, children }: { href: Route; children: React.ReactNode }) => (
  <Link
    className="px-3 py-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900"
    href={href}
  >
    {children}
  </Link>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-zinc-200 dark:border-zinc-800">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav className="hidden md:flex items-center text-sm">
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/experience">Experience</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/resume">Resume</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
