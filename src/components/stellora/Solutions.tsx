import { Sun, Wind, Layers, BatteryCharging, Headphones, Activity, ArrowUpRight } from "lucide-react";

const solutions = [
  { icon: Sun, t: "Solar Power Systems", d: "High performance solar solutions for homes, businesses, and commercial spaces designed to reduce grid dependency and energy costs." },
  { icon: Wind, t: "Wind Energy Solutions", d: "Smart wind energy systems that capture natural wind power and support cleaner electricity generation for suitable locations." },
  { icon: Layers, t: "Hybrid Energy Systems", d: "Solar and wind solutions combined to create a more balanced, flexible, and reliable renewable energy setup." },
  { icon: BatteryCharging, t: "Battery Storage", d: "Store extra clean energy for backup power, night time use, and better energy control when you need it most." },
  { icon: Headphones, t: "Energy Consultation", d: "Get expert guidance on system size, energy needs, savings potential, and the best renewable setup for your property." },
  { icon: Activity, t: "Monitoring & Maintenance", d: "Keep your renewable energy system performing efficiently with regular checks, smart monitoring, and long term support." },
];

export const Solutions = () => (
  <section id="solutions" className="py-24 md:py-32">
    <div className="container-x">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <span className="eyebrow">Our Solutions</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-forest leading-[1.05]">
            Renewable energy solutions built for <span className="font-serif-italic">modern living</span>
          </h2>
        </div>
        <p className="lg:max-w-md text-muted-foreground text-lg">
          From solar panels to wind systems and battery storage, Stellora provides clean energy solutions designed around your property, usage, and sustainability goals.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s, i) => (
          <article key={s.t} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 hover:-translate-y-1 hover:shadow-elevated transition-base">
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-lime/0 group-hover:bg-lime/30 blur-3xl transition-base" />
            <div className="flex items-start justify-between">
              <span className="grid h-14 w-14 place-items-center rounded-2xl gradient-forest text-lime">
                <s.icon className="h-6 w-6" />
              </span>
              <span className="text-xs text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="mt-8 text-2xl text-forest">{s.t}</h3>
            <p className="mt-3 text-muted-foreground text-[15px] leading-relaxed">{s.d}</p>
            <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm text-forest font-medium group/link">
              Learn more
              <span className="grid h-7 w-7 place-items-center rounded-full bg-leaf group-hover/link:bg-lime transition-base">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
