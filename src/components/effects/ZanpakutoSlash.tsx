"use client";
// Sword slash decorative divider — iconic Bleach motif
import { motion } from "framer-motion";

export default function ZanpakutoSlash({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 my-2 ${className}`} aria-hidden="true">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          height: 2,
          width: 48,
          background: "linear-gradient(90deg, var(--accent), transparent)",
          transformOrigin: "left",
          borderRadius: 1,
        }}
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.3 }}
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "var(--accent)",
        }}
      />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        style={{
          height: 2,
          width: 24,
          background: "linear-gradient(90deg, transparent, var(--accent))",
          transformOrigin: "right",
          borderRadius: 1,
        }}
      />
    </div>
  );
}
