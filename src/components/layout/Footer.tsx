import { Link } from "react-router-dom";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { defaultWaMessage, nav, site, waLink } from "@/data/siteData";
import { services } from "@/data/serviceData";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:py-14 pb-24 sm:pb-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand Info */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <Logo tone="light" />
            <p className="mt-2.5 max-w-sm text-xs sm:text-sm text-primary-foreground/75 leading-relaxed">
              Traditional Andhra catering &amp; cooking for celebrations in {site.city} and nearby areas.
            </p>
            <p className="te mt-1 text-xs sm:text-sm text-gold-soft font-medium">
              సంతోషమైన వేడుకలకు... రుచికరమైన జ్ఞాపకాలు.
            </p>
          </div>

          {/* Quick Links & Services in 2 tight columns on mobile */}
          <div className="grid grid-cols-2 gap-4 sm:col-span-2 lg:col-span-2 sm:gap-6">
            <nav aria-label="Quick links" className="min-w-0">
              <h3 className="eyebrow text-gold text-[11px] sm:text-xs tracking-wider">Quick Links</h3>
              <ul className="mt-2 space-y-1 sm:space-y-1.5 text-xs sm:text-sm">
                {nav.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-primary-foreground/80 hover:text-gold-soft transition-colors block py-0.5"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="min-w-0">
              <h3 className="eyebrow text-gold text-[11px] sm:text-xs tracking-wider">Services</h3>
              <ul className="mt-2 space-y-1 sm:space-y-1.5 text-xs sm:text-sm text-primary-foreground/80">
                {services.slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link to="/services" className="hover:text-gold-soft transition-colors block py-0.5">
                      {s.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/quote"
                    className="text-gold-soft font-medium hover:underline block py-0.5"
                  >
                    Request Quote →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <h3 className="eyebrow text-gold text-[11px] sm:text-xs tracking-wider">Contact</h3>
            <address className="mt-2 space-y-2 text-xs sm:text-sm not-italic text-primary-foreground/80">
              <p className="flex items-start gap-1.5 leading-snug">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-gold" aria-hidden="true" />
                <span>Opp. Saraswathi Park, Dabagardens, Visakhapatnam – 530020</span>
              </p>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {site.phones.map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 text-[11px] sm:text-xs font-medium text-white hover:bg-gold hover:text-brand-charcoal transition-all"
                  >
                    <Phone className="size-3 text-gold" aria-hidden="true" />
                    <span>{p.display}</span>
                  </a>
                ))}
                <a
                  href={waLink(defaultWaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md bg-[#25D366]/20 border border-[#25D366]/30 px-2 py-1 text-[11px] sm:text-xs font-medium text-white hover:bg-[#25D366] hover:text-white transition-all"
                >
                  <MessageCircle className="size-3 text-[#25D366]" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom divider and compact legal bar */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-primary-foreground/60 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Sri Kousalya Catering · {site.area}, {site.city}
          </p>
          <ul className="flex items-center gap-3">
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
