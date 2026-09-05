import { useEffect, useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { galleryFilters, galleryImages, type GalleryCategory } from "@/data/galleryData";

export function Gallery({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [desktopActiveIndex, setDesktopActiveIndex] = useState<number>(0);
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const items = galleryImages.filter((g) => filter === "all" || g.category === filter);
  const shown = limit ? items.slice(0, limit) : items;

  // Keep desktop active index in bounds if filter reduces item count
  useEffect(() => {
    setDesktopActiveIndex(0);
    setMobileActiveIndex(0);
  }, [filter]);

  // Auto-play for desktop expanding showcase when limit is set
  useEffect(() => {
    if (!limit || isPaused || lightboxIndex !== null || shown.length <= 1) return;

    const timer = setInterval(() => {
      setDesktopActiveIndex((prev) => (prev + 1) % shown.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [limit, isPaused, lightboxIndex, shown.length]);

  // Mobile scroll tracking for center indicator
  useEffect(() => {
    if (!limit) return;
    const container = mobileScrollRef.current;
    if (!container) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!container) return;
          const containerCenter = container.scrollLeft + container.clientWidth / 2;
          const cards = container.querySelectorAll<HTMLElement>("[data-gallery-mobile-card]");
          let closestIndex = 0;
          let minDistance = Infinity;

          cards.forEach((card, idx) => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const dist = Math.abs(containerCenter - cardCenter);
            if (dist < minDistance) {
              minDistance = dist;
              closestIndex = idx;
            }
          });

          setMobileActiveIndex(closestIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [limit, shown.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => ((i ?? 0) + 1) % shown.length);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => ((i ?? 0) - 1 + shown.length) % shown.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, shown.length]);

  const currentLightboxImage = lightboxIndex !== null ? shown[lightboxIndex] : null;

  const scrollToMobileIndex = (index: number) => {
    const container = mobileScrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>("[data-gallery-mobile-card]");
    const target = cards[index];
    if (target) {
      const cardCenter = target.offsetLeft + target.offsetWidth / 2;
      container.scrollTo({
        left: cardCenter - container.clientWidth / 2,
        behavior: "smooth",
      });
      setMobileActiveIndex(index);
    }
  };

  return (
    <div className="w-full">
      {/* Category Filter Pills (Shown for both or interactive showcase) */}
      <div className="no-scrollbar -mx-4 mb-6 flex items-center gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {galleryFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => {
              setFilter(f.id);
              setLightboxIndex(null);
            }}
            aria-pressed={filter === f.id}
            className={`min-h-9 shrink-0 rounded-full border px-4 py-1.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
              filter === f.id
                ? "border-gold bg-primary text-primary-foreground shadow-md scale-105"
                : "border-border/80 bg-card/80 text-muted-foreground hover:border-gold/60 hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* SHOWCASE MODE (Home Page) */}
      {limit ? (
        <div
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Desktop Showcase: Interactive Expanding Accordion */}
          <div className="hidden lg:flex h-[470px] w-full gap-3">
            {shown.map((img, i) => {
              const isActive = i === desktopActiveIndex;
              return (
                <div
                  key={img.src + i}
                  onClick={() => setDesktopActiveIndex(i)}
                  className={`group relative h-full overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isActive
                      ? "flex-[3.8] ring-2 ring-gold/80 shadow-2xl"
                      : "flex-1 opacity-75 hover:opacity-100 ring-1 ring-border/40"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={img.width}
                    height={img.height}
                    className={`size-full object-cover transition-transform duration-1000 ease-out ${
                      isActive ? "scale-105" : "scale-100 group-hover:scale-105"
                    }`}
                  />

                  {/* Inactive Panel Overlay & Vertical Title */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 transition-opacity group-hover:bg-black/10 flex flex-col justify-end p-4">
                      <span className="[writing-mode:vertical-rl] rotate-180 font-display text-sm tracking-widest text-white/90 uppercase font-medium">
                        {img.title}
                      </span>
                    </div>
                  )}

                  {/* Active Panel Rich Gradient & Details */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-6 sm:p-8 animate-fadeIn">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold-light text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                            <Sparkles className="size-3" />
                            {img.category}
                          </span>
                          <p className="te text-sm font-medium text-gold-soft mt-2">{img.te}</p>
                          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                            {img.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-white/80 line-clamp-2 max-w-lg mt-1 font-light">
                            {img.alt}
                          </p>
                        </div>

                        {/* Lightbox Trigger Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIndex(i);
                          }}
                          aria-label={`View full image: ${img.title}`}
                          className="size-11 shrink-0 rounded-full bg-white/20 hover:bg-gold text-white hover:text-brand-charcoal backdrop-blur-md border border-white/30 hover:border-gold grid place-items-center transition-all duration-300 shadow-lg hover:scale-110 active:scale-95"
                        >
                          <Maximize2 className="size-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile & Tablet Showcase: Smooth Snap Horizontal Carousel */}
          <div className="lg:hidden">
            <div
              ref={mobileScrollRef}
              className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 py-2 scroll-smooth"
            >
              {shown.map((img, i) => {
                const isActive = i === mobileActiveIndex;
                return (
                  <div
                    key={img.src + i}
                    data-gallery-mobile-card
                    onClick={() => setLightboxIndex(i)}
                    className={`relative h-[380px] w-[82vw] max-w-[340px] shrink-0 snap-center overflow-hidden rounded-2xl cursor-pointer shadow-md transition-all duration-500 ${
                      isActive ? "ring-2 ring-gold/80 scale-[1.01]" : "opacity-90 ring-1 ring-border/50"
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      width={img.width}
                      height={img.height}
                      className="size-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-5">
                      <span className="self-start text-[0.65rem] font-bold uppercase tracking-wider text-gold-light bg-gold/25 px-2.5 py-0.5 rounded-full border border-gold/40 mb-1 backdrop-blur-sm">
                        {img.category}
                      </span>
                      <p className="te text-xs text-gold font-medium">{img.te}</p>
                      <h3 className="font-display text-xl font-bold text-white leading-snug">{img.title}</h3>
                      <p className="text-xs text-white/75 line-clamp-2 mt-1 font-light">{img.alt}</p>
                      <div className="mt-3 flex items-center justify-between text-xs text-gold-soft">
                        <span className="inline-flex items-center gap-1">
                          <Maximize2 className="size-3.5" /> Tap to view photo
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Showcase Navigation & Indicator Controls */}
          <div className="mt-5 flex items-center justify-between px-2">
            {/* Left/Right Desktop Controls */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setDesktopActiveIndex((prev) => (prev - 1 + shown.length) % shown.length)
                }
                aria-label="Previous image"
                className="grid size-9 place-items-center rounded-full border border-border bg-card text-foreground transition-all hover:border-gold hover:bg-muted active:scale-95 shadow-sm"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => setDesktopActiveIndex((prev) => (prev + 1) % shown.length)}
                aria-label="Next image"
                className="grid size-9 place-items-center rounded-full border border-border bg-card text-foreground transition-all hover:border-gold hover:bg-muted active:scale-95 shadow-sm"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>

            {/* Pagination Indicators */}
            <div className="mx-auto flex items-center justify-center gap-2">
              {shown.map((img, idx) => {
                const isActive =
                  typeof window !== "undefined" && window.innerWidth >= 1024
                    ? idx === desktopActiveIndex
                    : idx === mobileActiveIndex;
                return (
                  <button
                    key={img.src + idx}
                    type="button"
                    onClick={() => {
                      setDesktopActiveIndex(idx);
                      scrollToMobileIndex(idx);
                    }}
                    aria-label={`View ${img.title}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-7 bg-gold shadow-sm"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                    }`}
                  />
                );
              })}
            </div>

            {/* Hint */}
            <span className="hidden lg:inline-block text-xs text-muted-foreground/70 font-light">
              Hover to expand • Click to enlarge
            </span>
          </div>
        </div>
      ) : (
        /* FULL GALLERY PAGE MODE (/gallery) */
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {shown.map((img, i) => (
            <li key={img.src + i}>
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-soft border border-border bg-card text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label={`Open image: ${img.title}`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={img.width}
                    height={img.height}
                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/90 text-brand-charcoal text-xs font-semibold shadow">
                      <Maximize2 className="size-3.5" /> View Photo
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[0.65rem] font-bold uppercase tracking-wider text-gold bg-gold/15 px-2 py-0.5 rounded-full">
                      {img.category}
                    </span>
                    <span className="te text-xs text-gold-dark font-medium">{img.te}</span>
                  </div>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-foreground leading-snug">
                    {img.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{img.alt}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {currentLightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentLightboxImage.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close image"
            className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full bg-white/15 text-white hover:bg-gold hover:text-brand-charcoal transition-colors duration-200"
          >
            <X className="size-5" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((idx) => ((idx ?? 0) - 1 + shown.length) % shown.length);
            }}
            className="absolute left-3 sm:left-6 z-10 grid size-11 place-items-center rounded-full bg-white/15 text-white hover:bg-gold hover:text-brand-charcoal transition-colors duration-200"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((idx) => ((idx ?? 0) + 1) % shown.length);
            }}
            className="absolute right-3 sm:right-6 z-10 grid size-11 place-items-center rounded-full bg-white/15 text-white hover:bg-gold hover:text-brand-charcoal transition-colors duration-200"
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Content Figure */}
          <figure
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-5xl flex flex-col items-center justify-center"
          >
            <img
              src={currentLightboxImage.src}
              alt={currentLightboxImage.alt}
              width={currentLightboxImage.width}
              height={currentLightboxImage.height}
              className="max-h-[72vh] w-auto rounded-2xl object-contain shadow-2xl ring-1 ring-white/20"
            />
            <figcaption className="mt-4 text-center text-white max-w-2xl px-4">
              <span className="te text-sm text-gold font-medium block">
                {currentLightboxImage.te}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold mt-0.5">
                {currentLightboxImage.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-white/75">{currentLightboxImage.alt}</p>
              <span className="mt-2 inline-block text-[0.7rem] uppercase tracking-widest text-gold-light/80">
                Photo {(lightboxIndex ?? 0) + 1} of {shown.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
