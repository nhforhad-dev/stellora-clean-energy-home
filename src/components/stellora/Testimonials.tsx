import { Quote } from "lucide-react";

const items = [
  { q: "Stellora made the clean energy transition simple. The team explained everything clearly and helped us understand the right system for our needs.", n: "Amelia Carter", r: "Homeowner", i: "AC" },
  { q: "We wanted a solution that felt modern, efficient, and environmentally responsible. Stellora gave us a clear path toward better energy control.", n: "Daniel Reyes", r: "Operations Lead", i: "DR" },
  { q: "The design, planning, and support felt professional from the beginning. We now feel more confident about our long term energy future.", n: "Priya Shah", r: "Facility Director", i: "PS" },
];

export const Testimonials = () => (
  <section id="blog" className="py-24 md:py-32 bg-cream-soft">
    <div className="container-x">
      <div className="max-w-3xl">
        <span className="eyebrow">Testimonials</span>
        <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-forest leading-[1.05]">
          Trusted by people choosing <span className="font-serif-italic">cleaner energy</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <article key={it.n} className="rounded-3xl bg-cream p-7 border border-border shadow-card flex flex-col">
            <Quote className="h-8 w-8 text-lime" />
            <p className="mt-5 text-forest text-lg leading-relaxed flex-1">"{it.q}"</p>
            <div className="mt-7 flex items-center gap-3 pt-5 border-t border-border">
              <span className="grid h-11 w-11 place-items-center rounded-full gradient-forest text-lime font-medium text-sm">
                {it.i}
              </span>
              <div>
                <div className="font-medium text-forest">{it.n}</div>
                <div className="text-sm text-muted-foreground">{it.r}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
