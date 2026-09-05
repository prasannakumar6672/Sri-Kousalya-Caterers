import { Link } from "react-router-dom";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { ServiceCard } from "@/components/cards/cards";
import { services } from "@/data/serviceData";
import { btnGold } from "@/components/common/buttons";
import buffet from "@/assets/gallery-buffet.jpg";

export function Services() {
  return (
    <>
      <PageHero
        te="మా సేవలు"
        title="Catering & Cooking Services"
        intro="Choose how much you'd like handled — from cooking at your home to complete catering with a serving team."
        image={buffet}
        alt="Catering buffet counter with brass serving dishes"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 60}>
              <ServiceCard service={s} detailed />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-primary">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-display text-3xl text-primary-foreground sm:text-4xl">
            Not sure which service fits?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-primary-foreground/80">
            Tell us the event and guest count — we&apos;ll suggest the right setup.
          </p>
          <Link to="/quote" className={`${btnGold} mt-7`}>
            Get Custom Quote
          </Link>
        </div>
      </section>
    </>
  );
}
