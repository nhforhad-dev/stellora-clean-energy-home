import solarImg from "@/assets/brand-solar.jpg";
import windImg from "@/assets/wind-turbine.jpg";
import { Sun, Wind, ArrowUpRight } from "lucide-react";

export const Comparison = () => (
  <section className="py-24 md:py-32">
    <div className="container-x">
      <div className="max-w-3xl">
        <span className="eyebrow">Solar vs Wind</span>
        <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-forest leading-[1.05]">
          Two natural forces, <span className="font-serif-italic">one cleaner future</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg">
          Solar energy captures sunlight, while wind energy captures air movement. Together, they can create a more flexible renewable energy system for different environments and energy needs.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {[
          { img: solarImg, icon: Sun, t: "Solar Energy", d: "Best for rooftops, open land, homes, offices, and commercial buildings. Solar works best during sunny daytime hours and can be paired with batteries for extra flexibility.", tag: "Daytime power" },
          { img: windImg, icon: Wind, t: "Wind Energy", d: "Best for open spaces, coastal areas, farms, and locations with strong wind flow. Wind energy can support clean power generation during both day and night when wind conditions are suitable.", tag: "Day & night" },
        ].map((c) => (
          <article key={c.t} className="group relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-card">
            <div className="relative h-72 overflow-hidden">
              <img src={c.img} alt={c.t} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-base" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent" />
              <span className="absolute top-5 left-5 chip bg-cream/90 backdrop-blur">
                <c.icon className="h-4 w-4 text-forest" />
                {c.tag}
              </span>
            </div>
            <div className="p-7">
              <h3 className="text-3xl text-forest">{c.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full gradient-forest text-cream pl-6 pr-2 py-2.5 font-medium hover:shadow-elevated transition-base group">
          Find the Right Energy Mix
          <span className="grid h-8 w-8 place-items-center rounded-full bg-lime text-forest group-hover:rotate-45 transition-base">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </a>
      </div>
    </div>
  </section>
);
