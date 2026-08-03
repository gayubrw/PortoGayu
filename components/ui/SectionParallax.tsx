"use client";

import { useRef, useEffect, ReactNode } from "react";

/**
 * Scroll-linked section transition: as the section enters from the bottom its
 * content drifts up + fades in, and as it leaves past the top it drifts up +
 * fades out — continuously, so it plays in BOTH scroll directions (unlike the
 * one-shot Reveal). Mirrors the hero -> projects "recede" feel between the
 * Projects and About sections.
 *
 * The outer element is measured (never transformed) so reading its rect can't
 * feed back into the transform we apply to the inner element. Respects
 * prefers-reduced-motion (renders static).
 */
export default function SectionParallax({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let raf = 0;
    const update = () => {
      const rect = outer.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const h = rect.height || 1;
      const span = vh * 0.5; // scroll distance over which it fades in/out

      // enter: 0 when the top sits at the viewport bottom, 1 once well inside.
      const enter = Math.min(Math.max((vh - rect.top) / span, 0), 1);
      // exit: 0 once the bottom has left the top, 1 while still below it.
      const exit = Math.min(Math.max((rect.top + h) / span, 0), 1);
      const p = Math.min(enter, exit); // 0 = out of view, 1 = fully settled

      inner.style.opacity = String(0.1 + p * 0.9);
      const drift = (1 - enter) * 48 - (1 - exit) * 48;
      inner.style.transform = `translate3d(0, ${drift}px, 0)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={outerRef} className={className}>
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
