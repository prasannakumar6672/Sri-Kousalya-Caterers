import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Leaf, Flame, Users, ShieldCheck, MessageCircle, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import weddingFeast from "@/assets/wedding-feast.jpg";
import cookingTeam from "@/assets/cooking-team.jpg";
import { defaultWaMessage, site, waLink } from "@/data/siteData";
import { occasions } from "@/data/occasionData";
import { homeAboutFeatures } from "@/data/aboutData";
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
  const dishesScrollRef = useRef<HTMLDivElement>(null);
  const [activeDishIndex, setActiveDishIndex] = useState(0);

  const scrollToDish = (index: number) => {
    const container = dishesScrollRef.current;
    if (!container) return;
    const items = container.querySelectorAll<HTMLElement>("[data-dish-card]");
    const targetItem = items[index];
    if (targetItem) {
      const childCenter = targetItem.offsetLeft + targetItem.offsetWidth / 2;
      const targetScroll = childCenter - container.clientWidth / 2;
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
      setActiveDishIndex(index);
    }
  };

  const scrollDishes = (direction: "left" | "right") => {
    const newIndex =
      direction === "left"
        ? Math.max(0, activeDishIndex - 1)
        : Math.min(signatureDishes.length - 1, activeDishIndex + 1);
    scrollToDish(newIndex);
  };

  const [activePkg, setActivePkg] = useState(0);
  const pkgScrollRef = useRef<HTMLDivElement>(null);

  const scrollToPackage = (index: number) => {
    setActivePkg(index);
    const container = pkgScrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>("[data-pkg-card]");
    const target = cards[index];
    if (target) {
      const childCenter = target.offsetLeft + target.offsetWidth / 2;
      const targetScroll = childCenter - container.clientWidth / 2;
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }
  };

  const handlePkgScroll = () => {
    const container = pkgScrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>("[data-pkg-card]");
    if (!cards.length) return;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let minDiff = Infinity;
    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const diff = Math.abs(containerCenter - cardCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });
    if (closestIndex !== activePkg) {
      setActivePkg(closestIndex);
    }
  };

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialScrollRef = useRef<HTMLDivElement>(null);

  const scrollToTestimonial = (index: number) => {
    setActiveTestimonial(index);
    const container = testimonialScrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>("[data-testimonial-card]");
    const target = cards[index];
    if (target) {
      const childCenter = target.offsetLeft + target.offsetWidth / 2;
      const targetScroll = childCenter - container.clientWidth / 2;
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: "smooth",
      });
    }
  };

  const handleTestimonialScroll = () => {
    const container = testimonialScrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>("[data-testimonial-card]");
    if (!cards.length) return;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let minDiff = Infinity;
    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const diff = Math.abs(containerCenter - cardCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });
    if (closestIndex !== activeTestimonial) {
      setActiveTestimonial(closestIndex);
    }
  };

  useEffect(() => {
    const container = dishesScrollRef.current;
    if (!container) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!container) return;
          const containerCenter = container.scrollLeft + container.clientWidth / 2;
          const items = container.querySelectorAll<HTMLElement>("[data-dish-card]");
          let closestIndex = 0;
          let minDistance = Infinity;

          items.forEach((item, idx) => {
            const itemCenter = item.offsetLeft + item.offsetWidth / 2;
            const distance = Math.abs(containerCenter - itemCenter);
            if (distance < minDistance) {
              minDistance = distance;
              closestIndex = idx;
            }
          });

          setActiveDishIndex(closestIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

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
          title="Catering For Every Occasion"
          intro="From an intimate house pooja to a thousand-guest wedding, the food is prepared the same way — fresh, traditional and served with care."
        />
        <ul className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {occasions.map((o, i) => (
            <Reveal as="li" key={o.title} delay={(i % 4) * 60} className="h-full">
              <OccasionCard occasion={o} />
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ABOUT */}
      <section className="bg-cream-deep py-12 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold-dark dark:text-gold">
              <span className="te font-normal">రుచిలో సంప్రదాయం</span>
              <span className="size-1 rounded-full bg-gold/60" aria-hidden="true" />
              <span>Authentic Heritage</span>
            </div>

            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Our Food. <span className="text-gold italic font-serif">Our Tradition.</span>
            </h2>

            <div className="rule-gold my-3.5 max-w-[8rem] sm:my-4" />

            <p className="text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
              At Sri Kousalya, food is more than a menu. It is part of the celebration — the pappu
              poured over hot rice, the pachadi at the corner of the leaf, and the payasam that closes
              the meal.
            </p>

            {/* Feature Highlights Grid (2x2 on mobile, compact & eliminating excessive page length) */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3.5">
              {homeAboutFeatures.map((feat) => {
                const IconComponent =
                  feat.iconName === "Flame"
                    ? Flame
                    : feat.iconName === "Leaf"
                    ? Leaf
                    : feat.iconName === "ShieldCheck"
                    ? ShieldCheck
                    : Users;

                return (
                  <div
                    key={feat.id}
                    className="flex flex-col justify-between rounded-xl border border-border/80 bg-card/90 p-3 sm:p-4 transition-all duration-200 hover:border-gold/50 hover:shadow-soft"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold-dark dark:text-gold sm:size-8">
                        <IconComponent className="size-3.5 sm:size-4" aria-hidden="true" />
                      </span>
                      <h3 className="font-semibold text-xs leading-tight text-foreground sm:text-sm">
                        {feat.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground sm:text-xs">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-4 sm:mt-8">
              <Link to="/about" className={`${btnOutline} inline-flex items-center gap-2 text-xs sm:text-sm py-2 px-4 sm:py-2.5 sm:px-6`}>
                <span>Discover Our Story</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-lift border border-gold/20">
                <img
                  src={cookingTeam}
                  alt="Sri Kousalya cooks preparing rice in large brass vessels"
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="aspect-[16/10] sm:aspect-auto w-full object-cover"
                />
              </div>
              <BrassVessel className="absolute -bottom-4 -left-3 hidden w-16 text-gold/60 sm:block" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SIGNATURE MENU */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrowTe="రుచుల పండుగ"
          title="Signature Andhra Flavours"
          intro="A glimpse of the dishes an Andhra feast is built around. Sample items shown — your final menu is planned with you."
        />
        <div className="relative mt-8">
          {/* Scroll Navigation Buttons for Desktop & Tablet */}
          <div className="hidden sm:flex items-center justify-end gap-2 mb-3">
            <button
              type="button"
              onClick={() => scrollDishes("left")}
              aria-label="Previous dishes"
              className="grid size-10 place-items-center rounded-full border border-border bg-card text-foreground transition-all hover:border-gold hover:bg-muted active:scale-95 shadow-sm"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollDishes("right")}
              aria-label="Next dishes"
              className="grid size-10 place-items-center rounded-full border border-border bg-card text-foreground transition-all hover:border-gold hover:bg-muted active:scale-95 shadow-sm"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          {/* Horizontal Scroll Carousel */}
          <div
            ref={dishesScrollRef}
            className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-[calc(50%-130px)] py-8 sm:mx-0 sm:gap-8 sm:px-[calc(50%-140px)] md:px-[calc(50%-150px)] scroll-smooth"
          >
            {signatureDishes.map((dish, i) => {
              const isCenter = i === activeDishIndex;
              return (
                <div
                  key={dish.name}
                  data-dish-card
                  onClick={() => scrollToDish(i)}
                  className={`w-[260px] sm:w-[280px] md:w-[300px] shrink-0 snap-center cursor-pointer transition-all duration-500 ease-out ${
                    isCenter
                      ? "scale-105 sm:scale-110 z-20"
                      : "scale-90 sm:scale-95 opacity-75 hover:opacity-100 z-10"
                  }`}
                >
                  <Reveal delay={(i % 3) * 60}>
                    <FoodCard dish={dish} circular isCenter={isCenter} />
                  </Reveal>
                </div>
              );
            })}
          </div>

          {/* Indicator Dots */}
          <div className="mt-2 flex items-center justify-center gap-2">
            {signatureDishes.map((dish, idx) => (
              <button
                key={dish.name}
                type="button"
                onClick={() => scrollToDish(idx)}
                aria-label={`View ${dish.name}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeDishIndex
                    ? "w-7 bg-gold"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>

          {/* Mobile Swipe Hint */}
          <div className="mt-3 flex items-center justify-center gap-1.5 sm:hidden text-xs text-muted-foreground/60">
            <span>← Swipe or tap to explore flavours →</span>
          </div>
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
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-24">
        <SectionHeading
          eyebrowTe="మా సేవలు"
          title="What We Take Care Of"
          intro="Cooking only, full catering, or anything in between — tell us how much you'd like handled."
        />
        <div className="mt-7 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {services.slice(0, 4).map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 60} className="h-full">
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/services" className={`${btnOutline} inline-flex items-center gap-2 text-xs sm:text-sm`}>
            <span>See All Services</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-cream-deep py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrowTe="విందు ప్యాకేజీలు"
            title="Catering Packages"
            intro="Every event is quoted after we understand the guest count, menu and service style — so you only pay for what your celebration needs."
          />

          {/* Mobile Interactive Tab Bar (< sm screens) */}
          <div className="mt-7 flex sm:hidden items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4">
            {packages.map((p, idx) => (
              <button
                key={p.name}
                type="button"
                onClick={() => scrollToPackage(idx)}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  activePkg === idx
                    ? "bg-forest-deep text-gold shadow-sm font-bold border border-gold/60 scale-[1.02]"
                    : "bg-card border border-border text-muted-foreground hover:border-gold/40"
                }`}
              >
                {p.featured ? "★ " : ""}{p.name}
              </button>
            ))}
          </div>

          {/* Mobile Swipeable Snap Carousel (< sm screens) */}
          <div
            ref={pkgScrollRef}
            onScroll={handlePkgScroll}
            className="mt-4 flex sm:hidden overflow-x-auto snap-x snap-mandatory gap-3.5 -mx-4 px-4 pb-2 pt-1 no-scrollbar scroll-smooth"
          >
            {packages.map((p) => (
              <div key={p.name} data-pkg-card className="w-[85vw] max-w-[340px] shrink-0 snap-center">
                <PackageCard pkg={p} />
              </div>
            ))}
          </div>

          {/* Mobile Pagination Dots (< sm screens) */}
          <div className="flex sm:hidden items-center justify-center gap-2 mt-4">
            {packages.map((p, idx) => (
              <button
                key={p.name}
                type="button"
                onClick={() => scrollToPackage(idx)}
                aria-label={`Select ${p.name} package`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activePkg === idx ? "w-6 bg-gold" : "w-1.5 bg-border hover:bg-gold/40"
                }`}
              />
            ))}
          </div>

          {/* Desktop & Tablet Grid (>= sm screens) */}
          <div className="mt-10 hidden sm:grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 60} className="h-full">
                <PackageCard pkg={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-24">
        <SectionHeading
          eyebrowTe="ఎలా పని చేస్తుంది"
          title="From Your Plan To The Perfect Feast"
          intro="Four simple steps from your first enquiry to a memorable meal served with care."
        />
        <ol className="mt-8 sm:mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.index} delay={(i % 4) * 60} className="list-none h-full">
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
        <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-24">
          <SectionHeading
            eyebrowTe="విందు బాగుంటే... వేడుక గుర్తుండాలి"
            title="What Our Guests Say"
            intro="Memorable celebrations remembered for traditional taste, flawless service, and satisfied guests across Visakhapatnam."
          />

          {/* Mobile Snap Carousel (< sm screens) */}
          <div
            ref={testimonialScrollRef}
            onScroll={handleTestimonialScroll}
            className="mt-6 flex sm:hidden overflow-x-auto snap-x snap-mandatory gap-3.5 -mx-4 px-4 pb-2 pt-1 no-scrollbar scroll-smooth"
          >
            {testimonials.map((t, i) => (
              <div key={i} data-testimonial-card className="w-[86vw] max-w-[340px] shrink-0 snap-center">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>

          {/* Mobile Pagination Dots (< sm screens) */}
          <div className="flex sm:hidden items-center justify-center gap-2 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToTestimonial(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeTestimonial === idx ? "w-6 bg-gold" : "w-1.5 bg-border hover:bg-gold/40"
                }`}
              />
            ))}
          </div>

          {/* Desktop & Tablet Grid (>= sm screens) */}
          <div className="mt-10 hidden sm:grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={(i % 3) * 60} className="h-full">
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
