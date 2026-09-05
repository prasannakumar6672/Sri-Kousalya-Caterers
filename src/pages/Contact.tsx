import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

export function Contact() {
  return (
    <>
      <PageHero
        te="మమ్మల్ని సంప్రదించండి"
        title="Contact Us"
        intro="Call, message on WhatsApp, or visit our office in Dabagardens."
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <ContactSection />
      </section>
    </>
  );
}
