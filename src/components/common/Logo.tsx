import { Link } from "react-router-dom";
import { site } from "@/data/siteData";

export function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const main = tone === "light" ? "text-primary-foreground" : "text-primary";
  const sub = tone === "light" ? "text-gold-soft" : "text-muted-foreground";
  return (
    <Link
      to="/"
      className={`group inline-flex min-w-0 flex-col leading-none ${className}`}
      aria-label={`${site.name} — ${site.tagline}, home`}
    >
      <span
        className={`font-display text-[1.6rem] font-semibold tracking-tight sm:text-[1.8rem] ${main}`}
      >
        Sri Kousalya
      </span>
      <span className="mt-1 flex items-center gap-2">
        <span className="rule-gold h-px w-6 shrink-0" aria-hidden="true" />
        <span className={`eyebrow text-[0.55rem] ${sub}`}>Catering & Cooking</span>
      </span>
    </Link>
  );
}
