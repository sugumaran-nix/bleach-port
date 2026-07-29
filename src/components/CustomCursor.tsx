"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouseX = -100;
    let mouseY = -100;

    const trail: { x: number; y: number; alpha: number; size: number }[] = [];
    const MAX_TRAIL = 28;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      trail.push({ x: mouseX, y: mouseY, alpha: 1, size: 4 });
      if (trail.length > MAX_TRAIL) trail.shift();
    };

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    let rafId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < trail.length; i++) {
        const t = trail[i];
        const progress = i / trail.length;
        t.alpha = progress * 0.7;

        const redGrad = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, t.size * 3);
        redGrad.addColorStop(0, `rgba(193,18,31,${t.alpha})`);
        redGrad.addColorStop(0.5, `rgba(212,175,55,${t.alpha * 0.4})`);
        redGrad.addColorStop(1, "rgba(193,18,31,0)");

        ctx.beginPath();
        ctx.arc(t.x, t.y, t.size * (1 + progress), 0, Math.PI * 2);
        ctx.fillStyle = redGrad;
        ctx.fill();
      }

      // Main cursor dot
      const grad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 10);
      grad.addColorStop(0, "rgba(240,240,242,0.95)");
      grad.addColorStop(0.3, "rgba(193,18,31,0.6)");
      grad.addColorStop(1, "rgba(193,18,31,0)");
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 10, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
