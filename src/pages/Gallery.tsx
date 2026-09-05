import { PageHero } from "@/components/sections/PageHero";
import { Gallery } from "@/components/gallery/Gallery";

export function GalleryPage() {
  return (
    <>
      <PageHero
        te="మా జ్ఞాపకాలు"
        title="Food, Feasts & Functions"
        intro="A look at the meals and celebrations we cook for. Tap any photograph to view it full screen."
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
        <Gallery />
      </section>
    </>
  );
}
