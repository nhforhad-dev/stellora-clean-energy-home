import resImg from "@/assets/project-residential.jpg";
import comImg from "@/assets/project-commercial.jpg";
import wndImg from "@/assets/project-wind.jpg";
import hybImg from "@/assets/project-hybrid.jpg";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { img: resImg, cat: "Residential Solar", t: "Residential Solar Upgrade", d: "A modern home energy system designed to reduce grid dependency and improve daily energy efficiency." },
  { img: comImg, cat: "Commercial", t: "Commercial Solar Rooftop", d: "A clean power setup for business operations, helping reduce operating costs and support sustainability goals." },
  { img: wndImg, cat: "Wind Energy", t: "Open Field Wind Solution", d: "A wind based energy concept for open spaces with strong airflow and long term renewable power potential." },
  { img: hybImg, cat: "Hybrid", t: "Hybrid Solar & Wind System", d: "A balanced renewable energy setup combining solar panels, wind power, and storage for greater flexibility." },
];

export const Projects = () => (
  <section id="projects" className="py-24 md:py-32">
    <div className="container-x">
      <div className="grid lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-7">
          <span className="eyebrow">Featured Projects</span>
          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-forest leading-[1.05]">
            Renewable projects designed for <span className="font-serif-italic">real world impact</span>
          </h2>
        </div>
        <p className="lg:col-span-5 text-muted-foreground text-lg">
          Explore how solar, wind, and hybrid clean energy systems can support homes, businesses, and communities.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <article key={p.t} className={`group relative overflow-hidden rounded-[2rem] bg-card border border-border shadow-card hover:shadow-elevated transition-base ${i % 2 === 1 ? "md:translate-y-12" : ""}`}>
            <div className="relative h-80 overflow-hidden">
              <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-base" />
              <span className="absolute top-5 left-5 chip bg-cream/90 backdrop-blur text-xs">{p.cat}</span>
            </div>
            <div className="p-7 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl text-forest">{p.t}</h3>
                <p className="mt-2 text-muted-foreground text-[15px]">{p.d}</p>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-leaf group-hover:bg-lime group-hover:rotate-45 transition-base">
                <ArrowUpRight className="h-4 w-4 text-forest" />
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-forest/20 bg-cream px-6 py-3 text-forest font-medium hover:bg-forest hover:text-cream transition-base">
          View All Projects
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);
