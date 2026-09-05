import { Link } from "react-router-dom";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { defaultWaMessage, nav, site, waLink } from "@/data/siteData";
import { services } from "@/data/serviceData";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="min-w-0">
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/75">
              Traditional taste for every celebration, in {site.city} and nearby areas.
            </p>
            <p className="te mt-4 text-sm text-gold-soft">
              సంతోషమైన వేడుకలకు... రుచికరమైన జ్ఞాపకాలు.
            </p>
          </div>

          <nav aria-label="Quick links" className="min-w-0">
            <h3 className="eyebrow text-gold">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-primary-foreground/80 hover:text-gold-soft">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/quote" className="text-primary-foreground/80 hover:text-gold-soft">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </nav>

          <div className="min-w-0">
            <h3 className="eyebrow text-gold">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to="/services" className="hover:text-gold-soft">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="eyebrow text-gold">Contact</h3>
            <address className="mt-4 space-y-3 text-sm not-italic text-primary-foreground/80">
              <p className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{site.address.lines.join(", ")}</span>
              </p>
              {site.phones.map((p) => (
                <p key={p.tel} className="flex items-center gap-2">
                  <Phone className="size-4 shrink-0 text-gold" aria-hidden="true" />
                  <a href={`tel:${p.tel}`} className="hover:text-gold-soft">
                    {p.display}
                  </a>
                </p>
              ))}
              <p className="flex items-center gap-2">
                <MessageCircle className="size-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={waLink(defaultWaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-soft"
                >
                  WhatsApp us
                </a>
              </p>
            </address>
            <ul className="mt-4 flex gap-4 text-xs text-primary-foreground/60">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="hover:text-gold-soft">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule-gold mt-12" />
        <p className="mt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Sri Kousalya Catering & Cooking Services · {site.area},{" "}
          {site.city}
        </p>
      </div>
    </footer>
  );
}
