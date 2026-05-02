import windImg from "@/assets/wind-turbine.jpg";
import { ArrowUpRight } from "lucide-react";

export const FinalCTA = () => (
  <section id="contact" className="py-16 md:py-24">
    <div className="container-x">
      <div className="relative overflow-hidden rounded-[2.5rem] gradient-forest text-cream shadow-elevated">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-lime/15 blur-3xl" />
        <div className="grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-10 md:p-16 relative">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-lime">
              <span className="h-px w-8 bg-lime" /> Get Started
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Ready to start your <span className="font-serif-italic text-lime">clean energy journey?</span>
            </h2>
            <p className="mt-6 text-cream/80 text-lg max-w-xl">
              Talk to Stellora and discover the right renewable energy solution for your home, business, or community.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-lime text-forest px-6 py-3.5 font-medium hover:shadow-lime transition-base group">
                Get Free Consultation
                <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-base" />
              </a>
              <a href="#solutions" className="inline-flex items-center gap-2 rounded-full border border-cream/30 text-cream px-6 py-3.5 font-medium hover:bg-cream/10 transition-base">
                Explore Our Solutions
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[360px]">
            <img src={windImg} alt="Wind turbine" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-forest/60" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
