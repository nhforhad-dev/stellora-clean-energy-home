import heroImg from "@/assets/hero-energy.jpg";
import { ArrowUpRight, Sun, Wind, BatteryCharging, Building2, Leaf } from "lucide-react";

const cards = [
  { icon: Sun, label: "Solar + Wind Solutions" },
  { icon: BatteryCharging, label: "Lower Energy Costs" },
  { icon: Leaf, label: "Clean Power Systems" },
  { icon: Building2, label: "Built for Homes & Businesses" },
];

const stats = [
  { v: "10+", l: "Years of Energy Experience" },
  { v: "40%", l: "Potential Energy Savings" },
  { v: "100%", l: "Renewable Focus" },
];

export const Hero = () => (
  <section id="top" className="relative pt-2 pb-24 md:pb-32">
    <div className="container-x">
      <div className="relative overflow-hidden rounded-[2.5rem] shadow-elevated">
        <img
          src={heroImg}
          alt="Solar panels and wind turbines on a green landscape at golden hour"
          width={1920} height={1080}
          className="h-[78vh] min-h-[620px] w-full object-cover"
        />
        {/* gradient veil */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/55 via-forest/15 to-forest/70" />
        <div className="absolute inset-0 gradient-glow opacity-70" />

        {/* content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 lg:p-16">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream/15 backdrop-blur-md border border-cream/30 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-cream">
              <Wind className="h-3.5 w-3.5 text-lime" />
              Renewable Energy for a Cleaner Future
            </span>
            <h1 className="mt-6 text-cream text-[2.6rem] sm:text-6xl lg:text-[5.2rem] leading-[1.02] font-medium">
              Powering <span className="font-serif-italic text-lime">Tomorrow</span><br />
              with Solar and<br />
              Wind <span className="font-serif-italic">Energy</span>
            </h1>
          </div>

          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <p className="md:col-span-5 text-cream/85 text-base md:text-lg max-w-md animate-fade-up">
              Stellora delivers smart renewable energy solutions designed to reduce energy costs, improve energy independence, and support a cleaner planet.
            </p>
            <div className="md:col-span-7 flex flex-wrap items-center justify-start md:justify-end gap-3">
              <a href="#solutions" className="inline-flex items-center gap-2 rounded-full bg-lime text-forest px-6 py-3.5 font-medium hover:shadow-lime transition-base group">
                Explore Solutions
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-base" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-cream/40 text-cream px-6 py-3.5 font-medium hover:bg-cream/10 transition-base">
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards row */}
      <div className="relative -mt-14 md:-mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 px-2 md:px-8">
        {cards.map((c, i) => (
          <div
            key={c.label}
            className="glass-card p-4 md:p-5 flex items-center gap-3 animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest text-lime">
              <c.icon className="h-4 w-4" />
            </span>
            <span className="text-sm md:text-[15px] font-medium text-forest leading-tight">{c.label}</span>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-16 md:mt-20 grid grid-cols-3 divide-x divide-border border-y border-border">
        {stats.map((s) => (
          <div key={s.l} className="px-4 py-8 md:py-10 text-center">
            <div className="font-serif-italic text-5xl md:text-7xl text-forest">{s.v}</div>
            <div className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
