const stats = [
  { v: "40%", l: "Potential Energy Cost Reduction" },
  { v: "2.5k+", l: "Clean Energy Systems Planned" },
  { v: "98%", l: "System Performance Focus" },
  { v: "24/7", l: "Monitoring Ready Solutions" },
];

export const Impact = () => (
  <section className="py-24 md:py-32 bg-leaf/40">
    <div className="container-x">
      <div className="max-w-3xl mx-auto text-center">
        <span className="eyebrow before:hidden after:hidden justify-center">Impact</span>
        <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-forest leading-[1.05]">
          Clean energy impact that <span className="font-serif-italic">moves the future forward</span>
        </h2>
      </div>
      <div className="mt-16 grid gap-px bg-border rounded-3xl overflow-hidden md:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="bg-cream p-10 text-center">
            <div className="font-serif-italic text-6xl md:text-7xl text-forest">{s.v}</div>
            <div className="mt-3 text-sm text-muted-foreground uppercase tracking-wider">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
