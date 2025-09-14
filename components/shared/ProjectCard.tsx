import Link from "next/link";
import Image from "next/image"; // Import komponen Image dari Next.js
import { ProjectType } from "@/lib/types";

interface ProjectCardProps {
  project: ProjectType;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="theme-bg-black border border-theme-red/20 rounded-lg overflow-hidden shadow-lg">
      <div className="h-48 w-full relative theme-bg-black">
        {/* Menampilkan gambar proyek yang sebenarnya */}
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform hover:scale-105 duration-300"
          />
        ) : (
          // Placeholder hanya ditampilkan jika tidak ada imageUrl
          <div className="w-full h-full flex items-center justify-center theme-text-cream">
            <svg className="h-12 w-12" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-theme-cream">
          {project.title}
        </h3>
        <p className="mt-2 text-sm theme-text-cream">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium theme-bg-red/20 theme-text-red"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-4 py-4 sm:px-6 theme-bg-black border-t border-theme-red/20 flex justify-between">
        <Link
          href={`/projects/${project.id}`}
          className="text-sm font-medium text-theme-red hover:text-theme-cream"
        >
          Detail
        </Link>

        <div className="flex space-x-4">
          <a
            href={project.demoUrl}
            className="text-sm font-medium text-theme-red hover:text-theme-cream"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          <a
            href={project.githubUrl}
            className="text-sm font-medium text-theme-red hover:text-theme-cream"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
