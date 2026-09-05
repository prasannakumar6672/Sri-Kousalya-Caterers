import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import { btnPrimary } from "@/components/common/buttons";
import { LanguageToggle } from "@/lib/language";
import { nav, primaryPhone } from "@/data/siteData";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-background/95 backdrop-blur"
          : "border-transparent bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4">
        <Logo className="min-w-0" />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative shrink-0 py-1 text-sm font-medium transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-gold after:transition-transform hover:text-primary ${
                  isActive
                    ? "text-primary after:scale-x-100"
                    : "text-muted-foreground after:scale-x-0"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <LanguageToggle />
          <Link to="/quote" className={btnPrimary}>
            Get a Quote
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <LanguageToggle />
          <a
            href={`tel:${primaryPhone.tel}`}
            aria-label={`Call ${primaryPhone.display}`}
            className="grid size-11 place-items-center rounded-full border border-primary/20 text-primary"
          >
            <Phone className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="grid size-11 place-items-center rounded-full bg-primary text-primary-foreground"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-11 place-items-center rounded-full border border-border text-primary"
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="rule-gold mx-4" />
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6" aria-label="Mobile">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-border/60 py-4 font-display text-2xl ${
                    isActive ? "text-primary" : "text-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className={`${btnPrimary} mt-6 w-full`}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
