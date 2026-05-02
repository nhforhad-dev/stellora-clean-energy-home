import brandImg from "@/assets/brand-solar.jpg";
import { Sun, Wind, BatteryCharging, Headphones, Activity } from "lucide-react";

const points = [
  { icon: Sun, label: "Solar Energy" },
  { icon: Wind, label: "Wind Energy" },
  { icon: BatteryCharging, label: "Battery Storage" },
  { icon: Headphones, label: "Energy Consultation" },
  { icon: Activity, label: "Smart Monitoring" },
];

export const BrandIntro = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container-x grid gap-12 lg:gap-20 lg:grid-cols-12 items-center">
      <div className="lg:col-span-7 order-2 lg:order-1">
        <span className="eyebrow">About Stellora</span>
        <h2 className="mt-5 text-4xl md:text-6xl text-forest leading-[1.05]">
          Clean Energy That <span className="font-serif-italic">Works with Nature</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          Stellora helps homes, businesses, and communities move toward sustainable power through solar, wind, and smart energy solutions. Our systems are designed to make clean energy more accessible, reliable, and practical for everyday use.
        </p>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {points.map((p) => (
            <span key={p.label} className="chip group hover:bg-forest hover:text-cream hover:border-forest transition-base cursor-default">
              <p.icon className="h-4 w-4 text-lime group-hover:text-lime" />
              {p.label}
            </span>
          ))}
        </div>
      </div>
      <div className="lg:col-span-5 order-1 lg:order-2 relative">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-elevated">
          <img src={brandImg} alt="Solar panels among green plants" loading="lazy" width={1200} height={1400} className="h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest/60 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 glass-card p-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-lime text-forest">
              <Sun className="h-5 w-5" />
            </span>
            <div>
              <div className="text-sm font-semibold text-forest">Smart Renewable Systems</div>
              <div className="text-xs text-muted-foreground">Designed for everyday life</div>
            </div>
          </div>
        </div>
        <div className="absolute -top-6 -right-4 hidden md:grid h-24 w-24 place-items-center rounded-full bg-lime text-forest font-medium text-xs text-center p-3 animate-spin-slow shadow-lime">
          Clean<br/>Energy<br/>Stellora
        </div>
      </div>
    </div>
  </section>
);
