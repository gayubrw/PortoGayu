import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Column 1 - Logo and Description */}
          <div className="space-y-4">
            <div className="text-xl font-bold tracking-wider text-white">
              Porto<span className="text-gray-500">Gayu</span>
            </div>
            <p className="text-gray-500 text-sm">
              A showcase of web development and design projects created with
              precision and creativity. Exploring the intersection of
              functionality and aesthetics.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div className="space-y-4">
            <h3 className="text-gray-400 uppercase text-sm tracking-wider">
              NAVIGATION
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="space-y-4">
            <h3 className="text-gray-400 uppercase text-sm tracking-wider">
              CONTACT
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3 text-sm">
                <svg
                  className="h-5 w-5 text-gray-500 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-500">gayubaruwa27@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <svg
                  className="h-5 w-5 text-gray-500 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-500">
                  Surabaya, East Java, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} PortoGayu. ALL RIGHTS RESERVED.
          </p>
          <div className="text-gray-600 text-xs mt-4 sm:mt-0">
            DESIGNED & DEVELOPED BY GAYU BARUWA
          </div>
        </div>
      </div>
    </footer>
  );
}
