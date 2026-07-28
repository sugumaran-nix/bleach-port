"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Zap } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Reiatsu background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 65%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center max-w-lg"
      >
        {/* Big 404 */}
        <div
          className="font-display text-[160px] md:text-[200px] leading-none mb-0 select-none"
          style={{
            color: "var(--accent)",
            opacity: 0.15,
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          404
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="-mt-10 mb-6"
        >
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4"
            style={{ backgroundColor: "var(--accent-glow)", border: "2px solid var(--accent)" }}
          >
            <Zap size={36} style={{ color: "var(--accent)" }} />
          </div>
          <h1 className="font-display text-4xl md:text-5xl mb-3" style={{ color: "var(--text)" }}>
            BANKAI NOT FOUND
          </h1>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Looks like this page got erased by a Hollow. The route you&apos;re looking for doesn&apos;t exist in Soul Society.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <Link href="/" className="btn-accent">
            <ArrowLeft size={15} /> Back to Home
          </Link>
          <Link href="/projects" className="btn-outline">
            View Projects
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
