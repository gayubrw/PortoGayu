import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projectData";

export const metadata: Metadata = {
  title: "PortoGayu | Projects",
  description: "Kumpulan proyek terbaru yang telah saya kerjakan.",
};

export default function ProjectsPage() {
  return (
    <div className="py-24 bg-black min-h-screen">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #333 1px, transparent 1px),
              linear-gradient(to bottom, #333 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center mb-16">
          {/* Section heading with decorative line */}
          <div className="inline-flex items-center mb-4">
            <div className="h-px w-8 bg-gray-700"></div>
            <span className="mx-3 text-gray-500 text-sm tracking-widest uppercase">
              Projects
            </span>
            <div className="h-px w-8 bg-gray-700"></div>
          </div>

          <h1 className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl mb-4">
            My Projects
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Here are some of the projects I have worked on.
          </p>
        </div>

        <div className="mt-10 space-y-32">
          {projects.map((project, index) => (
            <div key={project.id} className="group">
              {/* Project number */}
              <div className="flex items-center mb-6">
                <div className="project-number mr-4">0{index + 1}</div>
                <div className="h-px flex-grow bg-gradient-to-r from-gray-800 to-transparent"></div>
              </div>

              <div
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-12`}
              >
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="portfolio-card aspect-video relative overflow-hidden p-1 bg-gray-900 rounded-lg">
                    {/* Project image */}
                    <div className="absolute inset-0 bg-black">
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
                    </div>

                    {/* Animated scan line */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div
                        className="h-px w-full bg-gray-800 opacity-30"
                        style={{ animation: "scan 3s ease-in-out infinite" }}
                      ></div>
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-gray-700 z-10"></div>
                    <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-gray-700 z-10"></div>
                    <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-gray-700 z-10"></div>
                    <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-gray-700 z-10"></div>
                  </div>
                </div>

                {/* Project Information */}
                <div className="lg:w-1/2">
                  <h2 className="text-2xl font-bold text-white mb-4 relative">
                    <span className="relative z-10">{project.title}</span>
                    <span className="absolute bottom-0 left-0 h-px w-12 bg-gray-700"></span>
                  </h2>

                  <p className="text-gray-400 mb-6">
                    {project.longDescription}
                  </p>

                  <h3 className="text-lg font-semibold text-white mb-4 mt-8">
                    Main Features:
                  </h3>
                  <ul className="space-y-2 mb-8 text-gray-500">
                    {project.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-gray-700 mr-3">&#x2022;</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4 mt-8">
                    <a
                      href={project.demoUrl}
                      className="btn-dark group flex items-center"
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
                    <a
                      href={project.githubUrl}
                      className="bg-transparent border border-gray-800 hover:border-gray-700 px-6 py-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase flex items-center"
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional divider */}
        <div className="professional-divider my-24"></div>

        {/* Contact Section */}
        <div className="mt-16 lg:text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            <span className="relative">
              Interested in Working Together?
              <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-px w-12 bg-gray-700"></span>
            </span>
          </h2>
          <Link
            href="/contact"
            className="btn-dark group inline-flex items-center"
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
