import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryFilters, galleryImages, type GalleryCategory } from "@/data/galleryData";

export function Gallery({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<GalleryCategory | "all">("all");
  const [active, setActive] = useState<number | null>(null);

  const items = galleryImages.filter((g) => filter === "all" || g.category === filter);
  const shown = limit ? items.slice(0, limit) : items;

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => ((i ?? 0) + 1) % shown.length);
      if (e.key === "ArrowLeft") setActive((i) => ((i ?? 0) - 1 + shown.length) % shown.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, shown.length]);

  const current = active !== null ? shown[active] : null;

  return (
    <div>
      {!limit && (
        <div className="no-scrollbar -mx-4 mb-6 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
          {galleryFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => {
                setFilter(f.id);
                setActive(null);
              }}
              aria-pressed={filter === f.id}
              className={`min-h-10 shrink-0 rounded-full border px-4 text-sm transition-colors ${
                filter === f.id
                  ? "border-gold bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-gold"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <ul className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
        {shown.map((img, i) => (
          <li key={img.src + i} className={!limit && i % 5 === 0 ? "lg:row-span-2" : ""}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group block w-full overflow-hidden rounded-xl"
              aria-label={`Open image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={img.width}
                height={img.height}
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  !limit && i % 5 === 0 ? "aspect-[3/4] lg:aspect-[3/5]" : "aspect-square"
                }`}
              />
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-deep/95 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close image"
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-background/15 text-primary-foreground"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((idx) => ((idx ?? 0) - 1 + shown.length) % shown.length);
            }}
            className="absolute left-2 grid size-11 place-items-center rounded-full bg-background/15 text-primary-foreground"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((idx) => ((idx ?? 0) + 1) % shown.length);
            }}
            className="absolute right-2 grid size-11 place-items-center rounded-full bg-background/15 text-primary-foreground"
          >
            <ChevronRight className="size-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-full max-w-4xl">
            <img
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              className="max-h-[78vh] w-auto rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-primary-foreground/80">
              {current.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
