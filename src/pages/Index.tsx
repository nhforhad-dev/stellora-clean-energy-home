import { Navbar } from "@/components/stellora/Navbar";
import { Hero } from "@/components/stellora/Hero";
import { BrandIntro } from "@/components/stellora/BrandIntro";
import { Problem } from "@/components/stellora/Problem";
import { Solutions } from "@/components/stellora/Solutions";
import { HowItWorks } from "@/components/stellora/HowItWorks";
import { Benefits } from "@/components/stellora/Benefits";
import { Comparison } from "@/components/stellora/Comparison";
import { Impact } from "@/components/stellora/Impact";
import { Projects } from "@/components/stellora/Projects";
import { Sustainability } from "@/components/stellora/Sustainability";
import { Testimonials } from "@/components/stellora/Testimonials";
import { FAQ } from "@/components/stellora/FAQ";
import { FinalCTA } from "@/components/stellora/FinalCTA";
import { Footer } from "@/components/stellora/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <BrandIntro />
      <Problem />
      <Solutions />
      <HowItWorks />
      <Benefits />
      <Comparison />
      <Impact />
      <Projects />
      <Sustainability />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
