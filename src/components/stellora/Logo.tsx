import { Leaf } from "lucide-react";

export const Logo = ({ light = false }: { light?: boolean }) => (
  <a href="#top" className="flex items-center gap-2 group">
    <span className={`grid h-9 w-9 place-items-center rounded-full ${light ? "bg-lime text-forest" : "gradient-forest text-lime"}`}>
      <Leaf className="h-4 w-4" strokeWidth={2.2} />
    </span>
    <span className={`font-serif-italic text-2xl tracking-tight ${light ? "text-cream" : "text-forest"}`}>
      Stellora
    </span>
  </a>
);
