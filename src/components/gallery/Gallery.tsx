import { useEffect, useState, useRef, useCallback } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Pause,
  Play,
} from "lucide-react";
import {
  galleryFilters,
  galleryImages,
  type GalleryCategory,
} from "@/data/galleryData";

const SLIDE_INTERVAL = 3800; // 3.8s per slide

export function Gallery({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(1000);

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  const items = galleryImages.filter((g) => filter === "all" || g.category === filter);
  const shown = limit ? items.slice(0, limit) : items;

  // Measure container width
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Responsive card width calculation
  const getCardWidth = useCallback(() => {
    if (containerWidth < 480) return Math.min(containerWidth * 0.86, 330);
    if (containerWidth < 768) return 400;
    if (containerWidth < 1024) return 480;
    return 560;
  }, [containerWidth]);

  const cardGap = containerWidth < 640 ? 14 : 22;
  const cardWidth = getCardWidth();

  // Reset index on filter change
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  // Automatic one-by-one sliding timer
  useEffect(() => {
    if (isPaused || lightboxIndex !== null || shown.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % shown.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, lightboxIndex, shown.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % shown.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + shown.length) % shown.length);
  };

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartXRef.current = null;
    setIsPaused(false);
  };

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

  // Center offset translation
  const centerCardOffset =
    containerWidth / 2 - (currentIndex * (cardWidth + cardGap) + cardWidth / 2);

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
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
            className={`min-h-9 shrink-0 rounded-full border px-4 py-1.5 text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
              filter === f.id
                ? "border-gold bg-primary text-primary-foreground shadow-md scale-105"
                : "border-border/80 bg-card/80 text-muted-foreground hover:border-gold/60 hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* AUTOMATIC ONE-BY-ONE SLIDER STAGE */}
      {limit ? (
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden py-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Sliding Track */}
          <div
            className="flex items-center"
            style={{
              transform: `translateX(${centerCardOffset}px)`,
              transition: "transform 700ms cubic-bezier(0.25, 1, 0.5, 1)",
              gap: `${cardGap}px`,
            }}
          >
            {shown.map((img, i) => {
              const isCenter = i === currentIndex;
              return (
                <div
                  key={img.src + i}
                  style={{ width: `${cardWidth}px` }}
                  onClick={() => {
                    if (!isCenter) {
                      setCurrentIndex(i);
                    } else {
                      setLightboxIndex(i);
                    }
                  }}
                  className={`group relative h-[380px] sm:h-[430px] md:h-[460px] shrink-0 overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isCenter
                      ? "scale-100 ring-2 ring-gold/90 shadow-2xl z-20 opacity-100"
                      : "scale-95 ring-1 ring-border/50 opacity-55 hover:opacity-85 z-10"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={img.width}
                    height={img.height}
                    className={`size-full object-cover transition-transform duration-1000 ease-out ${
                      isCenter ? "scale-105" : "scale-100"
                    }`}
                  />

                  {/* Gradient Overlay & Captions */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent flex flex-col justify-end p-5 sm:p-7 transition-opacity duration-500 ${
                      isCenter ? "opacity-100" : "opacity-75"
                    }`}
                  >
                    <div className="flex items-end justify-between gap-3">
                      <div className="space-y-1 min-w-0">
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gold/25 border border-gold/40 text-gold-light text-[0.7rem] sm:text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                          <Sparkles className="size-3" />
                          {img.category}
                        </span>
                        <p className="te text-xs sm:text-sm font-medium text-gold-soft mt-1.5">
                          {img.te}
                        </p>
                        <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                          {img.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-white/80 line-clamp-2 max-w-md font-light">
                          {img.alt}
                        </p>
                      </div>

                      {/* View Photo Action Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxIndex(i);
                        }}
                        aria-label={`View full photo: ${img.title}`}
                        className="size-10 sm:size-11 shrink-0 rounded-full bg-white/20 hover:bg-gold text-white hover:text-brand-charcoal backdrop-blur-md border border-white/30 hover:border-gold grid place-items-center transition-all duration-300 shadow-lg hover:scale-110 active:scale-95"
                      >
                        <Maximize2 className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floating Left & Right Navigation Buttons */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 grid size-10 sm:size-12 place-items-center rounded-full bg-black/40 hover:bg-gold text-white hover:text-brand-charcoal border border-white/20 hover:border-gold backdrop-blur-md transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="size-5 sm:size-6" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next photo"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 grid size-10 sm:size-12 place-items-center rounded-full bg-black/40 hover:bg-gold text-white hover:text-brand-charcoal border border-white/20 hover:border-gold backdrop-blur-md transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            <ChevronRight className="size-5 sm:size-6" />
          </button>

          {/* Bottom Slider Controls & Progress Indicator */}
          <div className="mt-5 flex flex-col items-center justify-center gap-3">
            {/* Countdown Progress Bar for Automatic Slide */}
            <div className="h-1 w-28 sm:w-36 rounded-full bg-border/80 overflow-hidden">
              <div
                key={`${currentIndex}-${isPaused}`}
                className={`h-full bg-gold rounded-full ${
                  isPaused ? "w-full opacity-40" : "animate-slide-progress"
                }`}
                style={{
                  animationDuration: `${SLIDE_INTERVAL}ms`,
                }}
              />
            </div>

            {/* Dots and Pause/Play Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setIsPaused((p) => !p)}
                aria-label={isPaused ? "Resume auto slide" : "Pause auto slide"}
                className="grid size-7 place-items-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-gold transition-colors text-xs"
              >
                {isPaused ? <Play className="size-3" /> : <Pause className="size-3" />}
              </button>

              <div className="flex items-center gap-1.5 sm:gap-2">
                {shown.map((img, idx) => (
                  <button
                    key={img.src + idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Slide to photo ${idx + 1}: ${img.title}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentIndex
                        ? "w-7 sm:w-8 bg-gold shadow-sm"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            <span className="text-[0.72rem] text-muted-foreground/70 font-light">
              Sliding automatically • Swipe or tap to explore
            </span>
          </div>
        </div>
      ) : (
        /* FULL GALLERY PAGE (/gallery) */
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {shown.map((img, i) => (
            <li key={img.src + i}>
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-soft border border-border bg-card text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
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
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close image"
            className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full bg-white/15 text-white hover:bg-gold hover:text-brand-charcoal transition-colors duration-200 cursor-pointer"
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
            className="absolute left-3 sm:left-6 z-10 grid size-11 place-items-center rounded-full bg-white/15 text-white hover:bg-gold hover:text-brand-charcoal transition-colors duration-200 cursor-pointer"
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
            className="absolute right-3 sm:right-6 z-10 grid size-11 place-items-center rounded-full bg-white/15 text-white hover:bg-gold hover:text-brand-charcoal transition-colors duration-200 cursor-pointer"
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
