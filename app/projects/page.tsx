import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getProjects } from "@/lib/utils";
import ProjectPlaceholder from "@/components/shared/ProjectPlaceholder";

export const metadata: Metadata = {
  title: "PortoGayu | Projects",
  description:
    "Portfolio showcasing Machine Learning, NLP, and full-stack web development projects by Gayu Baruwa.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <div className="py-24 theme-bg-black min-h-screen">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center mb-16">
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
        </div>

        <div className="mt-10 space-y-32">
          {projects.map((project, index) => (
            <div key={project.id} className="group">
              {/* Project number */}
              <div className="flex items-center mb-6">
                <div className="theme-bg-red theme-text-cream font-bold px-4 py-2 text-sm mr-4">
                  0{index + 1}
                </div>
                <div className="h-px flex-grow bg-gradient-to-r from-theme-red to-transparent"></div>
              </div>

              <div
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-12`}
              >
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="portfolio-card aspect-video relative overflow-hidden p-1 theme-bg-black border border-theme-red/20 rounded-lg">
                    {/* Project image */}
                    <div className="absolute inset-0 theme-bg-black">
                      {project.imageUrl ? (
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{
                            objectFit: "cover",
                          }}
                          className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                      ) : (
                        <ProjectPlaceholder
                          title={project.title}
                          label={project.tags?.[0]}
                        />
                      )}
                    </div>

                    {/* Animated scan line */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div
                        className="h-px w-full bg-theme-red opacity-50"
                        style={{ animation: "scan 3s ease-in-out infinite" }}
                      ></div>
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-theme-red z-10"></div>
                    <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-theme-red z-10"></div>
                    <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-theme-red z-10"></div>
                    <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-theme-red z-10"></div>
                  </div>
                </div>

                {/* Project Information */}
                <div className="lg:w-1/2">
                  <h2 className="text-2xl font-bold theme-text-red mb-4 relative">
                    <span className="relative z-10">{project.title}</span>
                    <span className="absolute bottom-0 left-0 h-px w-12 theme-bg-red"></span>
                  </h2>

                  <p className="theme-text-cream mb-6">
                    {project.longDescription}
                  </p>

                  <h3 className="text-lg font-semibold theme-text-cream mb-4 mt-8">
                    Main Features:
                  </h3>
                  <ul className="space-y-2 mb-8 theme-text-cream">
                    {project.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="theme-text-red mr-3">&#x2022;</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-black/40 theme-text-red px-3 py-1 text-xs font-medium border border-theme-red/30 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(project.demoUrl || project.githubUrl) && (
                    <div className="flex space-x-4 mt-8">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          className="theme-bg-red theme-text-cream border border-theme-red hover:bg-transparent hover:theme-text-red px-6 py-3 transition-all duration-300 text-sm tracking-wider uppercase font-bold group flex items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>DEMO LIVE</span>
                          <svg
                            className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="bg-transparent border border-theme-red hover:theme-bg-red hover:theme-text-cream px-6 py-3 theme-text-red transition-colors duration-300 text-sm tracking-wider uppercase flex items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>SOURCE CODE</span>
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
              </div>
            </div>
          ))}
        </div>

        {/* Professional divider */}
        <div className="professional-divider my-24"></div>

        {/* Contact Section */}
        <div className="mt-16 lg:text-center">
          <h2 className="text-2xl font-bold theme-text-cream mb-6">
            <span className="relative">
              Interested in Working Together?
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-px w-12 theme-bg-red"></span>
            </span>
          </h2>
          <Link
            href="/contact"
            className="theme-bg-red theme-text-cream border border-theme-red hover:bg-transparent hover:theme-text-red px-6 py-3 transition-all duration-300 text-sm tracking-wider uppercase font-bold group inline-flex items-center"
          >
            <span>Contact Me</span>
            <svg
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
          </Link>
        </div>
      </div>
    </div>
  );
}
