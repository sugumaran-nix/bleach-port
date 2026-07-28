"use client";
// Decorative Hollow mask SVG — subtle background element
// Dark theme only (Vasto Lorde form)
export default function HollowMask({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`hollow-mask-bg ${className}`}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Stylised hollow mask shape */}
      <ellipse cx="100" cy="90" rx="65" ry="75" fill="none" stroke="currentColor" strokeWidth="3" />
      <ellipse cx="76" cy="75" rx="14" ry="18" fill="none" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="124" cy="75" rx="14" ry="18" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M70 115 Q100 130 130 115" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="100" y1="30" x2="100" y2="10" stroke="currentColor" strokeWidth="2.5" />
      <line x1="100" y1="10" x2="90" y2="0" stroke="currentColor" strokeWidth="2" />
      <line x1="100" y1="10" x2="110" y2="0" stroke="currentColor" strokeWidth="2" />
      <line x1="60" y1="50" x2="40" y2="40" stroke="currentColor" strokeWidth="1.5" />
      <line x1="140" y1="50" x2="160" y2="40" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
