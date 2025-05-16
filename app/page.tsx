"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function WelcomePage() {
  const [loaded, setLoaded] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const textToType = "PortoGayu";

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
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #333 1px, transparent 1px),
            linear-gradient(to bottom, #333 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      ></div>

      {/* Content container */}
      <div
        className={`relative z-10 text-center p-6 transition-all duration-1000 transform ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Crown emblem */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 relative">
            <div className="absolute inset-0 border border-gray-800 rounded-full"></div>
            <div className="absolute inset-5 border border-gray-800 rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-800"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 1L15 5L19 3L17 7L21 9L17 11L19 15L15 13L12 17L9 13L5 15L7 11L3 9L7 7L5 3L9 5L12 1Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main title with typing effect */}
        <h1 className="text-5xl md:text-7xl font-bold relative mb-8">
          <span className="text-white">{typedText}</span>
          <span
            className={`inline-block w-3 h-10 md:h-14 bg-gray-600 ml-1 animate-blink ${
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
            <h2 className="text-xl md:text-2xl text-gray-400 tracking-widest">
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
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
          <div className="mt-2 text-gray-600 text-sm">PORTFOLIO LOADING</div>
          <div className="mt-2 h-1 bg-gray-900 rounded overflow-hidden">
            <div
              className="h-full bg-gray-700 w-full"
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
            className="professional-button px-10 py-3 bg-black border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 uppercase tracking-widest text-sm transition-all group inline-flex items-center"
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
      <div className="fixed top-6 left-6 w-20 h-20 opacity-20">
        <div className="w-full h-full border-t border-l border-gray-800"></div>
      </div>
      <div className="fixed top-6 right-6 w-20 h-20 opacity-20">
        <div className="w-full h-full border-t border-r border-gray-800"></div>
      </div>
      <div className="fixed bottom-6 left-6 w-20 h-20 opacity-20">
        <div className="w-full h-full border-b border-l border-gray-800"></div>
      </div>
      <div className="fixed bottom-6 right-6 w-20 h-20 opacity-20">
        <div className="w-full h-full border-b border-r border-gray-800"></div>
      </div>

      {/* Copyright footer */}
      <div className="fixed bottom-6 left-0 right-0 text-center text-xs text-gray-700 tracking-wider">
        &copy; {new Date().getFullYear()} PortoGayu | Web Developer & Designer
      </div>
    </div>
  );
}
