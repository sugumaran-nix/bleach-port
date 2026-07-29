"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";

interface Props {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: Props) {
  const [phase, setPhase] = useState<"drawing" | "text" | "slash" | "done">("drawing");
  const [typeText, setTypeText] = useState("");
  const slashRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const fullName = "Your Name";
  const fullRole = "Full Stack Developer";

  // Phase 1: kanji draws, then show text
  useEffect(() => {
    const timer = setTimeout(() => setPhase("text"), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Phase 2: typewriter
  useEffect(() => {
    if (phase !== "text") return;
    const combined = fullName + " · " + fullRole;
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setTypeText(combined.slice(0, i));
      if (i >= combined.length) {
        clearInterval(iv);
        setTimeout(() => setPhase("slash"), 400);
      }
    }, 45);
    return () => clearInterval(iv);
  }, [phase]);

  // Phase 3: GSAP slash then unmount
  useEffect(() => {
    if (phase !== "slash") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
      return;
    }
    const slash = slashRef.current;
    const container = containerRef.current;
    if (!slash || !container) return;

    gsap.fromTo(
      slash,
      { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
      {
        clipPath: "polygon(0% 0%, 110% 0%, 110% 100%, 0% 100%)",
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.to(container, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
            onComplete: () => {
              setPhase("done");
              onComplete();
            },
          });
        },
      }
    );
  }, [phase, onComplete]);

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      <div
        ref={containerRef}
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
        style={{ backgroundColor: "var(--bg-void)" }}
      >
        {/* Kanji SVG draw */}
        <svg
          viewBox="0 0 120 140"
          width="120"
          height="140"
          className="mb-8"
          style={{ filter: "drop-shadow(0 0 12px rgba(193,18,31,0.6))" }}
        >
          {/* 黒 (black/darkness) — simplified strokes */}
          <g fill="none" stroke="var(--white-soul)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            {/* Top horizontal */}
            <line
              x1="20" y1="18" x2="100" y2="18"
              strokeDasharray="80" strokeDashoffset="80"
              style={{
                animation: phase === "drawing" ? "drawStroke 0.4s ease forwards 0.1s" : "none",
                strokeDashoffset: phase !== "drawing" ? 0 : undefined,
              }}
            />
            {/* Vertical center */}
            <line
              x1="60" y1="18" x2="60" y2="55"
              strokeDasharray="40" strokeDashoffset="40"
              style={{
                animation: phase === "drawing" ? "drawStroke 0.3s ease forwards 0.5s" : "none",
                strokeDashoffset: phase !== "drawing" ? 0 : undefined,
              }}
            />
            {/* Middle box top */}
            <path
              d="M30 40 L90 40 L90 75 L30 75 Z"
              strokeDasharray="200" strokeDashoffset="200"
              style={{
                animation: phase === "drawing" ? "drawStroke 0.6s ease forwards 0.8s" : "none",
                strokeDashoffset: phase !== "drawing" ? 0 : undefined,
              }}
            />
            {/* Inner horizontal */}
            <line
              x1="30" y1="57" x2="90" y2="57"
              strokeDasharray="60" strokeDashoffset="60"
              style={{
                animation: phase === "drawing" ? "drawStroke 0.3s ease forwards 1.4s" : "none",
                strokeDashoffset: phase !== "drawing" ? 0 : undefined,
              }}
            />
            {/* Bottom left leg */}
            <line
              x1="40" y1="75" x2="20" y2="125"
              strokeDasharray="55" strokeDashoffset="55"
              style={{
                animation: phase === "drawing" ? "drawStroke 0.35s ease forwards 1.7s" : "none",
                strokeDashoffset: phase !== "drawing" ? 0 : undefined,
              }}
            />
            {/* Bottom right leg */}
            <line
              x1="80" y1="75" x2="100" y2="125"
              strokeDasharray="55" strokeDashoffset="55"
              style={{
                animation: phase === "drawing" ? "drawStroke 0.35s ease forwards 1.7s" : "none",
                strokeDashoffset: phase !== "drawing" ? 0 : undefined,
              }}
            />
            {/* Bottom stroke */}
            <line
              x1="20" y1="125" x2="100" y2="125"
              strokeDasharray="80" strokeDashoffset="80"
              style={{
                animation: phase === "drawing" ? "drawStroke 0.4s ease forwards 2.0s" : "none",
                strokeDashoffset: phase !== "drawing" ? 0 : undefined,
              }}
            />
          </g>
        </svg>

        {/* Typewriter text */}
        <div className="h-8 flex items-center">
          {(phase === "text" || phase === "slash") && (
            <p
              className="font-accent text-lg tracking-[0.3em] uppercase text-center"
              style={{ color: "var(--white-soul)" }}
            >
              {typeText}
              <span style={{ animation: "blink 0.8s step-end infinite", color: "var(--red-reiatsu)" }}>|</span>
            </p>
          )}
        </div>

        {/* Red slash overlay */}
        <div
          ref={slashRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "var(--red-reiatsu)",
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            transform: "skewX(-8deg)",
          }}
        />
      </div>
    </AnimatePresence>
  );
}
