"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function WelcomePage() {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const textToType = "GayuBaruwa";

  useEffect(() => {
    // Set loaded state after component mount for animation
    setLoaded(true);

    // Typing animation effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/bglandingpage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content container */}
      <div
        className={`relative z-20 text-center p-6 transition-all duration-1000 transform ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Logo */}
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/images/icon2.jpg"
              alt="Logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        </div>

        {/* Main title with typing effect */}
        <h1 className="text-5xl md:text-7xl font-bold relative mb-8">
          <span className="theme-text-red">{typedText}</span>
          <span
            className={`inline-block w-3 h-10 md:h-14 bg-theme-red ml-1 animate-blink ${
              typingComplete ? "opacity-0" : "opacity-100"
            }`}
          ></span>
        </h1>

        {/* Professional subtitle */}
        <div
          className={`mt-8 mb-12 professional-frame px-8 py-3 transition-all duration-500 transform ${
            typingComplete
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <div className="relative">
            <h2 className="text-xl md:text-2xl tracking-widest theme-text-cream">
              WELCOME
            </h2>
          </div>
        </div>

        {/* Loading indicator */}
        <div
          className={`my-10 w-64 mx-auto transition-all duration-1000 ${
            typingComplete ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-theme-red to-transparent"></div>
          <div className="mt-2 text-sm theme-text-red">PORTFOLIO LOADING</div>
          <div className="mt-2 h-1 bg-black border border-theme-red/30 rounded overflow-hidden">
            <div
              className="h-full bg-theme-red w-full"
              style={{ animation: "loadingBar 3s ease-in-out forwards" }}
            ></div>
          </div>
        </div>

        {/* Enter button */}
        <div
          className={`mt-10 transition-all duration-500 transform ${
            typingComplete
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <Link
            href="/home"
            className="professional-button px-10 py-3 bg-theme-red border border-theme-red text-theme-cream hover:bg-transparent hover:text-theme-red uppercase tracking-widest text-sm transition-all group inline-flex items-center font-bold"
          >
            <span>Enter Portfolio</span>
            <svg
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
          </Link>
        </div>
      </div>

      {/* Corner elements */}
      {/* Decorative corner elements */}
      <div className="absolute top-4 left-4 w-6 h-6">
        <div className="w-full h-full border-t border-l border-theme-red"></div>
      </div>
      <div className="absolute top-4 right-4 w-6 h-6">
        <div className="w-full h-full border-t border-r border-theme-red"></div>
      </div>
      <div className="absolute bottom-4 left-4 w-6 h-6">
        <div className="w-full h-full border-b border-l border-theme-red"></div>
      </div>
      <div className="absolute bottom-4 right-4 w-6 h-6">
        <div className="w-full h-full border-b border-r border-theme-red"></div>
      </div>

      {/* Copyright footer */}
      <div className="fixed bottom-6 left-0 right-0 text-center text-xs theme-text-cream tracking-wider">
        &copy; {new Date().getFullYear()}{" "}
        <span className="theme-text-red">PortoGayu</span> | Web Developer &
        Designer
      </div>
    </div>
  );
}
