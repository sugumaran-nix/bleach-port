"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUp, ArrowUpRight, Circle, Crosshair, Menu, X, Zap } from "lucide-react";
import ArchiveInteractions from "@/components/ArchiveInteractions";
import Soundboard, { playArchiveCue } from "@/components/Soundboard";

const relics = [
  { id: "01", title: ["NIGHT", "SHIFT"], kind: "Product interface", signal: "98.4", year: "2025", copy: "A command surface for teams moving faster than their dashboards. Rebuilt around rhythm, focus, and zero-noise decisions.", tags: ["React", "Motion", "Systems"], image: "/hero-spirit-night.webp", accent: "#d84242" },
  { id: "02", title: ["RED", "THREAD"], kind: "Generative identity", signal: "92.1", year: "2024", copy: "A living visual system that turns data into a pulse: part identity, part instrument, part invitation to look closer.", tags: ["Brand", "WebGL", "Art direction"], image: "/reiatsu-smoke.webp", accent: "#b99157" },
  { id: "03", title: ["EMPTY", "ROOM"], kind: "Digital experience", signal: "89.7", year: "2024", copy: "An editorial room for ideas in progress. Every interaction has a little tension, then a release.", tags: ["Next.js", "Editorial", "UX"], image: "/ink-wash-texture.webp", accent: "#e8e2d7" },
];

const techniques = [
  { name: "PYTHON", label: "AI / ML foundation", copy: "I use Python to turn data, models, and experiments into useful working systems." },
  { name: "FASTAPI", label: "Backend systems", copy: "I shape dependable APIs that make intelligent capabilities accessible to real products." },
  { name: "REACT.JS", label: "Interface craft", copy: "I build responsive interfaces that make complex workflows feel clear and immediate." },
  { name: "MACHINE LEARNING", label: "Applied intelligence", copy: "I explore how models can become practical tools people understand and trust." },
];

function Glyph({ small = false }: { small?: boolean }) {
  return <span className={small ? "glyph glyph-small" : "glyph"}><span>S</span><i>S</i></span>;
}

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [bankai, setBankai] = useState(false);
  const [mask, setMask] = useState(false);
  const [menu, setMenu] = useState(false);
  const [activeRelic, setActiveRelic] = useState(relics[0]);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 22 });
  const signalX = useTransform(smoothProgress, [0, 1], [0, 180]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "b" && entered) {
        setBankai((current) => {
          const next = !current;
          playArchiveCue("bankai");
          return next;
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [entered]);

  useEffect(() => {
    const onMaskKey = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "m" && entered) {
        setMask((current) => {
          const next = !current;
          playArchiveCue("mask");
          return next;
        });
      }
    };
    window.addEventListener("keydown", onMaskKey);
    return () => window.removeEventListener("keydown", onMaskKey);
  }, [entered]);

  useEffect(() => {
    const onMove = (event: MouseEvent) => setMouse({ x: (event.clientX / window.innerWidth) * 100, y: (event.clientY / window.innerHeight) * 100 });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const chapter = useMemo(() => entered ? "ARCHIVE" : "GATE", [entered]);

  return (
    <div className={`archive-shell ${bankai ? "bankai-mode" : ""} ${mask ? "mask-mode" : ""}`} style={{ "--mx": `${mouse.x}%`, "--my": `${mouse.y}%` } as React.CSSProperties}>
      <ArchiveInteractions />
      <Soundboard />
      <AnimatePresence>{bankai && <motion.div className="bankai-release" initial={{ opacity: 0, scale: 1.12 }} animate={{ opacity: [0, 1, 0], scale: [1.12, 1, 1] }} transition={{ duration: 1.35, ease: "easeInOut" }}><span>BANKAI</span><small>ARCHIVE RELEASED</small></motion.div>}</AnimatePresence>
      <AnimatePresence>{mask && <motion.div className="mask-release" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.15 }}><div className="mask-crest"><i /><b /><em /></div><span>HOLLOW MASK</span><small>INSTINCT UNSEALED</small></motion.div>}</AnimatePresence>
      <AnimatePresence>{!entered && <Gate onEnter={() => setEntered(true)} />}</AnimatePresence>
      <motion.div className="top-signal" style={{ scaleX: smoothProgress }} />
      <header className="archive-header">
        <a href="#gate" className="brand-lockup" aria-label="Return to gate"><Glyph small /><span>ARCHIVE / 09</span></a>
        <div className="header-status"><Circle size={8} fill="currentColor" /> SIGNAL {chapter} <span className="header-line" /> 18.08.26</div>
        <button className="mask-trigger" onClick={() => { setMask(!mask); playArchiveCue("mask"); }} aria-pressed={mask}>{mask ? "REMOVE MASK" : "HOLLOW MASK"}<span>M</span></button><button className="bankai-trigger" onClick={() => { setBankai(!bankai); playArchiveCue("bankai"); }} aria-pressed={bankai}>{bankai ? "SEAL BANKAI" : "RELEASE BANKAI"}<span>B</span></button><button className="menu-trigger" onClick={() => { setMenu(!menu); playArchiveCue("menu"); }} aria-label="Open archive menu">{menu ? <X size={18} /> : <Menu size={18} />}</button>
      </header>
      <AnimatePresence>{menu && <motion.nav className="menu-panel" initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}>{["gate", "signal", "vault", "ranks", "arsenal", "transmission"].map((item, index) => <a key={item} href={`#${item}`} onClick={() => setMenu(false)}><span>0{index + 1}</span>{item}</a>)}</motion.nav>}</AnimatePresence>
      <aside className="chapter-rail" aria-label="Archive chapters"><span className="rail-label">CHAPTERS</span><div className="rail-track"><motion.i style={{ top: signalX }} /></div>{["GATE", "SIGNAL", "VAULT", "RANKS", "ARSENAL", "TRANSMISSION"].map((item, index) => <a href={`#${item.toLowerCase()}`} key={item}><b>0{index + 1}</b><span>{item}</span></a>)}</aside>

      <main>
        <section className="gate-section" id="gate"><div className="hero-image" /><div className="hero-vignette" /><div className="hero-grid" /><div className="hero-copy"><p className="eyebrow"><Zap size={13} /> AI/ML / FULL-STACK / OPEN TO WORK</p><h1>I BUILD<br /><em>WORLDS</em><br />THAT ANSWER<br /><span>BACK.</span></h1><div className="hero-foot"><p>SUGUMARAN S<br /><span>AI/ML + FULL-STACK DEVELOPER</span></p><a href="#signal" className="round-link"><ArrowDown size={18} /></a></div></div><div className="hero-mark"><Glyph /><span>THE LIVING<br />BLADE ARCHIVE</span></div><p className="hero-index">MCA / 2026<br /><span>THE UNSEEN<br />BECOMES USEFUL</span></p></section>

        <section className="signal-section archive-section" id="signal"><div className="section-meta"><span>01 / THE SIGNAL</span><span>IDENTITY TRANSMISSION</span></div><div className="signal-layout"><div className="signal-copy"><p className="display-kicker">A small pressure<br />can move a room.</p><h2>I am Sugumaran S,<br /><span>and I make the<br />invisible feel obvious.</span></h2></div><div className="signal-orbit"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><img src="/spirit-seal.webp" loading="lazy" decoding="async" alt="Abstract spirit seal" /><div className="orbit-caption">CURRENT STATE<br /><strong>OPEN TO WORK</strong></div></div><div className="signal-note"><span>TRANSMISSION_001</span><p>I build intelligent products across machine learning, APIs, and interfaces. My stack moves from Python and FastAPI to React.js, with certifications in Generative AI, LLM foundations, prompt engineering, and SQL.</p><a href="#ranks">READ THE TRACE <ArrowUpRight size={14} /></a></div></div></section>

        <section className="vault-section archive-section" id="vault"><div className="section-meta"><span>02 / THE MEMORY VAULT</span><span>SELECT A RELIC TO DECODE</span></div><div className="vault-intro"><h2>WORK WITH<br /><em>AFTERIMAGE.</em></h2><p>Not case studies. Evidence. Each relic is a record of a problem that survived contact with reality.</p></div><div className="relic-stage"><div className="relic-list">{relics.map((relic) => <button key={relic.id} className={`relic-row ${activeRelic.id === relic.id ? "is-active" : ""}`} onMouseEnter={() => playArchiveCue("hover")} onClick={() => { setActiveRelic(relic); playArchiveCue("select"); }}><span>{relic.id}</span><strong>{relic.title.map((line) => <span key={line}>{line}</span>)}</strong><small>{relic.kind}</small><span className="relic-signal-bar" /><ArrowUpRight size={16} /></button>)}</div><motion.div className="relic-preview" key={activeRelic.id} initial={{ opacity: 0, scale: 0.97, x: 16 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.55 }} style={{ "--accent": activeRelic.accent } as React.CSSProperties}><img src={activeRelic.image} alt="Abstract project atmosphere" loading="lazy" decoding="async" /><div className="preview-overlay" /><span className="preview-signal">SIGNAL {activeRelic.signal}</span><div className="preview-copy"><span>{activeRelic.year} / {activeRelic.kind}</span><h3>{activeRelic.title.map((line) => <span key={line}>{line}</span>)}</h3><p>{activeRelic.copy}</p><div className="tag-line">{activeRelic.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></motion.div></div></section>

        <section className="ranks-section archive-section" id="ranks"><div className="section-meta"><span>03 / THE RANKS</span><span>FIELD NOTES / 2021—2026</span></div><div className="ranks-layout"><div><p className="display-kicker">Every release<br />leaves a mark.</p><h2>THE<br /><span>ASCENT.</span></h2></div><div className="rank-list">{[{ year: "2026", title: "MCA / AI-ML developer", copy: "Completing a Master of Computer Applications at Anna University while building practical intelligent software." }, { year: "2024", title: "BCA graduate", copy: "Graduated from Bharathiar University with a foundation in computer applications and software development." }, { year: "NOW", title: "Open to work", copy: "Looking for opportunities across AI/ML, Python, FastAPI, React.js, and full-stack product engineering." }].map((rank, index) => <div className="rank-item" key={rank.year}><span className="rank-number">0{index + 1}</span><span className="rank-year">{rank.year}</span><div><h3>{rank.title}</h3><p>{rank.copy}</p></div><ArrowUpRight size={16} /></div>)}</div></div></section>

        <section className="arsenal-section archive-section" id="arsenal"><div className="section-meta"><span>04 / THE ARSENAL</span><span>TECHNIQUES IN RESONANCE</span></div><div className="arsenal-heading"><h2>TOOLS ARE<br /><em>TECHNIQUES.</em></h2><p>Choose a seal. Watch the archive answer.</p></div><div className="technique-grid">{techniques.map((technique, index) => <motion.div className="technique" key={technique.name} whileHover={{ y: -10, rotate: index % 2 ? 1 : -1 }}><div className="technique-seal"><span>0{index + 1}</span><Crosshair size={24} /></div><span className="technique-label">{technique.label}</span><h3>{technique.name}</h3><p>{technique.copy}</p><div className="technique-bar"><i style={{ width: `${88 - index * 7}%` }} /></div></motion.div>)}</div></section>

        <section className="transmission-section archive-section" id="transmission"><div className="transmission-glow" /><div className="section-meta"><span>05 / OPEN CHANNEL</span><span>THE UNFINISHED TRANSMISSION</span></div><div className="transmission-inner"><p className="eyebrow"><Circle size={8} fill="currentColor" /> CHANNEL IS OPEN</p><h2>IF THE IDEA<br />HAS <em>PRESSURE,</em><br />SEND IT.</h2><a className="transmission-button" href="mailto:sugumarankugan@gmail.com" onClick={() => playArchiveCue("transmission")} onMouseEnter={() => playArchiveCue("hover")}>START A TRANSMISSION <ArrowUpRight size={18} /></a><p className="transmission-small">Coimbatore, Tamil Nadu · Open to work across AI/ML and full-stack development.</p></div></section>
      </main>
      <footer className="archive-footer"><Glyph small /><span>SUGUMARAN S / THE LIVING BLADE ARCHIVE</span><a href="https://github.com/sugumaran-nix" target="_blank" rel="noreferrer"><ArrowUpRight size={15} /> GITHUB</a><a href="https://www.linkedin.com/in/sugumaran-nix" target="_blank" rel="noreferrer"><ArrowUpRight size={15} /> LINKEDIN</a><a href="#gate"><ArrowUp size={15} /> RETURN TO GATE</a></footer>
    </div>
  );
}

function Gate({ onEnter }: { onEnter: () => void }) {
  return <motion.div className="gate-loader" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.8, delay: 0.2 } }}><div className="loader-sigil"><motion.div className="loader-ring" animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} /><Glyph /></div><div className="loader-copy"><span>ARCHIVE // 09</span><strong>SIGNAL FOUND</strong><small>The unseen becomes useful.</small></div><button onClick={() => { playArchiveCue("entry"); onEnter(); }}>ENTER THE ARCHIVE <ArrowUpRight size={15} /></button><span className="loader-foot">CLICK TO WAKE THE WORLD / 001 // B: BANKAI / M: MASK</span></motion.div>;
}
