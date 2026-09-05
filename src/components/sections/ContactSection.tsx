import { Phone, MessageCircle, MapPin, Navigation } from "lucide-react";
import { defaultWaMessage, site, waLink } from "@/data/siteData";
import { btnPrimary, btnWhatsApp, btnOutline } from "@/components/common/buttons";

export function ContactSection() {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div>
        <h2 className="font-display text-3xl text-foreground sm:text-4xl">
          Sri Kousalya
          <span className="mt-1 block text-base font-normal text-muted-foreground">
            Catering &amp; Cooking Services
          </span>
        </h2>
        <div className="rule-gold my-6 max-w-xs" />

        <address className="space-y-5 not-italic">
          <div className="flex gap-3">
            <MapPin className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {site.address.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
          </div>
          <div className="flex gap-3">
            <Phone className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
            <p className="text-sm text-muted-foreground">
              {site.phones.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="block font-medium text-foreground hover:text-primary"
                >
                  {p.display}
                </a>
              ))}
            </p>
          </div>
        </address>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={`tel:${site.phones[0].tel}`} className={btnPrimary}>
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </a>
          <a
            href={waLink(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={btnWhatsApp}
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href={site.address.maps}
            target="_blank"
            rel="noopener noreferrer"
            className={btnOutline}
          >
            <Navigation className="size-4" aria-hidden="true" />
            Get Directions
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
        <iframe
          title="Sri Kousalya location in Dabagardens, Visakhapatnam"
          src={site.address.embed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[320px] w-full lg:h-full lg:min-h-[420px]"
        />
      </div>
    </div>
  );
}
