import { Search, PencilRuler, Wrench, LineChart } from "lucide-react";

const steps = [
  { icon: Search, t: "Energy Assessment", d: "We review your property, electricity usage, location, and energy goals." },
  { icon: PencilRuler, t: "Custom System Design", d: "We design the right solar, wind, hybrid, or storage solution for your needs." },
  { icon: Wrench, t: "Professional Installation", d: "Our team installs your energy system with safety, efficiency, and long term performance in mind." },
  { icon: LineChart, t: "Monitoring & Support", d: "Track performance, manage energy use, and keep your system running smoothly." },
];

export const HowItWorks = () => (
  <section className="py-24 md:py-32 bg-cream-soft">
    <div className="container-x">
      <div className="grid lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-7">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-forest leading-[1.05]">
            From natural energy to <span className="font-serif-italic">everyday power</span>
          </h2>
        </div>
        <p className="lg:col-span-5 text-muted-foreground text-lg">
          We make the transition to renewable energy simple, from consultation and planning to installation and ongoing support.
        </p>
      </div>

      <div className="mt-16 relative">
        <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-border" />
        <div className="grid gap-8 lg:gap-4 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.t} className="relative">
              <div className="flex items-center gap-4 lg:block">
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full gradient-forest text-lime shadow-card">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground lg:mt-6 lg:block">Step 0{i + 1}</span>
              </div>
              <h3 className="mt-4 lg:mt-3 text-2xl text-forest">{s.t}</h3>
              <p className="mt-2 text-muted-foreground text-[15px] leading-relaxed pr-4">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
