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
