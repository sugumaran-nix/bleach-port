"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HeroParticles from "./HeroParticles";

gsap.registerPlugin();

const TYPEWRITER_STRINGS = [
  "Full Stack Developer",
  "AI/ML Engineer",
  "System Architect",
  "Your Specialization",
];

function Typewriter() {
  const [text, setText] = useState("");
  const [strIdx, setStrIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPEWRITER_STRINGS[strIdx];
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setStrIdx((i) => (i + 1) % TYPEWRITER_STRINGS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, strIdx, deleting]);

  return (
    <span>
      {text}
      <span
        className="inline-block w-0.5 h-5 ml-0.5 align-middle"
        style={{
          backgroundColor: "var(--red-reiatsu)",
          animation: "blink 0.8s step-end infinite",
        }}
      />
    </span>
  );
}

function SpotlightOverlay() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(27,79,228,0.08), transparent 60%)`;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none transition-all duration-200" />
  );
}

export default function HeroSection() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = nameRef.current;
    if (!el) return;

    const text = el.textContent || "";
    const chars = text.split("").map((c) => {
      const span = document.createElement("span");
      span.textContent = c === " " ? "\u00a0" : c;
      span.style.display = "inline-block";
      return span;
    });
    el.textContent = "";
    chars.forEach((s) => el.appendChild(s));

    gsap.from(chars, {
      opacity: 0,
      y: 60,
      stagger: 0.04,
      delay: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--bg-void)" }}
    >
      {/* Aurora background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(27,79,228,0.12), transparent), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(193,18,31,0.06), transparent)",
        }}
      />

      {/* Floating particles */}
      <HeroParticles />

      {/* Spotlight */}
      <SpotlightOverlay />

      {/* Zanpakuto sword SVG in background */}
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none opacity-[0.04] flex items-center justify-end pr-16 overflow-hidden">
        <svg viewBox="0 0 80 600" width="80" height="600" fill="none">
          <path
            d="M40 20 L48 280 L40 580 L32 280 Z"
            stroke="var(--white-soul)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="900"
            strokeDashoffset="900"
            style={{ animation: "swordDraw 3s ease forwards 1s" }}
          />
          <line
            x1="10" y1="270" x2="70" y2="270"
            stroke="var(--gold-spirit)"
            strokeWidth="2"
            strokeDasharray="60"
            strokeDashoffset="60"
            style={{ animation: "swordDraw 0.5s ease forwards 2.5s" }}
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Division badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-12" style={{ backgroundColor: "var(--red-reiatsu)" }} />
          <span
            className="font-accent text-xs tracking-[0.4em] uppercase"
            style={{ color: "var(--gold-spirit)" }}
          >
            Gotei 13 · Division XX · Your Division
          </span>
          <div className="h-px w-12" style={{ backgroundColor: "var(--red-reiatsu)" }} />
        </motion.div>

        {/* Hero name */}
        <h1
          ref={nameRef}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6"
          style={{ color: "var(--white-soul)", lineHeight: 1.05 }}
        >
          Your Name
        </h1>

        {/* Subtitle typewriter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg md:text-xl mb-10"
          style={{ color: "var(--ash)", minHeight: "2rem" }}
        >
          <Typewriter />
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <MagneticButton
            onClick={() => scrollTo("projects")}
            variant="primary"
          >
            View Projects
          </MagneticButton>
          <MagneticButton
            onClick={() => scrollTo("contact")}
            variant="secondary"
          >
            Contact Me
          </MagneticButton>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-accent text-xs tracking-widest uppercase" style={{ color: "var(--ash)" }}>
            Scroll
          </span>
          <div className="w-px h-12 overflow-hidden" style={{ backgroundColor: "var(--ash)" }}>
            <motion.div
              className="w-full h-full"
              style={{ backgroundColor: "var(--gold-spirit)" }}
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MagneticButton({
  children,
  onClick,
  variant,
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant: "primary" | "secondary";
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0,0)";
    el.style.transition = "transform 0.4s ease";
  };

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative px-8 py-3 font-accent text-sm tracking-widest uppercase transition-all duration-300 overflow-hidden group"
      style={{
        color: variant === "primary" ? "var(--bg-void)" : "var(--white-soul)",
        backgroundColor: variant === "primary" ? "var(--white-soul)" : "transparent",
        border: variant === "secondary" ? "1px solid var(--ash)" : "none",
        transition: "transform 0.15s ease, background-color 0.3s, border-color 0.3s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        if (variant === "secondary") {
          el.style.borderColor = "var(--gold-spirit)";
          el.style.color = "var(--gold-spirit)";
        } else {
          el.style.backgroundColor = "var(--gold-spirit)";
        }
      }}
      onMouseOut={(e) => {
        const el = e.currentTarget;
        if (variant === "secondary") {
          el.style.borderColor = "var(--ash)";
          el.style.color = "var(--white-soul)";
        } else {
          el.style.backgroundColor = "var(--white-soul)";
        }
      }}
    >
      {/* Moving border shimmer */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent)",
          animation: "goldBorder 2s linear infinite",
        }}
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
}
