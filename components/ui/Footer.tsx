export default function Footer() {
  return (
    <footer className="bg-black border-t border-theme-red py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Column 1 - Logo and Description */}
          <div className="space-y-4">
            <div className="text-xl font-bold tracking-wider">
              <span className="theme-text-red">Gayu</span>
              <span className="theme-text-cream">Baruwa</span>
            </div>
            <p className="text-sm theme-text-cream">
              A showcase of web development and design projects created with
              precision and creativity. Exploring the intersection of
              functionality and aesthetics.
            </p>
          </div>

          {/* Column 2 - Empty (spacer) */}
          <div></div>

          {/* Column 3 - Contact */}
          <div className="space-y-4">
            <h3 className="uppercase text-sm tracking-wider theme-text-red">
              CONTACT
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3 text-sm">
                <svg
                  className="h-5 w-5 text-theme-red mt-0.5"
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
                <span className="theme-text-cream">gayubaruwa27@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <svg
                  className="h-5 w-5 text-theme-red mt-0.5"
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
                <span className="theme-text-cream">
                  Surabaya, East Java, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-theme-red flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs theme-text-cream">
            &copy; {new Date().getFullYear()}{" "}
            <span className="theme-text-red">PortoGayu</span>. ALL RIGHTS
            RESERVED.
          </p>
          <div className="text-xs mt-4 sm:mt-0 theme-text-red">
            DESIGNED & DEVELOPED BY{" "}
            <span className="theme-text-cream">GAYU BARUWA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
