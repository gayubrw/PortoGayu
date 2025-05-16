import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative bg-black min-h-screen flex items-center pt-16">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 relative">
            {/* Professional introduction card */}
            <div className="inline-block mb-6">
              <div className="bg-black border border-gray-800 px-4 py-1 rounded-t-md">
                <p className="text-gray-600 text-xs">Welcome to</p>
              </div>
              <div className="bg-black border-x border-b border-gray-800 p-4 rounded-b-md dark-border">
                <p className="text-gray-400 typewriter-text">PortoGayu</p>
              </div>
            </div>

            <h1 className="text-5xl font-extrabold text-white">
              <span className="block opacity-80 text-base mb-2 tracking-widest text-gray-500">
                WEB PORTFOLIO OF
              </span>
              <span className="block text-white mt-2 dark-text">
                GAYU BARUWA
              </span>
            </h1>

            <p className="text-gray-400 text-xl font-mono">
              Crafting digital experiences with precision and creativity
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link href="/projects" className="btn-dark group">
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  &#x2192;
                </span>
                EXPLORE PROJECTS
              </Link>

              <Link
                href="/about"
                className="bg-transparent border border-gray-800 hover:border-gray-700 px-6 py-3 text-gray-400 hover:text-white transition-colors duration-300 text-sm tracking-wider uppercase"
              >
                ABOUT ME
              </Link>
            </div>

            <div className="pt-8">
              <p className="text-gray-600 font-mono text-xs">
                SPECIALIZING IN // WEB DEVELOPMENT // UI/UX DESIGN
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            {/* Abstract design element instead of profile image */}
            <div className="relative aspect-square rounded-md overflow-hidden">
              {/* Abstract geometric pattern */}
              <div className="absolute inset-0 z-10">
                <div className="w-full h-full relative grid grid-cols-3 grid-rows-3 gap-4 p-8">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                    <div
                      key={n}
                      className="bg-black border border-gray-800 group hover:border-gray-700 transition-all duration-500"
                      style={{
                        opacity: Math.random() * 0.5 + 0.3,
                        transform: `scale(${Math.random() * 0.2 + 0.8})`,
                        transition: "all 0.5s ease",
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-1/2 h-1/2 border border-gray-700 group-hover:border-gray-600 transition-all duration-500"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/20 to-black"></div>

              {/* Animated scanlines */}
              <div className="absolute inset-0 z-20 overflow-hidden">
                <div
                  className="h-px w-full bg-gray-800 opacity-50"
                  style={{ animation: "scan 4s ease-in-out infinite" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple social media icons without frames */}
        <div className="flex justify-center mt-16 space-x-8">
          <a
            href="https://github.com/gayubrw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <svg
              className="w-6 h-6 text-gray-600 hover:text-gray-400 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/gayubaruwa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <svg
              className="w-6 h-6 text-gray-600 hover:text-gray-400 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>

          <a
            href="https://instagram.com/gayubrw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
          >
            <svg
              className="w-6 h-6 text-gray-600 hover:text-gray-400 transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Diagonal line decoration */}
      <div className="hidden md:block absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-r from-transparent to-gray-800 transform -rotate-45 origin-bottom-right"></div>

      {/* Corner accents */}
      <div className="hidden md:block absolute top-16 left-8 w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-px bg-gray-800"></div>
        <div className="absolute top-0 left-0 h-full w-px bg-gray-800"></div>
      </div>

      <div className="hidden md:block absolute bottom-8 right-8 w-16 h-16">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gray-800"></div>
        <div className="absolute bottom-0 right-0 h-full w-px bg-gray-800"></div>
      </div>
    </div>
  );
}
