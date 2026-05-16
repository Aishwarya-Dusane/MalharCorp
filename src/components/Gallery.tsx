import g01 from "@/assets/gallery/g01.jpeg";
import g02 from "@/assets/gallery/g02.jpeg";
import g03 from "@/assets/gallery/g03.jpeg";
import g04 from "@/assets/gallery/g04.jpeg";
import g05 from "@/assets/gallery/g05.jpeg";
import g06 from "@/assets/gallery/g06.jpeg";
import g07 from "@/assets/gallery/g07.jpeg";
import g08 from "@/assets/gallery/g08.jpeg";
import g09 from "@/assets/gallery/g09.jpeg";
import g10 from "@/assets/gallery/g10.jpeg";
import g11 from "@/assets/gallery/g11.jpeg";
import g12 from "@/assets/gallery/g12.jpeg";
import g13 from "@/assets/gallery/g13.jpeg";
import g14 from "@/assets/gallery/g14.jpeg";
import g15 from "@/assets/gallery/g15.jpeg";

const images = [g01, g02, g03, g04, g05, g06, g07, g08, g09, g10, g11, g12, g13, g14, g15];

const Gallery = () => {
  // Duplicate the list so the -50% translate creates a seamless loop
  const loop = [...images, ...images];

  return (
    <section
      id="gallery"
      aria-label="Featured Jaquar collections"
      className="relative bg-background py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center mb-12">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand mb-4">
          Featured Collections
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground">
          Crafted in Every Detail
        </h2>
      </div>

      <div className="group relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max animate-marquee-rtl group-hover:[animation-play-state:paused]">
          {loop.map((src, i) => (
            <div
              key={i}
              className="mx-3 md:mx-4 h-64 md:h-80 w-48 md:w-60 shrink-0 overflow-hidden rounded-lg border border-border bg-card shadow-sm"
            >
              <img
                src={src}
                alt={`Jaquar collection ${(i % images.length) + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
