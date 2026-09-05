import { Link } from "react-router-dom";
import { Star, Check, ArrowRight, Quote } from "lucide-react";
import type { Occasion } from "@/data/occasionData";
import type { Service } from "@/data/serviceData";
import type { CateringPackage } from "@/data/packageData";
import type { Dish } from "@/data/menuData";
import type { Testimonial } from "@/data/testimonialData";
import { btnGold, btnOutline } from "@/components/common/buttons";
import { BananaLeafOutline } from "@/components/common/Motif";
import { OccasionIcon } from "@/components/common/OccasionIcon";

export function OccasionCard({ occasion }: { occasion: Occasion }) {
  return (
    <article className="group relative h-full flex flex-col items-center text-center overflow-hidden rounded-2xl border border-border/80 bg-card p-3.5 sm:p-5 lg:p-6 transition-all duration-300 hover:border-gold hover:shadow-soft hover:-translate-y-1">
      <BananaLeafOutline className="pointer-events-none absolute -right-5 -top-5 sm:-right-6 sm:-top-6 w-16 sm:w-20 lg:w-24 text-gold/20 transition-opacity duration-300 group-hover:text-gold/35" />

      {/* Handcrafted Golden Illustrated Occasion Icon Container */}
      <div className="mx-auto size-12 sm:size-16 lg:size-20 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#f9f3e5] to-[#f4ebd6] dark:from-gold/20 dark:to-gold/5 border border-gold/30 text-gold-dark dark:text-gold flex items-center justify-center mb-2.5 sm:mb-4 transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:shadow-md shrink-0">
        <OccasionIcon name={occasion.id} className="size-6 sm:size-8 lg:size-11" />
      </div>

      <h3 className="font-display text-sm sm:text-lg lg:text-xl font-bold leading-snug text-foreground transition-colors duration-200 group-hover:text-gold-dark dark:group-hover:text-gold">
        {occasion.title}
      </h3>
      <p className="te mt-0.5 sm:mt-1 text-[11px] sm:text-xs lg:text-sm font-medium text-gold">{occasion.te}</p>
      <p className="mt-1.5 sm:mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-2 sm:line-clamp-3">
        {occasion.description}
      </p>
    </article>
  );
}

export function FoodCard({
  dish,
  circular = false,
  isCenter = false,
}: {
  dish: Dish;
  circular?: boolean;
  isCenter?: boolean;
}) {
  return (
    <article
      className={
        circular ? "text-center select-none" : "h-full overflow-hidden rounded-2xl border border-border bg-card"
      }
    >
      {dish.image && (
        <div className={circular ? "relative mx-auto aspect-square w-full max-w-[190px]" : undefined}>
          <img
            src={dish.image}
            alt={dish.name}
            loading="lazy"
            width={900}
            height={900}
            className={
              circular
                ? `size-full rounded-full object-cover transition-all duration-500 ease-out ${
                    isCenter
                      ? "scale-105 ring-4 ring-gold/90 ring-offset-2 ring-offset-background shadow-xl"
                      : "scale-95 opacity-85 ring-1 ring-border/50 hover:opacity-100 hover:scale-100 shadow-soft"
                  }`
                : "aspect-[4/3] w-full object-cover"
            }
          />
        </div>
      )}
      <div className={circular ? "mt-4 px-2 text-center" : "p-4"}>
        <div
          className={
            circular
              ? "flex items-center justify-center gap-1.5 text-center"
              : "flex items-start justify-between gap-2"
          }
        >
          <h3
            className={`font-display leading-tight text-foreground transition-all duration-300 ${
              circular
                ? isCenter
                  ? "text-xl font-bold text-foreground"
                  : "text-lg text-foreground/90"
                : "text-lg"
            }`}
          >
            {dish.name}
          </h3>
          <span
            aria-label={dish.veg ? "Vegetarian" : "Non-vegetarian"}
            title={dish.veg ? "Vegetarian" : "Non-vegetarian"}
            className={`grid size-3.5 shrink-0 place-items-center border ${
              dish.veg ? "border-green-700" : "border-red-700"
            } ${circular ? "mt-0.5" : "mt-1"}`}
          >
            <span className={`size-1.5 rounded-full ${dish.veg ? "bg-green-700" : "bg-red-700"}`} />
          </span>
        </div>
        <p
          className={`te mt-1 text-sm font-medium text-gold transition-colors duration-300 ${
            circular ? "text-center" : ""
          }`}
        >
          {dish.te}
        </p>
        <p
          className={`mt-2 text-sm leading-relaxed text-muted-foreground ${
            circular ? "text-center line-clamp-2" : ""
          }`}
        >
          {dish.description}
        </p>
        {!circular && (
          <p className="mt-3 text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
            Available on enquiry
          </p>
        )}
      </div>
    </article>
  );
}

export function ServiceCard({
  service,
  detailed = false,
}: {
  service: Service;
  detailed?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card transition-all duration-300 hover:border-gold/60 hover:shadow-soft hover:-translate-y-1">
      <div className="overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          width={1200}
          height={800}
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-3 sm:p-4 lg:p-5">
        <h3 className="font-display text-sm sm:text-base lg:text-xl font-bold text-foreground group-hover:text-gold-dark dark:group-hover:text-gold transition-colors leading-snug">
          {service.title}
        </h3>
        <p className="te mt-0.5 text-[11px] sm:text-xs lg:text-sm font-medium text-gold">{service.te}</p>
        <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-2 sm:line-clamp-3">
          {service.description}
        </p>
        {detailed && (
          <ul className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
            {service.suitedFor.map((s) => (
              <li
                key={s}
                className="rounded-full border border-gold/40 px-2.5 py-0.5 text-[11px] sm:text-xs text-muted-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto pt-3">
          {detailed ? (
            <Link to="/quote" className={`${btnOutline} self-start text-xs sm:text-sm py-2 px-4`}>
              Enquire about this
            </Link>
          ) : (
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-gold group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors"
            >
              <span>Explore</span>
              <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export function PackageCard({ pkg }: { pkg: CateringPackage }) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border p-4 sm:p-6 transition-all duration-300 hover:shadow-soft ${
        pkg.featured
          ? "border-gold bg-primary text-primary-foreground shadow-lift relative"
          : "border-border/80 bg-card text-foreground"
      }`}
    >
      {pkg.featured && (
        <span className="eyebrow mb-2.5 self-start rounded-full bg-gold px-3 py-0.5 text-[0.65rem] font-bold text-forest-deep tracking-wider uppercase">
          ★ Most requested
        </span>
      )}
      <div className="flex items-baseline justify-between gap-2">
        <h3
          className={`font-display text-xl sm:text-2xl font-bold ${
            pkg.featured ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {pkg.name}
        </h3>
        <span
          className={`font-display text-xs sm:text-sm font-semibold px-2 py-0.5 rounded-md shrink-0 ${
            pkg.featured ? "bg-gold/20 text-gold" : "bg-muted text-gold-dark dark:text-gold"
          }`}
        >
          Custom Quote
        </span>
      </div>
      <p className={`te mt-0.5 text-xs sm:text-sm font-medium ${pkg.featured ? "text-gold" : "text-gold"}`}>
        {pkg.te}
      </p>

      {/* 2x2 Specs Grid */}
      <div
        className={`mt-4 grid grid-cols-2 gap-2 rounded-xl p-3 text-left border ${
          pkg.featured
            ? "bg-black/25 border-gold/25 text-primary-foreground/90"
            : "bg-muted/50 border-border/70 text-muted-foreground"
        }`}
      >
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-gold opacity-90 block">
            Best Suited
          </span>
          <p className="text-xs font-medium leading-tight mt-0.5 line-clamp-2">
            {pkg.bestFor}
          </p>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-gold opacity-90 block">
            Guest Range
          </span>
          <p className="text-xs font-medium leading-tight mt-0.5">
            {pkg.guests}
          </p>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-gold opacity-90 block">
            Menu Style
          </span>
          <p className="text-xs font-medium leading-tight mt-0.5 line-clamp-2">
            {pkg.menuFlexibility}
          </p>
        </div>
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-gold opacity-90 block">
            Service Style
          </span>
          <p className="text-xs font-medium leading-tight mt-0.5 line-clamp-2">
            {pkg.serviceStyle}
          </p>
        </div>
      </div>

      {/* Highlights checklist */}
      <ul
        className={`mt-3.5 space-y-1.5 text-xs sm:text-sm flex-1 ${
          pkg.featured ? "text-primary-foreground/90" : "text-muted-foreground"
        }`}
      >
        {pkg.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2">
            <Check className="mt-0.5 size-3.5 shrink-0 text-gold" aria-hidden="true" />
            <span className="leading-snug">{h}</span>
          </li>
        ))}
      </ul>

      <Link
        to={`/quote?package=${encodeURIComponent(pkg.name)}`}
        className={`${
          pkg.featured ? btnGold : btnOutline
        } mt-5 w-full inline-flex items-center justify-center gap-2 text-xs sm:text-sm py-2.5`}
      >
        <span>Get Custom Quote</span>
        <ArrowRight className="size-3.5" aria-hidden="true" />
      </Link>
    </article>
  );
}

export function ProcessStep({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-3.5 sm:p-5 lg:p-6 transition-all duration-300 hover:border-gold hover:shadow-soft hover:-translate-y-1">
      {/* Subtle watermark number in background */}
      <span className="pointer-events-none absolute -right-2 -bottom-3 font-display text-5xl sm:text-6xl font-black text-foreground/[0.03] dark:text-foreground/[0.05] select-none transition-transform group-hover:scale-110">
        {index}
      </span>

      <div>
        {/* Step Badge */}
        <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3.5">
          <span className="flex size-8 sm:size-10 items-center justify-center rounded-xl bg-gradient-to-br from-gold/25 via-gold/10 to-transparent border border-gold/40 text-gold-dark dark:text-gold font-display text-sm sm:text-base font-bold shadow-xs transition-transform group-hover:scale-105">
            {index}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-gold/80">
            Step {parseInt(index, 10)}
          </span>
        </div>

        <h3 className="font-display text-sm sm:text-base lg:text-xl font-bold text-foreground group-hover:text-gold-dark dark:group-hover:text-gold transition-colors leading-snug">
          {title}
        </h3>
        <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {description}
        </p>
      </div>

      {/* Progress pill footer */}
      <div className="mt-3 pt-2 border-t border-border/40 flex items-center justify-between">
        <span className="inline-block size-1.5 rounded-full bg-gold/70" />
        <span className="text-[10px] font-medium text-gold">{index} / 04</span>
      </div>
    </div>
  );
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  const initials = t.name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <figure className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card p-4 sm:p-6 transition-all duration-300 hover:border-gold/60 hover:shadow-soft hover:-translate-y-1">
      {/* Subtle Quote watermark in corner */}
      <Quote className="pointer-events-none absolute right-4 top-4 size-9 text-gold/15 transition-transform duration-300 group-hover:scale-110 group-hover:text-gold/25" />

      <div>
        {/* Rating and Verified Badge */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex gap-1 text-gold" aria-label={`${t.rating} out of 5 stars`}>
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="size-4 fill-gold text-gold" aria-hidden="true" />
            ))}
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-gold-dark dark:text-gold border border-gold/25">
            <Check className="size-3" />
            <span>Verified Event</span>
          </span>
        </div>

        {/* Quote content */}
        <blockquote className="mt-3.5 text-xs sm:text-sm leading-relaxed text-foreground/90 font-serif italic">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
      </div>

      {/* Author Info */}
      <figcaption className="mt-4 pt-3 border-t border-border/50 flex items-center gap-2.5">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold/25 via-gold/10 to-transparent border border-gold/40 text-gold-dark dark:text-gold font-bold text-xs shadow-xs">
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-xs sm:text-sm text-foreground truncate">{t.name}</p>
          <p className="text-[11px] sm:text-xs text-muted-foreground truncate">
            {t.eventType} {t.location ? `· ${t.location}` : ""}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
