"use client";
// Decorative reiatsu energy orbs — light theme: orange glow, dark theme: purple glow
export default function ReiatsuOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="reiatsu-orb"
        style={{
          width: 600,
          height: 600,
          top: "-10%",
          right: "-15%",
          backgroundColor: "var(--accent-glow)",
          filter: "blur(100px)",
          opacity: 0.6,
        }}
      />
      <div
        className="reiatsu-orb"
        style={{
          width: 400,
          height: 400,
          bottom: "10%",
          left: "-10%",
          backgroundColor: "var(--accent-glow)",
          filter: "blur(80px)",
          opacity: 0.4,
        }}
      />
    </div>
  );
}
