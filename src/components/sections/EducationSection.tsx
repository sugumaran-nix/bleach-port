"use client";
// Education card pattern: primereact.org timeline, orbit.kiwi card
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react";
import { EDUCATION } from "@/data";
import ZanpakutoSlash from "@/components/effects/ZanpakutoSlash";

export default function EducationSection() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <p className="section-tag mb-3">Background</p>
          <h2 className="font-display text-4xl md:text-5xl mb-4" style={{ color: "var(--text)" }}>
            EDUCATION
          </h2>
          <ZanpakutoSlash />
        </motion.div>

        <div className="space-y-6">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "var(--accent-glow)", color: "var(--accent)" }}
                >
                  <GraduationCap size={26} />
                </div>

                {/* Main content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-heading text-xl font-bold" style={{ color: "var(--text)" }}>
                        {edu.degree}
                      </h3>
                      <p className="font-heading text-lg font-semibold" style={{ color: "var(--accent)" }}>
                        {edu.major}
                      </p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
                      <span
                        className="inline-flex items-center gap-1 text-sm font-mono"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <Calendar size={13} /> {edu.startYear} – {edu.endYear}
                      </span>
                      <span
                        className="text-sm font-heading font-semibold px-3 py-0.5 rounded"
                        style={{ backgroundColor: "var(--accent-glow)", color: "var(--accent)" }}
                      >
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-5 text-sm" style={{ color: "var(--text-muted)" }}>
                    <MapPin size={13} />
                    <span>{edu.institution}, {edu.location}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Coursework */}
                    <div>
                      <h4
                        className="flex items-center gap-2 text-xs font-heading font-bold tracking-widest uppercase mb-3"
                        style={{ color: "var(--text-faint)" }}
                      >
                        <BookOpen size={13} /> Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((c) => (
                          <span key={c} className="tag">{c}</span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4
                        className="flex items-center gap-2 text-xs font-heading font-bold tracking-widest uppercase mb-3"
                        style={{ color: "var(--text-faint)" }}
                      >
                        <Award size={13} /> Achievements
                      </h4>
                      <ul className="space-y-1.5">
                        {edu.achievements.map((a) => (
                          <li
                            key={a}
                            className="flex items-start gap-2 text-sm"
                            style={{ color: "var(--text-muted)" }}
                          >
                            <span style={{ color: "var(--accent)", marginTop: 3 }}>▸</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
