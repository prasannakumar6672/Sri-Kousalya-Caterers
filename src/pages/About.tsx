import { Link } from "react-router-dom";
import cookingTeam from "@/assets/cooking-team.jpg";
import leafService from "@/assets/gallery-leaf-service.jpg";
import heroFeast from "@/assets/hero-feast.jpg";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { MangoLeafDivider } from "@/components/common/Motif";
import { btnPrimary } from "@/components/common/buttons";
import { site } from "@/data/siteData";

const pillars = [
  {
    title: "Who We Are",
    body: "Sri Kousalya Catering & Cooking Services is a family-run catering business based in Dabagardens, Visakhapatnam, cooking traditional Andhra food for weddings, poojas and family celebrations.",
  },
  {
    title: "Our Approach",
    body: "We start with your guest list and your family's taste, then build a menu around it — never a fixed package forced onto an event.",
  },
  {
    title: "Food Philosophy",
    body: "Andhra food is about balance: the heat of a pachadi against the calm of pappu, the sweet served before the meal begins. We cook to keep that balance.",
  },
  {
    title: "Preparation",
    body: "Ingredients are bought fresh for each function and cooked in traditional proportions, on site where the venue allows.",
  },
  {
    title: "Hygiene",
    body: "Clean handling through preparation, transport and serving, with covered vessels and trained staff.",
  },
  {
    title: "Service",
    body: "Our serving team keeps the rounds moving so every guest is served hot food at the right time.",
  },
];

export function About() {
  return (
    <>
      <PageHero
        te="మా కథ"
        title="Our Food. Our Tradition."
        intro={`Cooking for families across ${site.city} — one celebration at a time.`}
        image={cookingTeam}
        alt="Catering cooks preparing food in large brass vessels"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">
              Food is part of the celebration
            </h2>
            <div className="rule-gold my-5 max-w-[10rem]" />
            <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
              At Sri Kousalya, food is more than a menu. When a family plans a wedding or a
              gruhapravesam, the meal is what guests carry home in their memory. That is the part we
              are trusted with, and we treat it that way.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
              From a small pooja at home to a wedding with a thousand guests, the same kitchen
              discipline applies — fresh ingredients, traditional preparation and food served hot.
            </p>
          </Reveal>
          <Reveal>
            <img
              src={leafService}
              alt="Curry being served onto a banana leaf at a traditional function"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
        </div>

        <MangoLeafDivider className="my-16" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 60}>
              <article className="h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-xl text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-forest-deep">
        <img
          src={heroFeast}
          alt=""
          loading="lazy"
          width={1600}
          height={1104}
          className="absolute inset-0 -z-10 size-full object-cover opacity-25"
        />
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <p className="te text-lg leading-relaxed text-gold-soft sm:text-2xl">
            &ldquo;మీ వేడుక... మా బాధ్యత&rdquo;
          </p>
          <p className="mt-4 text-sm text-primary-foreground/75">
            Your celebration, our responsibility.
          </p>
          <Link to="/quote" className={`${btnPrimary} mt-8 bg-gold text-accent-foreground`}>
            Request A Quote
          </Link>
        </div>
      </section>
    </>
  );
}
