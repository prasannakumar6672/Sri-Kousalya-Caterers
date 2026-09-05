import type { ReactNode } from "react";

export function PageHero({
  te,
  title,
  intro,
  image,
  alt,
}: {
  te: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  alt?: string;
}) {
  if (image) {
    return (
      <section className="relative isolate overflow-hidden">
        <img
          src={image}
          alt={alt ?? ""}
          width={1600}
          height={900}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-forest-deep/78" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <p className="te text-sm text-gold-soft">{te}</p>
          <h1 className="mt-2 max-w-2xl font-display text-[2.2rem] leading-tight text-primary-foreground sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-primary-foreground/80">
              {intro}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="kalamkari border-b border-border bg-cream-deep">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="te text-sm text-gold">{te}</p>
        <h1 className="mt-2 max-w-2xl font-display text-[2.2rem] leading-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
