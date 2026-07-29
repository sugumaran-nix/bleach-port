"use client";

export default function Footer() {
  return (
    <footer
      className="relative py-8 px-6 text-center"
      style={{ backgroundColor: "var(--bg-void)" }}
    >
      <div
        className="max-w-6xl mx-auto border-t pt-8"
        style={{ borderColor: "var(--red-reiatsu)" }}
      >
        <p
          className="font-accent text-xs tracking-[0.4em] uppercase"
          style={{ color: "var(--ash)" }}
        >
          間 // Your Name // Soul Society · Est. Your Year
        </p>
      </div>
    </footer>
  );
}
