import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { PackageCard } from "@/components/cards/cards";
import { Reveal } from "@/components/common/Reveal";
import { packages } from "@/data/packageData";
import { eventTypes, guestRanges, serviceTypes } from "@/data/siteData";
import { btnGold } from "@/components/common/buttons";

const select =
  "min-h-11 w-full rounded-xl border border-input bg-card px-3.5 text-[16px] text-foreground focus-visible:border-gold";

export function Packages() {
  const navigate = useNavigate();
  const [eventType, setEventType] = useState("");
  const [guests, setGuests] = useState("");
  const [serviceType, setServiceType] = useState("");

  const handleCustomQuote = () => {
    const params = new URLSearchParams();
    if (eventType) params.set("eventType", eventType);
    if (guests) params.set("guests", guests);
    if (serviceType) params.set("serviceType", serviceType);
    const qs = params.toString();
    navigate(qs ? `/quote?${qs}` : "/quote");
  };

  return (
    <>
      <PageHero
        te="విందు ప్యాకేజీలు"
        title="Catering Packages"
        intro="We don't publish fixed prices — the cost depends on your menu, guest count and service style. Pick what fits and we'll quote it."
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={(i % 4) * 60}>
              <PackageCard pkg={p} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-gold/40 bg-cream-deep p-6 sm:p-8">
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">Build your quote</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose three details and we&apos;ll carry them into the enquiry form.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div>
              <label
                htmlFor="pkg-event"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Event Type
              </label>
              <select
                id="pkg-event"
                className={select}
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
              >
                <option value="">Select</option>
                {eventTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="pkg-guests"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Number of Guests
              </label>
              <select
                id="pkg-guests"
                className={select}
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="">Select</option>
                {guestRanges.map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="pkg-service"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Service Type
              </label>
              <select
                id="pkg-service"
                className={select}
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
              >
                <option value="">Select</option>
                {serviceTypes.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="button"
            onClick={handleCustomQuote}
            className={`${btnGold} mt-6 w-full sm:w-auto`}
          >
            Request Custom Quote
          </button>
        </div>
      </section>
    </>
  );
}
