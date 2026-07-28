"use client";
// Certificate card pattern: heroui.com card, uiverse.io badge cards
import { motion } from "framer-motion";
import { Cloud, Code2, Globe, BarChart2, Layers, GitBranch, ExternalLink } from "lucide-react";
import { CERTIFICATES } from "@/data";
import ZanpakutoSlash from "@/components/effects/ZanpakutoSlash";

const ICON_MAP: Record<string, React.ReactNode> = {
  Cloud: <Cloud size={22} />,
  Code2: <Code2 size={22} />,
  Globe: <Globe size={22} />,
  BarChart2: <BarChart2 size={22} />,
  Layers: <Layers size={22} />,
  GitBranch: <GitBranch size={22} />,
};

export default function CertificatesSection() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="section-tag mb-3">Credentials</p>
          <h2 className="font-display text-4xl md:text-5xl mb-4" style={{ color: "var(--text)" }}>
            CERTIFICATIONS
          </h2>
          <ZanpakutoSlash />
          <p className="text-base max-w-xl" style={{ color: "var(--text-muted)" }}>
            Verified learning from industry-leading platforms and tech companies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="card p-5 group cursor-default"
            >
              {/* Top row: icon + date */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: cert.color + "22", color: cert.color }}
                >
                  {ICON_MAP[cert.icon] || <Code2 size={22} />}
                </div>
                <span className="text-xs font-mono" style={{ color: "var(--text-faint)" }}>
                  {cert.date}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-heading text-base font-bold leading-tight mb-1 group-hover:text-accent transition-colors" style={{ color: "var(--text)" }}>
                {cert.title}
              </h3>
              <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>
                {cert.issuer}
              </p>

              {/* Credential ID */}
              <div
                className="flex items-center justify-between pt-3 text-xs font-mono"
                style={{ borderTop: "1px solid var(--border)", color: "var(--text-faint)" }}
              >
                <span>ID: {cert.credentialId}</span>
                <a
                  href="#"
                  className="flex items-center gap-1 transition-colors"
                  style={{ color: "var(--accent)" }}
                  aria-label="View credential"
                >
                  Verify <ExternalLink size={10} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
