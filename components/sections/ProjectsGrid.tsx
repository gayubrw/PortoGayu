"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ProjectPlaceholder from "@/components/shared/ProjectPlaceholder";
import Reveal from "@/components/ui/Reveal";
import { ProjectType } from "@/lib/types";

export default function ProjectsGrid({
  projects,
}: {
  projects: ProjectType[];
}) {
  // The project shown in the sidebar. Kept during the close animation.
  const [active, setActive] = useState<ProjectType | null>(null);
  const [open, setOpen] = useState(false);

  const openPanel = (project: ProjectType) => {
    setActive(project);
    setOpen(true);
  };
  const closePanel = () => setOpen(false);

  // Lock body scroll + close on Escape while the panel is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.body.classList.add("drawer-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.body.classList.remove("drawer-open");
    };
  }, [open]);

  return (
    <>
      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 90} className="h-full">
            <article className="portfolio-card hover-lift group flex flex-col h-full theme-bg-black border border-theme-red/20 hover:border-theme-red/50 transition-all overflow-hidden">
            {/* Preview */}
            <div className="relative aspect-video overflow-hidden theme-bg-black border-b border-theme-red/20">
              {project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              ) : (
                <ProjectPlaceholder
                  title={project.title}
                  label={project.tags?.[0]}
                />
              )}

              {/* Animated scan line */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                  className="h-px w-full bg-theme-red opacity-50"
                  style={{ animation: "scan 3s ease-in-out infinite" }}
                ></div>
              </div>

              {/* Project number */}
              <div className="project-number absolute top-3 left-3 z-10 bg-theme-red text-theme-cream font-bold px-3 py-1 text-sm">
                0{index + 1}
              </div>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold theme-text-cream mb-3 group-hover:text-theme-red transition-colors">
                {project.title}
              </h3>
              <p className="theme-text-cream-dark text-sm mb-5 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 4).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-theme-red/10 theme-text-red px-2 py-1 text-xs font-medium border border-theme-red/30 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => openPanel(project)}
                className="mt-auto inline-flex items-center justify-center w-full bg-transparent border border-theme-red theme-text-red hover:theme-bg-red hover:theme-text-cream px-4 py-3 transition-colors duration-300 text-sm tracking-wider uppercase font-semibold group/btn"
              >
                <span>Lihat Detail</span>
                <svg
                  className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Backdrop */}
      <div
        onClick={closePanel}
        aria-hidden="true"
        className={`fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar detail panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={active ? `${active.title} details` : "Project details"}
        className={`fixed top-0 right-0 z-[100] h-full w-full max-w-md theme-bg-black border-l border-theme-red shadow-2xl shadow-black/60 transform transition-transform duration-300 ease-out overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Corner accents */}
        <div className="pointer-events-none absolute top-3 left-3 w-5 h-5 border-t border-l border-theme-red"></div>
        <div className="pointer-events-none absolute bottom-3 right-3 w-5 h-5 border-b border-r border-theme-red"></div>

        {active && (
          <div className="p-8">
            {/* Header row */}
            <div className="flex items-start justify-between mb-8">
              <span className="theme-text-red text-sm tracking-widest uppercase font-semibold">
                Project Detail
              </span>
              <button
                type="button"
                onClick={closePanel}
                aria-label="Close details"
                className="theme-text-cream hover:theme-text-red transition-colors border border-theme-red/40 hover:border-theme-red w-9 h-9 flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Preview */}
            <div className="relative aspect-video overflow-hidden border border-theme-red/20 mb-6">
              {active.imageUrl ? (
                <Image
                  src={active.imageUrl}
                  alt={active.title}
                  fill
                  sizes="420px"
                  style={{ objectFit: "cover" }}
                  className="opacity-90"
                />
              ) : (
                <ProjectPlaceholder
                  title={active.title}
                  label={active.tags?.[0]}
                />
              )}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold theme-text-red mb-4 relative inline-block">
              <span className="relative z-10">{active.title}</span>
              <span className="absolute bottom-0 left-0 h-px w-12 theme-bg-red"></span>
            </h3>

            {/* Description */}
            <p className="theme-text-cream text-sm leading-relaxed mb-6">
              {active.longDescription || active.description}
            </p>

            {/* Features */}
            {active.features && active.features.length > 0 && (
              <>
                <h4 className="text-sm font-semibold theme-text-cream uppercase tracking-wide mb-3">
                  Main Features
                </h4>
                <ul className="space-y-2 mb-6 theme-text-cream text-sm">
                  {active.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="theme-text-red mr-3">&#x2022;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {active.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-black/40 theme-text-red px-3 py-1 text-xs font-medium border border-theme-red/30 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            {(active.demoUrl || active.githubUrl) && (
              <div className="flex flex-col gap-3">
                {active.demoUrl && (
                  <a
                    href={active.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-bg-red theme-text-cream border border-theme-red hover:bg-transparent hover:theme-text-red px-6 py-3 transition-all duration-300 text-sm tracking-wider uppercase font-bold inline-flex items-center justify-center"
                  >
                    Demo Live
                  </a>
                )}
                {active.githubUrl && (
                  <a
                    href={active.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-theme-red hover:theme-bg-red hover:theme-text-cream px-6 py-3 theme-text-red transition-colors duration-300 text-sm tracking-wider uppercase inline-flex items-center justify-center"
                  >
                    <span>Source Code</span>
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </aside>
    </>
  );
}
