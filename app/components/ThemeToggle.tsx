"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import useSound from "use-sound";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Sounds (put files in /public/sounds — see step 6)
  const [playOn] = useSound("/sounds/toggle-on.mp3", { volume: 0.35 });
  const [playOff] = useSound("/sounds/toggle-off.mp3", { volume: 0.35 });

  const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");

  const handleToggle = () => {
    const next = isDark ? "light" : "dark";
    setTheme(next);
    next === "dark" ? playOn() : playOff();
  };

  if (!mounted) return null; // avoid hydration mismatch on SSR

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={handleToggle}
      className="ml-2 inline-flex items-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-800 px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-900"
    >
      <span className="inline-block w-4 h-4 rounded-full bg-zinc-800 dark:bg-yellow-300" />
      {isDark ? "Dark" : "Light"}
    </button>
  );
}
