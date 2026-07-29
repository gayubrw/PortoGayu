"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { HeroDataType } from "@/lib/types";

export default function HeroScene({ heroData }: { heroData: HeroDataType }) {
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll-driven parallax: the background slowly zooms while the content
  // drifts down and fades out, so the hero gracefully "recedes" into Projects.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const y = window.scrollY;
      const vh = window.innerHeight || 1;
      const p = Math.min(y / vh, 1); // progress across the first viewport

      if (bgRef.current) {
        bgRef.current.style.transform = `scale(${1 + p * 0.12})`;
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${y * 0.18}px)`;
        contentRef.current.style.opacity = `${Math.max(0, 1 - p * 1.15)}`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background Image (parallax zoom) */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          backgroundImage: "url('/images/bghero1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Background subtle pattern overlay */}
      <div className="absolute inset-0 z-[5]">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #A11312 1px, transparent 1px),
              linear-gradient(to bottom, #A11312 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content (drift + fade on scroll) */}
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 will-change-transform"
      >
        <div className="flex flex-col items-center justify-center text-center pt-8 pb-28">
          {/* Main title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold theme-text-red tracking-tight">
            {heroData.tagline}
          </h1>

          {/* Description */}
          <p className="mt-6 text-base md:text-lg theme-text-cream leading-relaxed max-w-2xl opacity-90">
            {heroData.description}
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            {heroData.ctaButtons.map((button, index) => {
              const cls =
                button.type === "primary"
                  ? "bg-theme-red text-theme-cream border border-theme-red hover:bg-transparent hover:text-theme-red px-6 py-3 transition-all duration-300 text-sm tracking-wider uppercase font-bold"
                  : "bg-transparent border border-theme-red hover:bg-theme-red hover:text-theme-cream px-6 py-3 text-theme-red transition-colors duration-300 text-sm tracking-wider uppercase";
              const isExternal =
                button.href.startsWith("http") ||
                button.href.startsWith("mailto:");
              return isExternal ? (
                <a key={index} href={button.href} className={cls}>
                  {button.text.toUpperCase()}
                </a>
              ) : (
                <Link key={index} href={button.href} className={cls}>
                  {button.text.toUpperCase()}
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="mt-8 mb-6 h-px w-14 bg-theme-red/40"></div>

          {/* Social media icons */}
          <div className="flex items-center justify-center gap-7">
            <a
              href="https://github.com/gayubrw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <svg
                className="w-6 h-6 hover:text-theme-red transition-colors theme-text-cream"
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
                className="w-6 h-6 hover:text-theme-red transition-colors theme-text-red"
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
                className="w-6 h-6 hover:text-theme-red transition-colors theme-text-cream"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>

            <a
              href="https://x.com/gayubrw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter) Profile"
            >
              <svg
                className="w-6 h-6 hover:text-theme-red transition-colors theme-text-cream"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Email • Location */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm theme-text-cream">
            <a className="tracking-wide hover:theme-text-red transition-colors">
              gayubaruwa27@gmail.com
            </a>
            <span className="hidden sm:inline theme-text-red/70">&bull;</span>
            <span className="opacity-80">Surabaya, East Java, Indonesia</span>
          </div>

          {/* Download CV */}
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group/cv mt-6 inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase theme-text-red hover:theme-text-cream transition-colors"
          >
            <span className="border-b border-theme-red/40 group-hover/cv:border-theme-cream pb-1 transition-colors">
              Download CV
            </span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll to Projects button */}
      <Link
        href="#projects"
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2
                   flex items-center justify-center
                   group transition-all duration-300 z-20"
        aria-label="Scroll to Projects"
      >
        <svg
          className="w-8 h-8 theme-text-red animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </Link>
    </div>
  );
}
