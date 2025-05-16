import Link from "next/link";
import Image from "next/image"; // Import Image component
import { projects } from "@/lib/projectData";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center mb-4">
            <div className="h-px w-8 bg-gray-700"></div>
            <span className="mx-3 text-gray-500 text-sm tracking-widest uppercase">
              Portfolio
            </span>
            <div className="h-px w-8 bg-gray-700"></div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">
            Selected Projects
          </h2>

          <p className="max-w-2xl text-gray-400 text-base">
            Explore my recent work showcasing my expertise in web development
            and UI/UX design. Each project represents a unique challenge and
            solution.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-24">
          <div className="portfolio-card p-1">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project Preview with actual image */}
              <div className="relative h-64 md:h-auto bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  {/* Replace SVG with actual image */}
                  <Image
                    src={projects[0].imageUrl}
                    alt={projects[0].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                {/* Project number */}
                <div className="project-number absolute top-4 left-4 z-10">
                  01
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {projects[0].title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {projects[0].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects[0].tags.map((tag, index) => (
                      <span key={index} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-800">
                  <a
                    href={projects[0].demoUrl}
                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="mr-2 text-sm uppercase tracking-wider">
                      View Project
                    </span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>

                  <a
                    href={projects[0].githubUrl}
                    className="text-gray-600 hover:text-gray-400 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional divider */}
        <div className="professional-divider my-16"></div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(1).map((project, index) => (
            <div key={project.id} className="portfolio-card hover-lift group">
              {/* Project Image with actual image */}
              <div className="relative h-48 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  {/* Replace SVG with actual image */}
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <a
                    href={project.demoUrl}
                    className="px-4 py-2 border border-gray-400 text-gray-200 text-sm hover:bg-gray-900 transition-colors mx-2"
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="px-4 py-2 border border-gray-600 text-gray-400 text-sm hover:bg-gray-900 transition-colors mx-2"
                  >
                    Code
                  </a>
                </div>

                {/* Project number */}
                <div className="project-number absolute top-4 left-4 z-10">
                  0{index + 2}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-900">
                  <a
                    href={project.demoUrl}
                    className="inline-flex items-center text-gray-500 hover:text-gray-300 transition-colors text-sm"
                  >
                    <span>View details</span>
                    <svg
                      className="w-3 h-3 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* View More Card */}
          <div className="portfolio-card hover-lift flex flex-col items-center justify-center p-8 min-h-[300px]">
            <div className="w-16 h-16 border border-gray-800 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-gray-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-gray-500 mb-4">
              More Projects
            </h3>
            <p className="text-gray-600 text-sm text-center mb-6">
              Explore my complete portfolio with additional projects and case
              studies.
            </p>

            <Link href="/projects" className="btn-dark text-sm">
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
