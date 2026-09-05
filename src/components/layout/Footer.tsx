import { Link } from "react-router-dom";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { defaultWaMessage, nav, site, waLink } from "@/data/siteData";
import { services } from "@/data/serviceData";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <Logo tone="light" />
            <p className="mt-3 max-w-sm text-sm text-primary-foreground/75 leading-relaxed">
              Traditional taste for every celebration in {site.city} and nearby areas.
            </p>
            <p className="te mt-2 text-sm text-gold-soft font-medium">
              సంతోషమైన వేడుకలకు... రుచికరమైన జ్ఞాపకాలు.
            </p>
          </div>

          {/* Quick Links & Services side-by-side in 2 horizontal columns on mobile */}
          <div className="grid grid-cols-2 gap-5 sm:col-span-2 lg:col-span-2">
            <nav aria-label="Quick links" className="min-w-0">
              <h3 className="eyebrow text-gold text-xs tracking-wider">Quick Links</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {nav.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-primary-foreground/80 hover:text-gold-soft transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/quote"
                    className="text-primary-foreground/80 hover:text-gold-soft transition-colors"
                  >
                    Request a Quote
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="min-w-0">
              <h3 className="eyebrow text-gold text-xs tracking-wider">Services</h3>
              <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
                {services.slice(0, 6).map((s) => (
                  <li key={s.slug}>
                    <Link to="/services" className="hover:text-gold-soft transition-colors">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <h3 className="eyebrow text-gold text-xs tracking-wider">Contact</h3>
            <address className="mt-3 space-y-3 text-sm not-italic text-primary-foreground/80">
              <p className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span className="leading-snug">{site.address.lines.join(", ")}</span>
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {site.phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-gold hover:text-brand-charcoal transition-all"
                  >
                    <Phone className="size-3.5 text-gold" aria-hidden="true" />
                    <span>{p.display}</span>
                  </a>
                ))}
                <a
                  href={waLink(defaultWaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 px-3 py-1.5 text-xs font-medium text-white hover:bg-[#25D366] hover:text-white transition-all"
                >
                  <MessageCircle className="size-3.5 text-[#25D366]" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="rule-gold mt-10" />
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Sri Kousalya Catering &amp; Cooking Services · {site.area},{" "}
            {site.city}
          </p>
          <ul className="flex items-center gap-4">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="hover:text-gold-soft transition-colors">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
