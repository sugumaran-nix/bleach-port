"use client";
// Pattern inspired by: headlessui.com (mobile menu), radix-ui.com (accessible nav)
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { NAV_LINKS } from "@/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggle, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled || menuOpen ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded flex items-center justify-center transition-all duration-200 group-hover:scale-110"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <Zap size={16} color="#fff" strokeWidth={2.5} />
            </div>
            <span className="font-heading text-lg font-bold tracking-wide" style={{ color: "var(--text)" }}>
              YN<span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={`nav-link ${pathname === link.href ? "active" : ""}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {mounted && (
              <button onClick={toggle} className="theme-toggle" aria-label="Toggle theme">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            )}
            <Link href="/contact" className="hidden md:inline-flex btn-accent text-sm py-2 px-4">
              Hire Me
            </Link>
            <button onClick={() => setMenuOpen((o) => !o)} className="md:hidden theme-toggle" aria-label="Toggle menu">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={menuOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {menuOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mobile-menu md:hidden overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                  <Link href={link.href} className={`nav-link block py-3 text-base ${pathname === link.href ? "active" : ""}`}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: NAV_LINKS.length * 0.06 }} className="pt-2">
                <Link href="/contact" className="btn-accent w-full justify-center mt-2">Hire Me</Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
