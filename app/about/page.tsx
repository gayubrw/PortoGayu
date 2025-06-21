import type { Metadata } from "next";
import { experiences, education, personalInfo } from "@/lib/aboutData";
import Image from "next/image"; // Import Image component

export const metadata: Metadata = {
  title: "PortoGayu | About Me",
  description:
    "Informasi tentang latar belakang, pengalaman, dan pendidikan saya.",
};

export default function AboutPage() {
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
              About
            </span>
            <div className="h-px w-8 bg-gray-700"></div>
          </div>

          <h1 className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl mb-4">
            About Me
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            Let&apos;s get to know me.
          </p>
        </div>

        {/* Profile Section */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Replaced Abstract geometric element with actual profile image */}
          <div className="portfolio-card p-2 aspect-square relative overflow-hidden flex items-center justify-center">
            <Image
              src="/images/profilepicture.jpg"
              alt={personalInfo.name}
              width={500}
              height={500}
              className="rounded-md object-cover w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Decorative corner elements - kept for consistent styling, but can be removed if not desired over an image */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-gray-700"></div>
            <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-gray-700"></div>
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-gray-700"></div>
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-gray-700"></div>
          </div>

          {/* Bio content */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6 relative">
              <span className="relative z-10">{personalInfo.name}</span>
              <span className="absolute bottom-0 left-0 h-px w-12 bg-gray-700"></span>
            </h2>
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="text-gray-400">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Professional divider */}
        <div className="professional-divider my-16"></div>

        {/* Experience Section */}
        <div className="mb-24">
          {/* Section header */}
          <h2 className="text-2xl font-bold text-white mb-12 lg:text-center">
            <span className="relative">
              Organizational Experience
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-px w-12 bg-gray-700"></span>
            </span>
          </h2>

          {/* Timeline style experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="portfolio-card hover-lift p-6 relative">
                  {/* Item number */}
                  <div className="project-number absolute -top-4 -left-4">
                    0{index + 1}
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-bold text-white">
                        {exp.position}
                      </h3>
                      <div className="text-sm text-gray-500">{exp.period}</div>
                    </div>

                    <div className="text-lg text-gray-400">{exp.company}</div>

                    <p className="text-gray-500">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-12 lg:text-center">
            <span className="relative">
              Education
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-px w-12 bg-gray-700"></span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="portfolio-card hover-lift p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {edu.degree}
                </h3>
                <div className="text-lg text-gray-400 mb-2">
                  {edu.institution}
                </div>
                <div className="text-sm text-gray-500 mb-4 pb-4 border-b border-gray-800">
                  {edu.period}
                </div>
                <p className="text-gray-500">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section - With Logo */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-12 lg:text-center">
            <span className="relative">
              Technical Skills
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-px w-12 bg-gray-700"></span>
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* HTML */}
            <div className="bg-black border border-gray-800 hover:border-gray-700 rounded-none p-4 flex flex-col items-center justify-center text-center transition-all hover-lift h-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-12 h-12 mb-2 text-orange-600 fill-current"
              >
                <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
              </svg>
              <span className="font-medium text-gray-400 hover:text-white transition-colors text-xs">
                HTML
              </span>
            </div>

            {/* CSS */}
            <div className="bg-black border border-gray-800 hover:border-gray-700 rounded-none p-4 flex flex-col items-center justify-center text-center transition-all hover-lift h-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="w-12 h-12 mb-2 text-blue-500 fill-current"
              >
                <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
              </svg>
              <span className="font-medium text-gray-400 hover:text-white transition-colors text-xs">
                CSS
              </span>
            </div>

            {/* JavaScript */}
            <div className="bg-black border border-gray-800 hover:border-gray-700 rounded-none p-4 flex flex-col items-center justify-center text-center transition-all hover-lift h-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-12 h-12 mb-2 text-yellow-400 fill-current"
              >
                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
              </svg>
              <span className="font-medium text-gray-400 hover:text-white transition-colors text-xs">
                JavaScript
              </span>
            </div>

            {/* TypeScript */}
            <div className="bg-black border border-gray-800 hover:border-gray-700 rounded-none p-4 flex flex-col items-center justify-center text-center transition-all hover-lift h-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-12 h-12 mb-2 text-blue-600 fill-current"
              >
                <path d="M23 23h466v466H23V23z" fill="#3178c6" />
                <path
                  d="M256 317.5c0-19.5 8.1-37.1 18-51.8 9.8-14.6 23.4-27.4 40.5-35.3 10.8-5 22.7-7.9 35.1-7.9 29.3 0 53.5 13.5 66.8 35 7.2 11.7 11 24.8 11 38.3 0 13.4-3.7 26.3-10.7 37.8-13.6 22.7-38.4 36.7-68.2 36.7-15.5-.1-30.4-3.8-43.3-10.4-24.6-12.5-41-32.1-47.3-40.6-1.7-2.3-1.9-5.4-.4-7.8 1.5-2.5 4.4-3.7 7.2-3l.3.1c19.4 5.9 39.6 9 49.2 9 15.1 0 25.3-9.7 25.3-23.9 0-13.6-10.1-22.1-26.6-22.1-5.5 0-10.4 1.6-12.9 5.5-2.2 3.4-5.9 9.9-5.6 19-6.2-7.5-29.3-33.3-33.3-45.5 17.4 5.1 31.4-8.7 38.2-14.9 22.5-20.5 44.5-17.1 58.5-10.2-12-2.1-35.1-5.1-50.8 3.8-14.9 8.4-25.2 16.7-32.8 30-5.3 9.2-9.6 19-11 29.2zM187 211h120v30H243v119h-35V241h-21v-30z"
                  fill="#fff"
                />
              </svg>
              <span className="font-medium text-gray-400 hover:text-white transition-colors text-xs">
                TypeScript
              </span>
            </div>

            {/* React */}
            <div className="bg-black border border-gray-800 hover:border-gray-700 rounded-none p-4 flex flex-col items-center justify-center text-center transition-all hover-lift h-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-12 h-12 mb-2 text-blue-400 fill-current"
              >
                <path
                  d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.6-67.2 10.6-1.9-7.8-3.5-15.8-4.7-24.1-9.1-52.4-1.8-92.2 13.8-95.6zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-16.9-29.3 0-18.4 31.1-41.7 81.9-54.8 5-1.3 10.1-2.4 15.2-3.5 5.2 16.5 11.4 33.2 18.7 49.8-7.1 16.7-13.1 33.8-18.5 50.9zm-2.9 74.2c-8.6 3.7-17.5 6.5-27.5 8.5-11.2 2.2-22.9 2.6-34.2-.2-9.9-2.4-18.6-9.2-23.8-17.7-9.4-15.3.5-37.9 25.9-61 4-3.6 8.1-7.1 12.5-10.5 9.5 27.7 23.6 54.3 41.5 79.2-4 4.3-8.1 8.7-12.3 13.1zm136-138.9c-9.7 5.8-15.3 15.5-16.2 25.8-1.2 14.8 7.9 29.5 20.6 32.2 3.3.6 6.7.9 10 .9 14.7 0 29.5-8 40.5-22 3.8-5 7.1-10.6 9.8-16.5 3.5-7.8 5.3-16.1 4.9-24.5-.3-6-2.4-12-6.4-17-8.5-10.5-22.3-16.1-36.7-16.1-10.5 0-21.1 2.7-30.9 6.6-17.2 6.9-31.5 20.9-39.7 37.5-7.3 14.9-10.1 31.9-8.2 48.1 2.2 17.8 10.8 34.1 24.4 45.7 15.6 13.3 35.9 19.1 55.7 12.5 10.7-3.6 20.3-11.3 27.9-22.1l.6-.8-3.5-2.2c-8.2-5-16.7-9.5-25.6-13.2-6.8 10.6-16.1 14.5-23.1 12.3-5.4-1.7-9.6-8.9-9.2-17.5.3-6.3 3.3-12.5 8.3-17.2 3-2.7 6.5-4.9 10.2-6.4zm103.7-94.3c5.9-8.7 29-32.7 32.8-34 .4 0 .9.1 1.5.3 11.2 4 12.9 32.6 6.8 75.5-.5 3.3-1 6.7-1.6 10.2-22.6-5.2-45.6-8.8-69-10.7-13.4-18.8-27.9-36.9-43.2-54 4.8-4.6 9.7-9 14.5-13.1 15.6-13.2 29.5-21.3 39.2-21.3 2.5 0 4.9.5 7 1.6 12.9 6.7 14.1 38.5 12 45.5zm-3.9 93.3c-15.3 1.3-31 3.2-46.9 5.7 5.5-9.3 10.6-18.8 15.5-28.5s9.5-19.5 13.8-29.4c12.1 13.9 23.3 28.4 33.5 43.5-5.3 3-10.6 5.8-15.9 8.7zm29.7-33.7c-10.1-12.8-21-25.1-32.5-36.7 2.8.1 5.5.2 8.3.2 41.3 0 77-14.4 86.8-46.6 4.5 14.9 5.4 32.3 4 50.7-1.1 15.1-4.1 30.3-8.8 45-8.1-2.6-21.4-7.1-40.8-16.2-5.7-3-11.4-6.5-17-10.4z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-medium text-gray-400 hover:text-white transition-colors text-xs">
                React
              </span>
            </div>

            {/* Next.js */}
            <div className="bg-black border border-gray-800 hover:border-gray-700 rounded-none p-4 flex flex-col items-center justify-center text-center transition-all hover-lift h-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 180 180"
                className="w-12 h-12 mb-2 text-white fill-current"
              >
                <mask
                  id="mask0"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="180"
                  height="180"
                >
                  <circle cx="90" cy="90" r="90" fill="black" />
                </mask>
                <g mask="url(#mask0)">
                  <circle cx="90" cy="90" r="90" fill="black" />
                  <path
                    d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                    fill="white"
                  />
                  <rect x="115" y="54" width="12" height="72" fill="white" />
                </g>
              </svg>
              <span className="font-medium text-gray-400 hover:text-white transition-colors text-xs">
                Next.js
              </span>
            </div>
            {/* Tailwind CSS */}
            <div className="bg-black border border-gray-800 hover:border-gray-700 rounded-none p-4 flex flex-col items-center justify-center text-center transition-all hover-lift h-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 54 33"
                className="w-12 h-12 mb-2 text-cyan-400 fill-current"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-medium text-gray-400 hover:text-white transition-colors text-xs">
                Tailwind CSS
              </span>
            </div>
            {/* Node.js */}
            <div className="bg-black border border-gray-800 hover:border-gray-700 rounded-none p-4 flex flex-col items-center justify-center text-center transition-all hover-lift h-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-12 h-12 mb-2 text-green-500 fill-current"
              >
                <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" />
              </svg>
              <span className="font-medium text-gray-400 hover:text-white transition-colors text-xs">
                Node.js
              </span>
            </div>
            {/* Laravel */}
            <div className="bg-black border border-gray-800 hover:border-gray-700 rounded-none p-4 flex flex-col items-center justify-center text-center transition-all hover-lift h-24">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-12 h-12 mb-2 text-red-500 fill-current"
              >
                <path d="M504.4,115.83a5.72,5.72,0,0,0-.28-.68,8.52,8.52,0,0,0-.53-1.25,6,6,0,0,0-.54-.71,9.36,9.36,0,0,0-.72-.94c-.23-.22-.52-.4-.77-.6a8.84,8.84,0,0,0-.9-.68L404.4,55.55a8,8,0,0,0-8,0L300.12,111h0a8.07,8.07,0,0,0-.88.69,7.68,7.68,0,0,0-.78.6,8.23,8.23,0,0,0-.72.93c-.17.24-.39.45-.54.71a9.7,9.7,0,0,0-.52,1.25c-.08.23-.21.44-.28.68a8.08,8.08,0,0,0-.28,2.08V223.18l-80.22,46.19V63.44a7.8,7.8,0,0,0-.28-2.09c-.06-.24-.2-.45-.28-.68a8.35,8.35,0,0,0-.52-1.24c-.14-.26-.37-.47-.54-.72a9.36,9.36,0,0,0-.72-.94,9.46,9.46,0,0,0-.78-.6,9.8,9.8,0,0,0-.88-.68h0L115.61,1.07a8,8,0,0,0-8,0L11.34,56.49h0a6.52,6.52,0,0,0-.88.69,7.81,7.81,0,0,0-.79.6,8.15,8.15,0,0,0-.71.93c-.18.25-.4.46-.55.72a7.88,7.88,0,0,0-.51,1.24,6.46,6.46,0,0,0-.29.67,8.18,8.18,0,0,0-.28,2.1v329.7a8,8,0,0,0,4,6.95l192.5,110.84a8.83,8.83,0,0,0,1.33.54,8.72,8.72,0,0,0,2.71.45,8.06,8.06,0,0,0,2.68-.46,8.81,8.81,0,0,0,1.34-.54L404.4,400.09a8,8,0,0,0,4-6.95V287.88l92.24-53.11a8,8,0,0,0,4-7V117.92A8.63,8.63,0,0,0,504.4,115.83ZM111.6,17.28h0l80.19,46.15-80.2,46.18L31.41,63.44Zm88.25,60V278.6l-46.53,26.79-33.69,19.4V123.5l46.53-26.79Zm0,412.78L23.37,388.5V77.32L57.06,96.7l46.52,26.8V338.68a6.94,6.94,0,0,0,.12.9,8,8,0,0,0,.16,1.18h0a5.92,5.92,0,0,0,.38.9,6.38,6.38,0,0,0,.42,1v0a8.54,8.54,0,0,0,.6.78,7.62,7.62,0,0,0,.66.84l0,0c.23.22.52.38.77.58a8.93,8.93,0,0,0,.86.66l0,0,0,0,92.19,52.18Zm8-106.17-80.06-45.32,84.09-48.41,92.26-53.11,80.13,46.13-58.8,33.56Zm184.52,4.57L215.88,490.11V397.8L346.6,323.2l45.77-26.15Zm0-119.13L358.68,250l-46.53-26.79V131.79l33.69,19.4L392.37,178Zm8-105.28-80.2-46.17,80.2-46.16,80.18,46.15Zm8,105.28V178L455,151.19l33.68-19.4v91.39Z" />
              </svg>
              <span className="font-medium text-gray-400 hover:text-white transition-colors text-xs">
                Laravel
              </span>
            </div>
          </div>
        </div>

        {/* Contact button */}
        <div className="mt-24 text-center">
          <a href="/contact" className="btn-dark inline-block group">
            <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
              &#x2192;
            </span>
            CONTACT ME
          </a>
        </div>
      </div>
    </div>
  );
}
