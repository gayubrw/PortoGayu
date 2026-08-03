import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";

export const metadata: Metadata = {
  title: "Portfolio | Gayu Baruwa",
  description:
    "Portfolio showcasing Machine Learning, NLP, Data Science, and full-stack web development projects by Gayu Baruwa.",
};

export default function HomePage() {
  return (
    <main className="theme-bg-black">
      <Hero />
      <ProjectsSection />
      <AboutSection />
    </main>
  );
}
