import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ArrowUpRight, Menu, X } from "lucide-react";

const items = [
  { label: "Home", href: "#top" },
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "About Us", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-base ${scrolled ? "py-3" : "py-5"}`}>
      <div className="container-x">
        <nav className={`flex items-center justify-between rounded-full border border-border/70 px-4 md:px-6 py-2.5 transition-base ${scrolled ? "bg-cream/90 backdrop-blur-xl shadow-card" : "bg-cream/60 backdrop-blur-md"}`}>
          <Logo />
          <ul className="hidden lg:flex items-center gap-1">
            {items.map((it) => (
              <li key={it.label}>
                <a href={it.href} className="rounded-full px-4 py-2 text-sm text-forest/80 hover:text-forest hover:bg-leaf/60 transition-base">
                  {it.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full gradient-forest text-cream pl-5 pr-2 py-2 text-sm font-medium hover:shadow-elevated transition-base group">
              Get Free Consultation
              <span className="grid h-7 w-7 place-items-center rounded-full bg-lime text-forest group-hover:rotate-45 transition-base">
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden grid h-10 w-10 place-items-center rounded-full bg-forest text-cream" aria-label="Menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
        {open && (
          <div className="lg:hidden mt-2 rounded-3xl bg-cream shadow-card border border-border p-4 animate-fade-up">
            <ul className="flex flex-col">
              {items.map((it) => (
                <li key={it.label}>
                  <a onClick={() => setOpen(false)} href={it.href} className="block rounded-2xl px-4 py-3 text-forest hover:bg-leaf/60">{it.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
