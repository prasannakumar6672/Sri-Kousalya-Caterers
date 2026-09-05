import { Link } from "react-router-dom";
import { Star, Check } from "lucide-react";
import type { Occasion } from "@/data/occasionData";
import type { Service } from "@/data/serviceData";
import type { CateringPackage } from "@/data/packageData";
import type { Dish } from "@/data/menuData";
import type { Testimonial } from "@/data/testimonialData";
import { btnGold, btnOutline } from "@/components/common/buttons";
import { BananaLeafOutline } from "@/components/common/Motif";

export function OccasionCard({ occasion }: { occasion: Occasion }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-soft">
      <BananaLeafOutline className="pointer-events-none absolute -right-6 -top-6 w-24 text-gold/25" />
      <h3 className="font-display text-xl text-foreground">{occasion.title}</h3>
      <p className="te mt-1 text-sm text-gold">{occasion.te}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{occasion.description}</p>
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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-soft">
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
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl text-foreground">{service.title}</h3>
        <p className="te mt-0.5 text-sm text-gold">{service.te}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
        {detailed && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {service.suitedFor.map((s) => (
              <li
                key={s}
                className="rounded-full border border-gold/40 px-3 py-1 text-xs text-muted-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
        )}
        {detailed && (
          <Link to="/quote" className={`${btnOutline} mt-5 self-start`}>
            Enquire about this
          </Link>
        )}
      </div>
    </article>
  );
}

export function PackageCard({ pkg }: { pkg: CateringPackage }) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border p-6 ${
        pkg.featured
          ? "border-gold bg-primary text-primary-foreground shadow-lift"
          : "border-border bg-card"
      }`}
    >
      {pkg.featured && (
        <span className="eyebrow mb-3 self-start rounded-full bg-gold px-3 py-1 text-[0.6rem] text-accent-foreground">
          Most requested
        </span>
      )}
      <h3
        className={`font-display text-2xl ${pkg.featured ? "text-primary-foreground" : "text-foreground"}`}
      >
        {pkg.name}
      </h3>
      <p className={`te mt-0.5 text-sm ${pkg.featured ? "text-gold-soft" : "text-gold"}`}>
        {pkg.te}
      </p>
      <p
        className={`mt-4 font-display text-xl ${pkg.featured ? "text-gold-soft" : "text-primary"}`}
      >
        Custom Quote
      </p>

      <dl
        className={`mt-5 space-y-3 text-sm ${pkg.featured ? "text-primary-foreground/85" : "text-muted-foreground"}`}
      >
        <div>
          <dt className="eyebrow text-[0.6rem] opacity-70">Best suited for</dt>
          <dd>{pkg.bestFor}</dd>
        </div>
        <div>
          <dt className="eyebrow text-[0.6rem] opacity-70">Guest range</dt>
          <dd>{pkg.guests}</dd>
        </div>
        <div>
          <dt className="eyebrow text-[0.6rem] opacity-70">Menu flexibility</dt>
          <dd>{pkg.menuFlexibility}</dd>
        </div>
        <div>
          <dt className="eyebrow text-[0.6rem] opacity-70">Service style</dt>
          <dd>{pkg.serviceStyle}</dd>
        </div>
      </dl>

      <ul
        className={`mt-5 space-y-2 text-sm ${pkg.featured ? "text-primary-foreground/85" : "text-muted-foreground"}`}
      >
        {pkg.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <Link
        to={`/quote?package=${encodeURIComponent(pkg.name)}`}
        className={`${pkg.featured ? btnGold : btnOutline} mt-6 w-full`}
      >
        Get Custom Quote
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
    <div className="relative h-full rounded-2xl border border-border bg-card p-5 lg:p-6">
      <span className="font-display text-3xl text-gold">{index}</span>
      <h3 className="mt-2 font-display text-xl text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
      {t.placeholder && (
        <span className="eyebrow mb-3 self-start rounded-full bg-muted px-2.5 py-1 text-[0.55rem] text-muted-foreground">
          Placeholder — awaiting real review
        </span>
      )}
      <div className="flex gap-0.5 text-gold" aria-label={`${t.rating} out of 5`}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {t.quote}
      </blockquote>
      <figcaption className="mt-4 text-sm">
        <span className="font-semibold text-foreground">{t.name}</span>
        <span className="text-muted-foreground"> · {t.eventType}</span>
      </figcaption>
    </figure>
  );
}
