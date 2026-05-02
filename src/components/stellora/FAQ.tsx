import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const items = [
  { q: "What does Stellora offer?", a: "Stellora offers renewable energy solutions including solar power, wind energy, hybrid systems, battery storage, consultation, monitoring, and maintenance." },
  { q: "Is solar or wind energy better for my property?", a: "It depends on your location, available space, sunlight, wind flow, energy usage, and budget. A consultation helps identify the best solution." },
  { q: "Can solar and wind work together?", a: "Yes. A hybrid system can combine solar and wind energy to create a more flexible renewable power setup." },
  { q: "Do I need battery storage?", a: "Battery storage is useful if you want backup power, night time energy use, or better control over stored electricity." },
  { q: "How do I get started?", a: "Start with a consultation. Stellora can review your energy needs and recommend the right clean energy solution." },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-forest leading-[1.05]">
            Questions about <span className="font-serif-italic">renewable energy?</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Common questions about how Stellora can power your home or business with clean energy.
          </p>
        </div>
        <div className="lg:col-span-7 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className={`rounded-2xl border border-border transition-base ${isOpen ? "bg-forest text-cream" : "bg-card"}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className={`text-lg md:text-xl ${isOpen ? "text-cream" : "text-forest"}`}>{it.q}</span>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${isOpen ? "bg-lime text-forest" : "bg-leaf text-forest"}`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 -mt-1 text-cream/85 leading-relaxed animate-fade-up">{it.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
