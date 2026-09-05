import { useSearchParams } from "react-router-dom";
import { PageHero } from "@/components/sections/PageHero";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { primaryPhone, defaultWaMessage, waLink } from "@/data/siteData";

export function Quote() {
  const [searchParams] = useSearchParams();
  const pkg = searchParams.get("package") || undefined;
  const eventType = searchParams.get("eventType") || undefined;
  const guests = searchParams.get("guests") || undefined;
  const serviceType = searchParams.get("serviceType") || undefined;

  return (
    <>
      <PageHero
        te="మీ వేడుక... మా బాధ్యత"
        title="Request A Catering Quote"
        intro="Share a few details about your event. We'll plan the menu and send you a quote — usually on WhatsApp."
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        {pkg && (
          <p className="mb-6 rounded-xl border border-gold/40 bg-cream-deep px-4 py-3 text-sm text-muted-foreground">
            Enquiring about the <span className="font-semibold text-foreground">{pkg}</span>{" "}
            package.
          </p>
        )}
        <QuoteForm
          initial={{
            eventType,
            guests,
            serviceType,
          }}
        />

        <div className="rule-gold my-10" />

        <p className="text-center text-sm text-muted-foreground">
          Prefer to talk?{" "}
          <a href={`tel:${primaryPhone.tel}`} className="font-semibold text-primary">
            Call {primaryPhone.display}
          </a>{" "}
          or{" "}
          <a
            href={waLink(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary"
          >
            message us on WhatsApp
          </a>
          .
        </p>
      </section>
    </>
  );
}
