import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { FoodCard } from "@/components/cards/cards";
import { Reveal } from "@/components/common/Reveal";
import { dishes, menuCategories } from "@/data/menuData";
import { btnGold, btnWhatsApp } from "@/components/common/buttons";
import { waLink } from "@/data/siteData";

export function Menu() {
  const [activeCat, setActiveCat] = useState<string>(menuCategories[0]!.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible[0]) setActiveCat(visible[0].target.id);
      },
      { rootMargin: "-120px 0px -70% 0px" },
    );
    menuCategories.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHero
        te="రుచుల పండుగ"
        title="Our Catering Menu"
        intro="A sample of the Andhra dishes we prepare. Your final menu is planned with you — dishes below are examples, not a fixed list."
      />

      <nav
        aria-label="Menu categories"
        className="sticky top-[68px] z-30 border-b border-border bg-background/95 backdrop-blur lg:top-[76px]"
      >
        <ul className="no-scrollbar mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {menuCategories.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                aria-current={activeCat === c.id ? "true" : undefined}
                className={`inline-flex min-h-9 shrink-0 items-center whitespace-nowrap rounded-full border px-3.5 text-sm transition-colors ${
                  activeCat === c.id
                    ? "border-gold bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground"
                }`}
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        {menuCategories.map((cat) => {
          const items = dishes.filter((d) => d.category === cat.id);
          if (!items.length) return null;
          return (
            <section key={cat.id} id={cat.id} className="scroll-mt-36 pb-14">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h2 className="font-display text-2xl text-foreground sm:text-3xl">{cat.label}</h2>
                <span className="te text-sm text-gold">{cat.te}</span>
              </div>
              <div className="rule-gold my-5" />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((d, i) => (
                  <Reveal key={d.name} delay={(i % 3) * 50}>
                    <FoodCard dish={d} />
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}

        <div className="rounded-3xl bg-cream-deep p-8 text-center">
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">
            Want the complete menu?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Send us your event details and we&apos;ll share the full menu with options for your
            guest count.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/quote" className={btnGold}>
              Request Full Menu
            </Link>
            <a
              href={waLink(
                "Hello Sri Kousalya, please share your complete catering menu for my event.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={btnWhatsApp}
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
