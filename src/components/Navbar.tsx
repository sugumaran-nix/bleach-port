"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setActiveLink(id);
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[9990] w-[calc(100%-2rem)] max-w-3xl"
    >
      <div
        className="flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(17,17,19,0.92)" : "rgba(17,17,19,0.6)",
          borderColor: scrolled ? "var(--ash)" : "rgba(58,58,63,0.4)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
        }}
      >
        {/* Logo */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2 group">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M14 2 L26 24 L2 24 Z"
              stroke="var(--red-reiatsu)"
              strokeWidth="1.5"
              fill="none"
              className="group-hover:fill-reiatsu transition-all duration-300"
              style={{ transition: "fill 0.3s" }}
            />
            <line x1="14" y1="8" x2="14" y2="22" stroke="var(--gold-spirit)" strokeWidth="1" />
          </svg>
          <span className="font-accent text-sm tracking-widest uppercase" style={{ color: "var(--white-soul)" }}>
            YN
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="relative px-3 py-1.5 font-accent text-xs tracking-widest uppercase transition-colors duration-300 group"
              style={{ color: activeLink === link ? "var(--gold-spirit)" : "var(--ash)" }}
            >
              <span className="group-hover:text-white-soul transition-colors duration-200"
                style={{ color: "inherit" }}>
                {link}
              </span>
              {activeLink === link && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-px"
                  style={{ backgroundColor: "var(--gold-spirit)" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              backgroundColor: "var(--white-soul)",
              transform: mobileOpen ? "rotate(45deg) translate(2px, 2px)" : "none",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              backgroundColor: "var(--white-soul)",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              backgroundColor: "var(--white-soul)",
              transform: mobileOpen ? "rotate(-45deg) translate(2px, -2px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scaleY: 0.9 }}
            animate={{ opacity: 1, y: 4, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.9 }}
            style={{ transformOrigin: "top", backgroundColor: "rgba(17,17,19,0.97)", borderColor: "var(--ash)", backdropFilter: "blur(20px)" }}
            className="mt-2 rounded-2xl border p-4 flex flex-col gap-2"
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="font-accent text-sm tracking-widest uppercase py-2 border-b text-left"
                style={{ color: "var(--white-soul)", borderColor: "var(--ash)" }}
              >
                {link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
