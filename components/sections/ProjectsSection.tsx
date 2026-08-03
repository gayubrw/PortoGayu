import { getProjects } from "@/lib/utils";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import Reveal from "@/components/ui/Reveal";
import SectionParallax from "@/components/ui/SectionParallax";

export default async function ProjectsSection() {
  const projects = await getProjects();
  return (
    <div id="projects" className="relative py-24 theme-bg-black scroll-mt-24">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #A11312 1px, transparent 1px),
              linear-gradient(to bottom, #A11312 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <SectionParallax className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="lg:text-center mb-16">
          {/* Section heading with decorative line */}
          <div className="inline-flex items-center mb-4">
            <div className="h-px w-8 theme-bg-red"></div>
            <span className="mx-3 theme-text-red text-sm tracking-widest uppercase font-semibold">
              Projects
            </span>
            <div className="h-px w-8 theme-bg-red"></div>
          </div>

          <h1 className="text-3xl leading-8 font-extrabold tracking-tight theme-text-red sm:text-4xl mb-4">
            My Projects
          </h1>
          <p className="mt-4 max-w-2xl text-xl theme-text-cream lg:mx-auto">
            Here are some of the projects I have worked on.
          </p>
        </Reveal>

        {/* Card grid + detail sidebar (client) */}
        <ProjectsGrid projects={projects} />
      </SectionParallax>
    </div>
  );
}
