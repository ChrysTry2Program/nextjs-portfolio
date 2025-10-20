import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-8 items-center">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 text-xs">
          <span>Available for opportunities</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Hi, I’m {siteConfig.name}.{" "}
          <p className="text-brand">{siteConfig.role}</p>
        </h1>
        <p className="muted max-w-prose">{siteConfig.description}</p>
        <div className="flex flex-wrap gap-3">
          <Link className="btn" href="/projects">
            View Projects
          </Link>
          <Link className="btn" href="/contact">
            Contact Me
          </Link>
        </div>
      </div>
      <div className="justify-self-center">
        <Image
          src="/avatar.jpg"
          alt={`${siteConfig.name} portrait`}
          width={280}
          height={280}
          className="rounded-2xl border border-zinc-200 dark:border-zinc-800"
          priority
        />
      </div>
    </div>
  );
}
