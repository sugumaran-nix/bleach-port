"use client";

import { useEffect } from "react";
import { animate, stagger } from "animejs";

export default function ArchiveInteractions() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const activeAnimations: Array<{ pause?: () => void }> = [];
    const observers: IntersectionObserver[] = [];
    const root = document.documentElement;
    const heroSigil = document.querySelector<HTMLElement>(".hero-mark .glyph");
    const rail = document.querySelector<HTMLElement>(".rail-track i");
    const halo = document.querySelector<HTMLElement>(".transmission-glow");
    let pointerFrame = 0;
    let scrollFrame = 0;
    let pointer = { x: 0, y: 0 };
    let scrollProgress = 0;

    const applyPointer = () => {
      pointerFrame = 0;
      const x = pointer.x / window.innerWidth - 0.5;
      const y = pointer.y / window.innerHeight - 0.5;
      root.style.setProperty("--pressure-x", `${x * 18}px`);
      root.style.setProperty("--pressure-y", `${y * 18}px`);
      if (heroSigil) {
        heroSigil.style.transform = `translate3d(${x * 8}px, ${y * 8}px, 0) rotate(${x * 14}deg)`;
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (reduced) return;
      pointer = { x: event.clientX, y: event.clientY };
      if (!pointerFrame) pointerFrame = window.requestAnimationFrame(applyPointer);
    };

    const applyScroll = () => {
      scrollFrame = 0;
      root.style.setProperty("--archive-pressure", `${scrollProgress}`);
      if (rail) rail.style.transform = `translate3d(0, ${scrollProgress * 240}px, 0)`;
      if (halo) halo.style.setProperty("--halo-pressure", `${1 + scrollProgress * 0.18}`);
    };

    const onScroll = () => {
      if (reduced) return;
      scrollProgress = window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(applyScroll);
    };

    if (!reduced) {
      const loaderRing = document.querySelector<HTMLElement>(".loader-ring");
      if (loaderRing) activeAnimations.push(animate(loaderRing, { rotate: "1turn", duration: 14000, loop: true, ease: "linear" }));
    }

    const revealTargets = document.querySelectorAll<HTMLElement>(".archive-section .section-meta, .display-kicker, .vault-intro, .ranks-layout, .arsenal-heading, .transmission-inner");
    revealTargets.forEach((element) => {
      element.dataset.revealed = "false";
      const observer = new IntersectionObserver((entries) => {
        if (!entries.some((entry) => entry.isIntersecting) || element.dataset.revealed === "true") return;
        element.dataset.revealed = "true";
        if (reduced) {
          element.classList.add("is-revealed");
          return;
        }
        activeAnimations.push(animate(element, { opacity: [0, 1], translateY: [22, 0], duration: 850, ease: "out(4)" }));
      }, { threshold: 0.15 });
      observer.observe(element);
      observers.push(observer);
    });

    const onRelicEnter = (event: Event) => {
      if (reduced) return;
      const bar = (event.currentTarget as HTMLElement).querySelector<HTMLElement>(".relic-signal-bar");
      if (bar) activeAnimations.push(animate(bar, { scaleX: [0, 1], duration: 520, ease: "out(4)" }));
    };

    const relicRows = document.querySelectorAll<HTMLElement>(".relic-row");
    relicRows.forEach((row) => row.addEventListener("pointerenter", onRelicEnter, { passive: true }));
    const menuLinks = document.querySelectorAll<HTMLElement>(".chapter-rail a");
    if (!reduced && menuLinks.length) activeAnimations.push(animate(menuLinks, { translateX: [0, 4, 0], delay: stagger(90), duration: 700, ease: "out(3)" }));

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      relicRows.forEach((row) => row.removeEventListener("pointerenter", onRelicEnter));
      observers.forEach((observer) => observer.disconnect());
      activeAnimations.forEach((animation) => animation.pause?.());
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
    };
  }, []);

  return null;
}
