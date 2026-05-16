import { siteConfig } from "@/config/site";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Hero band */}
      <div className="bg-brand-soft">
        <div className="container mx-auto px-6 py-24 md:py-32 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand mb-6">
            About Us
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground leading-tight max-w-4xl mx-auto">
            {siteConfig.tagline}
          </h1>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-brand/40" />
            <span className="text-sm text-muted-foreground">
              {siteConfig.brand} · {siteConfig.location}
            </span>
            <span className="h-px w-10 bg-brand/40" />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container mx-auto px-6 py-20 max-w-3xl">
        <div className="space-y-7 text-lg leading-relaxed text-foreground/80">
          <p>
            At <span className="text-brand font-medium">Malhar Corp</span>, we
            bring refined elegance to modern bathroom spaces. Located in the
            heart of Hadapsar, we offer an exclusive selection of{" "}
            <span className="text-foreground font-medium">Jaquar sanitaryware</span>,
            premium sinks, and sophisticated fittings designed to elevate
            everyday living.
          </p>
          <p>
            With a focus on quality, design, and authenticity, every product we
            offer reflects durability and timeless style. Whether for a
            contemporary home or a high-end project, Malhar Corp is your
            trusted partner in creating spaces of comfort and distinction.
          </p>
        </div>

        {/* Pillars */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "Quality", desc: "Authentic, durable products built to last." },
            { title: "Design", desc: "Refined aesthetics for modern living." },
            { title: "Trust", desc: "Your partner in distinguished spaces." },
          ].map((p) => (
            <div
              key={p.title}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-brand hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="font-serif text-xl text-brand mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
