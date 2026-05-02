import bg from "@/assets/sustainability-bg.jpg";
import { Wind, Leaf, Cpu, TreePine, Zap } from "lucide-react";

const points = [
  { icon: Wind, t: "Cleaner air" },
  { icon: Leaf, t: "Lower emissions" },
  { icon: Cpu, t: "Smarter energy use" },
  { icon: TreePine, t: "Long term environmental value" },
  { icon: Zap, t: "Responsible power generation" },
];

export const Sustainability = () => (
  <section className="relative py-28 md:py-40 overflow-hidden">
    <img src={bg} alt="Lush green valley with wind turbines" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest/75 to-forest/40" />
    <div className="container-x relative text-cream">
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-lime">
          <span className="h-px w-8 bg-lime" /> Sustainability
        </span>
        <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          Built for people, <span className="font-serif-italic text-lime">powered by nature</span>
        </h2>
        <p className="mt-6 text-cream/85 text-lg">
          Every clean energy system is part of a bigger mission. Stellora helps reduce dependency on traditional energy sources while supporting cleaner air, greener communities, and a more sustainable future.
        </p>
        <ul className="mt-10 space-y-3">
          {points.map((p) => (
            <li key={p.t} className="flex items-center gap-4 text-cream">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-lime text-forest">
                <p.icon className="h-4 w-4" />
              </span>
              <span className="text-lg">{p.t}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
