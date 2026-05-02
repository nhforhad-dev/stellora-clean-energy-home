import { PiggyBank, Leaf, ShieldCheck, Cog, Rocket, Award } from "lucide-react";

const benefits = [
  { icon: PiggyBank, t: "Lower Energy Bills", d: "Reduce long term electricity costs with smart renewable systems." },
  { icon: Leaf, t: "Cleaner Environment", d: "Use natural energy sources that help reduce harmful emissions." },
  { icon: ShieldCheck, t: "Energy Independence", d: "Depend less on traditional power sources and gain more control." },
  { icon: Cog, t: "Reliable Performance", d: "Get systems designed for durability, efficiency, and long term use." },
  { icon: Rocket, t: "Future Ready Power", d: "Prepare your home or business for a cleaner energy future." },
  { icon: Award, t: "Stronger Brand Value", d: "Show customers and communities that your business supports sustainability." },
];

export const Benefits = () => (
  <section className="py-24 md:py-32 gradient-forest text-cream relative overflow-hidden">
    <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-lime/15 blur-3xl" />
    <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-lime/10 blur-3xl" />
    <div className="container-x relative">
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-lime">
          <span className="h-px w-8 bg-lime" /> Why Stellora
        </span>
        <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          Why choose renewable energy <span className="font-serif-italic text-lime">with Stellora?</span>
        </h2>
        <p className="mt-6 text-cream/80 text-lg max-w-2xl">
          Our clean energy solutions help reduce costs, improve energy control, and support a healthier future for people and the planet.
        </p>
      </div>

      <div className="mt-14 grid gap-px bg-cream/10 rounded-3xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.t} className="bg-forest p-8 hover:bg-forest-deep transition-base group">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-lime text-forest group-hover:rotate-6 transition-base">
              <b.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-6 text-2xl text-cream">{b.t}</h3>
            <p className="mt-2 text-cream/70 text-[15px] leading-relaxed">{b.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
