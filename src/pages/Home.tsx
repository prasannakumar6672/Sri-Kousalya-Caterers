import { Link } from "react-router-dom";
import { Leaf, Flame, Users, ShieldCheck, MessageCircle } from "lucide-react";
import weddingFeast from "@/assets/wedding-feast.jpg";
import cookingTeam from "@/assets/cooking-team.jpg";
import { defaultWaMessage, site, waLink } from "@/data/siteData";
import { occasions } from "@/data/occasionData";
import { signatureDishes } from "@/data/menuData";
import { services } from "@/data/serviceData";
import { packages } from "@/data/packageData";
import { testimonials } from "@/data/testimonialData";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { MangoLeafDivider, BrassVessel } from "@/components/common/Motif";
import {
  OccasionCard,
  FoodCard,
  ServiceCard,
  PackageCard,
  ProcessStep,
  TestimonialCard,
} from "@/components/cards/cards";
import { Gallery } from "@/components/gallery/Gallery";
import { Hero } from "@/components/sections/Hero";
import { btnPrimary, btnGold, btnOutline, btnWhatsApp } from "@/components/common/buttons";

const trust = [
  { icon: Leaf, label: "Authentic Andhra Cuisine" },
  { icon: Flame, label: "Freshly Prepared" },
  { icon: Users, label: "Experienced Team" },
  { icon: ShieldCheck, label: "Hygienic Preparation" },
];

const steps = [
  {
    index: "01",
    title: "Tell Us About Your Event",
    description: "Share the date, guest count and the kind of function you are planning.",
  },
  {
    index: "02",
    title: "Choose Your Menu",
    description: "We suggest an Andhra menu and adjust it to your family's taste.",
  },
  {
    index: "03",
    title: "We Prepare & Serve",
    description: "Our cooks and serving team handle preparation and service on the day.",
  },
  {
    index: "04",
    title: "Enjoy Your Celebration",
    description: "You stay with your guests while we take care of the feast.",
  },
];

export function Home() {
  return (
    <>
      {/* HERO */}
      <Hero />

      {/* TRUST STRIP */}
      <section className="border-b border-border bg-cream-deep" aria-label="Why families choose us">
        <ul className="no-scrollbar mx-auto flex max-w-6xl gap-3 overflow-x-auto px-4 py-5 sm:px-6 lg:grid lg:grid-cols-4 lg:gap-6">
          {trust.map((t) => (
            <li
              key={t.label}
              className="flex min-w-[62%] shrink-0 items-center gap-3 rounded-xl bg-card px-4 py-3 sm:min-w-[45%] lg:min-w-0"
            >
              <t.icon className="size-5 shrink-0 text-gold" aria-hidden="true" />
              <span className="min-w-0 text-sm font-medium text-foreground">{t.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* OCCASIONS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrowTe="ప్రతి వేడుకకు"
          eyebrow="Occasions"
          title="Catering For Every Occasion"
          intro="From an intimate house pooja to a thousand-guest wedding, the food is prepared the same way — fresh, traditional and served with care."
        />
        <ul className="no-scrollbar mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {occasions.map((o, i) => (
            <Reveal as="li" key={o.title} delay={(i % 4) * 60}>
              <OccasionCard occasion={o} />
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ABOUT */}
      <section className="bg-cream-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <Reveal className="order-2 lg:order-1">
            <p className="te text-sm text-gold">రుచిలో సంప్రదాయం</p>
            <h2 className="mt-2 font-display text-[1.9rem] leading-tight text-foreground sm:text-4xl">
              Our Food. Our Tradition.
            </h2>
            <div className="rule-gold my-5 max-w-[10rem]" />
            <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
              At Sri Kousalya, food is more than a menu. It is part of the celebration — the pappu
              poured over hot rice, the pachadi at the corner of the leaf, the payasam that closes
              the meal.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {[
                "Authentic Andhra preparation, cooked in traditional proportions",
                "Quality ingredients bought fresh for every function",
                "Careful hygiene through preparation and serving",
                "Experienced cooking team and trained serving staff",
              ].map((l) => (
                <li key={l} className="flex gap-3">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className={`${btnOutline} mt-8`}>
              Discover Our Story
            </Link>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <div className="relative">
              <img
                src={cookingTeam}
                alt="Sri Kousalya cooks preparing rice in large brass vessels"
                loading="lazy"
                width={1408}
                height={1008}
                className="w-full rounded-3xl object-cover shadow-lift"
              />
              <BrassVessel className="absolute -bottom-5 -left-3 w-16 text-gold/60" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SIGNATURE MENU */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrowTe="రుచుల పండుగ"
          eyebrow="Signature"
          title="Signature Andhra Flavours"
          intro="A glimpse of the dishes an Andhra feast is built around. Sample items shown — your final menu is planned with you."
        />
        <div className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-0">
          {signatureDishes.map((dish, i) => (
            <Reveal
              key={dish.name}
              delay={(i % 3) * 70}
              className="w-[62%] shrink-0 snap-start lg:w-auto"
            >
              <FoodCard dish={dish} circular />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/menu" className={btnPrimary}>
            Explore Full Menu
          </Link>
        </div>
        <MangoLeafDivider className="mt-16" />
      </section>

      {/* WEDDING FEAST */}
      <section className="relative isolate overflow-hidden bg-forest-deep text-primary-foreground">
        <img
          src={weddingFeast}
          alt="Guests seated at a Telugu wedding feast served from brass vessels"
          loading="lazy"
          width={1600}
          height={1104}
          className="absolute inset-0 -z-10 size-full object-cover opacity-30"
        />
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:py-28">
          <Reveal>
            <p className="te text-sm text-gold-soft">విందు బాగుంటే... వేడుక గుర్తుండాలి</p>
            <h2 className="mt-3 font-display text-[2rem] leading-tight text-primary-foreground sm:text-5xl">
              More Than Food.
              <span className="block text-gold-soft">It&apos;s Part of the Celebration.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-primary-foreground/80">
              A Telugu wedding meal has its own rhythm — the leaf laid out, the sweet served first,
              the rounds of pappu, koora and charu, the payasam at the end. We cook and serve to
              that rhythm, so your guests remember the feast as much as the muhurtham.
            </p>
            <ul className="mx-auto mt-8 flex flex-wrap justify-center gap-2 text-xs">
              {[
                "Traditional Banana Leaf Service",
                "Buffet Catering",
                "Custom Wedding Menus",
                "Live Food Counters",
                "Professional Serving Team",
              ].map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-gold/40 px-3 py-1.5 text-primary-foreground/85"
                >
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/quote?package=Wedding%20Feast" className={`${btnGold} mt-9`}>
              Plan Your Wedding Feast
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrowTe="మా సేవలు"
          eyebrow="Services"
          title="What We Take Care Of"
          intro="Cooking only, full catering, or anything in between — tell us how much you'd like handled."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 60}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/services" className={btnOutline}>
            See All Services
          </Link>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionHeading
            eyebrowTe="విందు ప్యాకేజీలు"
            eyebrow="Packages"
            title="Catering Packages"
            intro="Every event is quoted after we understand the guest count, menu and service style — so you only pay for what your celebration needs."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 60}>
                <PackageCard pkg={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrowTe="ఎలా పని చేస్తుంది"
          eyebrow="Process"
          title="From Your Plan To The Perfect Feast"
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.index} delay={(i % 4) * 60} className="list-none">
              <ProcessStep {...s} />
            </Reveal>
          ))}
        </ol>
      </section>

      {/* GALLERY */}
      <section className="bg-cream-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionHeading
            eyebrowTe="మా జ్ఞాపకాలు"
            eyebrow="Gallery"
            title="Food, Feasts & Functions"
          />
          <div className="mt-10">
            <Gallery limit={6} />
          </div>
          <div className="mt-8 text-center">
            <Link to="/gallery" className={btnOutline}>
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {site.showTestimonials && (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionHeading
            eyebrowTe="విందు బాగుంటే... వేడుక గుర్తుండాలి"
            eyebrow="Reviews"
            title="What Our Guests Say"
            intro="Real customer reviews will appear here. The cards below are clearly marked placeholders."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={(i % 3) * 60}>
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* QUOTE CTA */}
      <section className="bg-primary">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:py-20">
          <Reveal>
            <h2 className="font-display text-[2rem] leading-tight text-primary-foreground sm:text-4xl">
              Planning A Celebration?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              Tell us about your event and we&apos;ll help you plan the right catering experience.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/quote" className={btnGold}>
                Request A Quote
              </Link>
              <a
                href={waLink(defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={btnWhatsApp}
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
