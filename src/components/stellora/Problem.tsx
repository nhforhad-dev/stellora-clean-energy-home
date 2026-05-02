import { TrendingUp, Flame, Zap, CloudOff } from "lucide-react";

const problems = [
  { icon: TrendingUp, t: "Rising electricity bills", d: "Energy costs keep climbing year after year, putting pressure on household and business budgets." },
  { icon: Flame, t: "High fossil fuel dependency", d: "Most grids still rely on non-renewable resources that are finite and price-volatile." },
  { icon: Zap, t: "Unstable energy supply", d: "Outages and load fluctuations interrupt daily life and slow down operations." },
  { icon: CloudOff, t: "Growing environmental impact", d: "Conventional power generation continues to add to emissions and air quality issues." },
];

export const Problem = () => (
  <section className="py-24 md:py-32 bg-leaf/40 relative grain">
    <div className="container-x relative">
      <div className="grid gap-10 lg:grid-cols-12 items-end">
        <div className="lg:col-span-7">
          <span className="eyebrow">The challenge</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-forest leading-[1.05]">
            Energy costs are rising. The future needs a <span className="font-serif-italic">smarter solution.</span>
          </h2>
        </div>
        <p className="lg:col-span-5 text-muted-foreground text-lg">
          Traditional energy sources can be costly, unpredictable, and harmful to the environment. Renewable energy gives people and businesses a cleaner way to power daily life while reducing long term energy pressure.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {problems.map((p, i) => (
          <article key={p.t} className="group relative rounded-3xl bg-cream p-6 border border-border hover:bg-forest hover:text-cream transition-base shadow-card">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-lime group-hover:bg-lime group-hover:text-forest transition-base">
              <p.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-6 text-xl text-forest group-hover:text-cream transition-base">{p.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground group-hover:text-cream/80 transition-base">{p.d}</p>
            <div className="absolute top-6 right-6 text-xs text-muted-foreground group-hover:text-lime">0{i + 1}</div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
