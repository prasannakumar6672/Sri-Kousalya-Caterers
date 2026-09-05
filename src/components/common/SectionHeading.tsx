import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrowTe,
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "dark",
}: {
  eyebrowTe?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
}) {
  const alignment =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const titleColor = tone === "light" ? "text-primary-foreground" : "text-foreground";
  const introColor = tone === "light" ? "text-primary-foreground/75" : "text-muted-foreground";
  return (
    <Reveal className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrowTe && (
        <p className={`mb-3 ${align === "center" ? "text-center justify-center mx-auto" : "text-left"} flex items-center`}>
          <span className="te text-sm sm:text-base font-medium text-gold">{eyebrowTe}</span>
        </p>
      )}
      <h2 className={`text-[1.9rem] leading-[1.15] sm:text-4xl lg:text-[2.7rem] ${titleColor}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-[0.95rem] leading-relaxed sm:text-base ${introColor}`}>{intro}</p>
      )}
    </Reveal>
  );
}
