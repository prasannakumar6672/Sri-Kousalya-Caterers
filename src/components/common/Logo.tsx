import { Link } from "react-router-dom";
import { site } from "@/data/siteData";
import swamiIcon from "@/assets/hero/swami-icon.png";

export function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const main = tone === "light" ? "text-white" : "text-primary";
  const sub = tone === "light" ? "text-brand-gold-light" : "text-muted-foreground";

  return (
    <Link
      to="/"
      className={`group inline-flex min-w-0 items-center gap-2 sm:gap-2.5 leading-none ${className}`}
      aria-label={`${site.name} — ${site.tagline}, home`}
    >
      {/* Lord Venkateswara Swami Temple Arch Icon */}
      <img
        src={swamiIcon}
        alt="Lord Venkateswara Swami"
        className="h-9 w-auto shrink-0 object-contain drop-shadow-sm transition-transform duration-200 group-hover:scale-105 sm:h-11 lg:h-12"
      />

      <div className="flex min-w-0 flex-col justify-center">
        <span
          className={`font-display text-[1.05rem] font-bold tracking-tight uppercase sm:text-[1.45rem] lg:text-[1.65rem] ${main}`}
        >
          Sri Kousalya
        </span>
        <span className="mt-0.5 flex items-center gap-1 sm:gap-1.5">
          <span className="rule-gold h-px w-3 shrink-0 sm:w-5" aria-hidden="true" />
          <span
            className={`eyebrow text-[0.52rem] font-medium tracking-wide sm:text-[0.6rem] ${sub}`}
          >
            Catering &amp; Cooking
          </span>
        </span>
      </div>
    </Link>
  );
}
