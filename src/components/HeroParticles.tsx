"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
  color: string;
}

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();

    const COLORS = [
      "rgba(240,240,242,",
      "rgba(193,18,31,",
      "rgba(212,175,55,",
      "rgba(27,79,228,",
    ];

    const particles: Particle[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -(Math.random() * 0.5 + 0.2),
      alpha: Math.random() * 0.6 + 0.1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    let rafId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= 0.001;

        if (p.y < 0 || p.alpha <= 0) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + 10;
          p.alpha = Math.random() * 0.6 + 0.1;
          p.speedX = (Math.random() - 0.5) * 0.3;
          p.speedY = -(Math.random() * 0.5 + 0.2);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    const resizeObs = new ResizeObserver(setSize);
    resizeObs.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObs.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
