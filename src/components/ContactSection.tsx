"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  tx: number;
  ty: number;
}

function HellButterfly({ fly }: { fly: boolean }) {
  return (
    <AnimatePresence>
      {fly && (
        <motion.div
          initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          animate={{
            opacity: [1, 1, 0.8, 0.4, 0],
            x: [0, 40, 120, 240, 400],
            y: [0, -30, -80, -160, -280],
            rotate: [0, 15, -10, 20, 30],
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute -top-4 right-8 pointer-events-none z-10"
        >
          <svg viewBox="0 0 48 32" width="48" height="32" fill="none">
            {/* Wings */}
            <motion.ellipse
              cx="16" cy="16" rx="14" ry="8"
              fill="rgba(193,18,31,0.8)"
              stroke="var(--gold-spirit)"
              strokeWidth="0.5"
              animate={{ scaleX: [1, 0.3, 1] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            />
            <motion.ellipse
              cx="32" cy="16" rx="14" ry="8"
              fill="rgba(193,18,31,0.8)"
              stroke="var(--gold-spirit)"
              strokeWidth="0.5"
              animate={{ scaleX: [1, 0.3, 1] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            />
            {/* Body */}
            <line x1="24" y1="10" x2="24" y2="24" stroke="var(--ash)" strokeWidth="1.5" />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ParticleBurst({ particles }: { particles: Particle[] }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 1, x: p.x, y: p.y, scale: 1 }}
          animate={{ opacity: 0, x: p.x + p.tx, y: p.y + p.ty, scale: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: p.id % 3 === 0 ? "var(--gold-spirit)" : "var(--red-reiatsu)",
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });
  const [submitted, setSubmitted] = useState(false);
  const [flying, setFlying] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = () => {
    if (!form.name && !form.email) return;

    // Burst particles
    const center = formRef.current?.getBoundingClientRect();
    const px = center ? center.width / 2 : 200;
    const py = center ? center.height / 2 : 150;

    setParticles(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: px,
        y: py,
        tx: (Math.random() - 0.5) * 200,
        ty: (Math.random() - 0.5) * 200,
      }))
    );

    setFlying(true);
    setTerminalLines([
      "$ Dispatching hell butterfly...",
      `$ Recipient: ${form.name || "Unknown Shinigami"}`,
      `$ Channel: ${form.email || "soul-link"}`,
      "$ Transmission: SUCCESS",
      "$ Hell butterfly dispatched. ✓",
    ]);
    setSubmitted(true);

    setTimeout(() => setParticles([]), 1500);
    setTimeout(() => setFlying(false), 2500);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-void)" }}
    >
      {/* Vortex background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full"
            style={{
              border: `1px solid rgba(27,79,228,${0.04 + i * 0.01})`,
              scale: 0.3 + i * 0.25,
            }}
            animate={{ rotate: [0, i % 2 === 0 ? 360 : -360] }}
            transition={{ duration: 20 + i * 8, repeat: Infinity, ease: "linear" }}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(27,79,228,0.06), transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12" style={{ backgroundColor: "var(--red-reiatsu)" }} />
          <span className="font-accent text-xs tracking-[0.5em] uppercase" style={{ color: "var(--gold-spirit)" }}>
            Send a Hell Butterfly
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-6xl font-bold mb-14"
          style={{ color: "var(--white-soul)" }}
        >
          Get in Touch
        </motion.h2>

        {/* Terminal form */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden rounded-sm"
          style={{ backgroundColor: "var(--bg-surface)", border: "1px solid var(--ash)" }}
        >
          <ParticleBurst particles={particles} />
          <HellButterfly fly={flying} />

          {/* Terminal title bar */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ backgroundColor: "rgba(58,58,63,0.3)", borderColor: "var(--ash)" }}
          >
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F57" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FEBC2E" }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28C840" }} />
            <span
              className="font-accent text-xs tracking-widest ml-4 uppercase"
              style={{ color: "var(--ash)" }}
            >
              Seireitei Communications Terminal v1.0
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-8">
            {/* Prompt lines */}
            <div className="mb-6">
              <p className="font-body text-xs mb-1" style={{ color: "var(--ash)" }}>
                <span style={{ color: "var(--red-reiatsu)" }}>shinigami@seireitei</span>
                <span style={{ color: "var(--ash)" }}>:</span>
                <span style={{ color: "var(--blue-getsuga)" }}>~</span>
                <span style={{ color: "var(--white-soul)" }}> $ dispatch_butterfly --secure</span>
              </p>
              <p className="font-body text-xs" style={{ color: "rgba(240,240,242,0.4)" }}>
                Secure channel opened. Enter transmission details below.
              </p>
            </div>

            {submitted ? (
              // Success state
              <div className="space-y-2">
                {terminalLines.map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="font-body text-sm"
                    style={{
                      color: i === terminalLines.length - 1 ? "var(--gold-spirit)" : "rgba(240,240,242,0.7)",
                      fontFamily: "monospace",
                    }}
                  >
                    {line}
                  </motion.p>
                ))}
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="mt-6 font-accent text-xs tracking-widest uppercase px-4 py-2"
                  style={{ color: "var(--ash)", border: "1px solid var(--ash)" }}
                >
                  Send Another →
                </button>
              </div>
            ) : (
              // Form fields
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="font-body text-xs mb-2 block" style={{ color: "var(--ash)", fontFamily: "monospace" }}>
                    <span style={{ color: "var(--red-reiatsu)" }}>→</span> recipient.name:
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent outline-none font-body text-sm pb-2"
                    style={{
                      color: "var(--white-soul)",
                      borderBottom: "1px solid var(--ash)",
                      caretColor: "var(--red-reiatsu)",
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-body text-xs mb-2 block" style={{ color: "var(--ash)", fontFamily: "monospace" }}>
                    <span style={{ color: "var(--red-reiatsu)" }}>→</span> soul.link:
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent outline-none font-body text-sm pb-2"
                    style={{
                      color: "var(--white-soul)",
                      borderBottom: "1px solid var(--ash)",
                      caretColor: "var(--red-reiatsu)",
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="font-body text-xs mb-2 block" style={{ color: "var(--ash)", fontFamily: "monospace" }}>
                    <span style={{ color: "var(--red-reiatsu)" }}>→</span> transmission.content:
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Your message here..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent outline-none font-body text-sm pb-2 resize-none"
                    style={{
                      color: "var(--white-soul)",
                      borderBottom: "1px solid var(--ash)",
                      caretColor: "var(--red-reiatsu)",
                    }}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="font-accent text-sm tracking-widest uppercase px-8 py-3 transition-all duration-300 group"
                  style={{
                    color: "var(--bg-void)",
                    backgroundColor: "var(--white-soul)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--gold-spirit)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--white-soul)";
                  }}
                >
                  Dispatch Hell Butterfly →
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-6 mt-10"
        >
          {[
            { label: "GitHub", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Email", href: "mailto:your@email.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-accent text-xs tracking-widest uppercase px-4 py-2 transition-all duration-300"
              style={{
                color: "var(--ash)",
                border: "1px solid var(--ash)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--gold-spirit)";
                e.currentTarget.style.borderColor = "var(--gold-spirit)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--ash)";
                e.currentTarget.style.borderColor = "var(--ash)";
              }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
