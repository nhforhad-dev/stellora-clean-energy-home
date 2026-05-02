import { Logo } from "./Logo";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const cols = [
  { title: "Company", links: ["About Us", "Projects", "Blog", "Contact"] },
  { title: "Solutions", links: ["Solar Energy", "Wind Energy", "Hybrid Systems", "Battery Storage", "Maintenance"] },
];

export const Footer = () => (
  <footer className="gradient-forest text-cream pt-20 pb-10">
    <div className="container-x">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-5 text-cream/75 max-w-sm leading-relaxed">
            Stellora powers cleaner living through smart solar, wind, and sustainable energy solutions.
          </p>
          <div className="mt-8 space-y-3 text-cream/80 text-sm">
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-lime" /> hello@stellora.com</div>
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-lime" /> +1 000 000 0000</div>
            <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-lime" /> Your Business Address</div>
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.title} className="lg:col-span-2">
            <h4 className="text-cream text-sm uppercase tracking-[0.2em] font-sans font-medium">{c.title}</h4>
            <ul className="mt-5 space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-cream/75 hover:text-lime transition-base">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-4">
          <h4 className="text-cream text-sm uppercase tracking-[0.2em] font-sans font-medium">Newsletter</h4>
          <p className="mt-5 text-cream/75 text-sm">
            Get renewable energy tips, project updates, and clean power insights.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex items-center gap-2 rounded-full bg-cream/10 border border-cream/20 p-1.5 pl-5">
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-transparent outline-none text-cream placeholder:text-cream/50 text-sm"
            />
            <button className="grid h-10 w-10 place-items-center rounded-full bg-lime text-forest hover:rotate-45 transition-base">
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-cream/15 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/60">
        <div>© {new Date().getFullYear()} Stellora. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-lime transition-base">Privacy</a>
          <a href="#" className="hover:text-lime transition-base">Terms</a>
          <a href="#" className="hover:text-lime transition-base">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);
