// Pattern from: mantine.dev footer, mui.com footer layout
import Link from "next/link";
import { GitFork, Globe, Link2, Mail, Zap, ExternalLink } from "lucide-react";

const FOOTER_LINKS = {
  Pages: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Connect: [
    { label: "GitHub", href: "https://github.com/yourname", external: true },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourname", external: true },
    { label: "Twitter / X", href: "https://twitter.com/yourname", external: true },
    { label: "Email Me", href: "mailto:yourname@email.com", external: false },
  ],
};

const SOCIAL_ICONS = [
  { Icon: GitFork, href: "https://github.com/yourname", label: "GitHub" },
  { Icon: Globe, href: "https://linkedin.com/in/yourname", label: "LinkedIn" },
  { Icon: Link2, href: "https://twitter.com/yourname", label: "Twitter" },
  { Icon: Mail, href: "mailto:yourname@email.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: "var(--accent)" }}>
                <Zap size={16} color="#fff" strokeWidth={2.5} />
              </div>
              <span className="font-heading text-lg font-bold" style={{ color: "var(--text)" }}>
                Your Name<span style={{ color: "var(--accent)" }}>.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "var(--text-muted)" }}>
              A passionate fresher developer building clean, impactful software. Open to full-time roles, internships, and collaborations.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_ICONS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="theme-toggle"
                  style={{ width: 36, height: 36 }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="font-heading font-bold text-sm tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
                {section}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm transition-colors duration-200 hover:text-accent"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {link.label}
                        <ExternalLink size={11} />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm transition-colors duration-200 hover:text-accent"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider mt-10 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ color: "var(--text-faint)" }}>
          <p>© {new Date().getFullYear()} Your Name. Built with Next.js 14 & Tailwind CSS.</p>
          <p className="flex items-center gap-1">
            Themed after
            <span style={{ color: "var(--accent)", fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>
              ⚔ Bleach
            </span>
            — Tite Kubo
          </p>
        </div>
      </div>
    </footer>
  );
}
