import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { btnPrimary } from "@/components/common/buttons";
import { nav, primaryPhone } from "@/data/siteData";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isTransparent = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 min-w-[1280px] transition-all duration-300 ${
          isTransparent
            ? "border-b border-transparent bg-transparent shadow-none"
            : "border-b border-border/70 bg-[#fdfbf7]/95 shadow-sm backdrop-blur"
        }`}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
          <Logo tone={isTransparent ? "light" : "dark"} className="min-w-0" />

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative shrink-0 py-1 text-sm font-medium transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:transition-transform ${
                    isTransparent
                      ? isActive
                        ? "text-brand-gold after:scale-x-100 after:bg-brand-gold font-semibold"
                        : "text-white/90 after:scale-x-0 after:bg-brand-gold hover:text-brand-gold"
                      : isActive
                      ? "text-primary after:scale-x-100 after:bg-gold font-semibold"
                      : "text-muted-foreground after:scale-x-0 after:bg-gold hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/quote"
              className={
                isTransparent
                  ? "inline-flex min-h-11 items-center justify-center rounded-full bg-brand-gold px-6 text-sm font-semibold text-brand-charcoal shadow-md transition-all hover:brightness-110"
                  : btnPrimary
              }
            >
              Get a Quote
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:hidden">
            <a
              href={`tel:${primaryPhone.tel}`}
              aria-label={`Call ${primaryPhone.display}`}
              className={`grid size-10 place-items-center rounded-full border transition-colors sm:size-11 ${
                isTransparent
                  ? "border-white/30 bg-black/25 text-white hover:bg-white/15 backdrop-blur-sm"
                  : "border-primary/20 text-primary hover:bg-muted"
              }`}
            >
              <Phone className="size-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className={`grid size-10 place-items-center rounded-full transition-colors sm:size-11 ${
                isTransparent
                  ? "border border-white/30 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#fdfbf7] lg:hidden">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <Logo onClick={() => setOpen(false)} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-10 place-items-center rounded-full border border-border text-primary transition-colors hover:bg-muted sm:size-11"
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="rule-gold mx-4 sm:mx-6" />
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6 sm:px-6" aria-label="Mobile">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-border/50 py-3.5 font-display text-xl transition-colors ${
                    isActive ? "font-bold text-primary" : "text-foreground hover:text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-6 flex flex-col gap-3 pb-8">
              <Link
                to="/quote"
                onClick={() => setOpen(false)}
                className={`${btnPrimary} w-full text-center`}
              >
                Get a Quote
              </Link>
              <a
                href={`tel:${primaryPhone.tel}`}
                className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary/30 text-sm font-semibold text-primary transition-colors hover:bg-muted"
              >
                <Phone className="size-4" />
                Call {primaryPhone.display}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
